import { request, response, Router } from 'express';
import { UserModel } from '../models/User'
import { resolve } from 'path';
import * as bodyparser from 'body-parser';
import crypto from 'crypto';
import SendMail from '../services/SendMail';
import('../database/')
const router = Router();

router.get('/', (request, response) => {
    response.status(200).sendFile('D:/Programacao/ceos-main/website/landing-page/')
});

const urlencodedparser = bodyparser.urlencoded({ extended: false });

/* user login session stuff TODO */

router.post('/login', urlencodedparser, async (request, response) => {

    const { email, password } = request.body;
    UserModel.findOne({ email }, (error, user) => {
        if (user === null) {
            return response.status(400).send({ message: 'Invalid email' })
        } else {
            if (user.validPassword(request.body.password)) {
                return response.status(201).send({ message: "User logged in" })
            } else {
                return response.status(400).send({ message: "Invalid password" })
            }
        }
    });
});

router.post('/register', urlencodedparser, async (request, response) => {

    /*UserModel.exists({ email: request.body.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            return response.status(400).json({ message: "This email has already been used" });
        }
    });*/

    const newUser = new UserModel();
    newUser.name = request.body.name;
    newUser.email = request.body.email;
    newUser.salt = crypto.randomBytes(16).toString('base64');
    newUser.hash = crypto.pbkdf2Sync(request.body.password, newUser.salt, 1000, 64, 'sha512').toString('base64');

    /*schema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('base64');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('base64');
    };*/

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        response.status(200).redirect('/acessar/acessar.html');
    } catch (err) {
        response.status(500).json(err);
    }

    /*const user = new UserModel({
        email: request.body.email,
        name:  request.body.name,
        password: request.body.password
    });

    try {
        const savedUser = await user.save();
        console.log(savedUser);
        response.status(200).redirect('/acessar/acessar.html');
    }
    catch (err) {
        response.status(500).json(err);
    }*/
});

/* contato */

router.post('/contato', urlencodedparser, async (request, response) => {

    const nome = request.body.nome;
    const email = request.body.email;
    const assunto = request.body.assunto;
    const mensagem = request.body.mensagem;

    const hbsPath = resolve(__dirname, "..", "views", "email", "supportMail.hbs");

    const variables = {
        nome,
        email,
        assunto,
        msg: mensagem
    }

    try {
        await SendMail.execute("sistema@ceos.xyz", assunto, variables, hbsPath);
        return response.status(200).json({ message: "logo a equipe entrara em contato com você" });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ message: "deu erro patrão" });
    }
});

export { router };