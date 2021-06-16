import { request, response, Router } from 'express';
import { UserModel } from '../models/User'
import { resolve } from 'path';
import crypto from 'crypto';
import { validate } from 'uuid';
import SendMail from '../services/SendMail';
import('../database/')
const router = Router();

router.get('/', (request, response) => {
    response.status(200).sendFile('D:/Programacao/ceos-main/website/landing-page/');
});

/* user login session stuff TODO */

router.post('/login', async (request, response) => {

    const { email, password } = request.body;
    UserModel.findOne({ email }, (error, user) => {
        if (user === null) {
            return response.status(400).send({ message: 'Invalid email' });
        } else {
            if (user.validPassword(request.body.password)) {
                if(user.verifiedMail == true) {
                    return response.status(201).send({ message: "User logged in" });
                } else {
                    return response.status(400).send({ message: "You need to verify your email address before logging in"});
                }
            } else {
                return response.status(400).send({ message: "Invalid password" });
            }
        }
    });
});

router.post('/register', async (request, response) => {

    const newUser = new UserModel();
    newUser.name = request.body.name;
    newUser.email = request.body.email;
    // newUser.uuid = uuid();
    newUser.salt = crypto.randomBytes(16).toString('base64');
    newUser.hash = crypto.pbkdf2Sync(request.body.password, newUser.salt, 1000, 64, 'sha512').toString('base64');

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);

        const hbsPath = resolve(__dirname, "..", "views", "email", "confirmEmail.hbs");
        const variables = {
            nome: request.body.name,
            link: `localhost:3333/register/${savedUser.uuid}` 
        }
        
        try {
            await SendMail.execute("suporte@ceos.com", "Confirmação do Email", variables, hbsPath);
            return response.status(200).redirect('/acessar/acessar.html');
        } catch (err) {
            console.log(err);
            return response.status(500).json({ message: "erro para realizar o envio da mensagem de verificar email" });
        }
        
    } catch (err) {
        response.status(500).json(err);
    }

});

router.get('/register/:userID', async (request, response) => {

    const uuid = request.params.userID;

    if (!validate(uuid)) {
        return response.status(500).json({
            msg: "invalid uuid given"
        });
    } else {
        UserModel.findOne({ uuid }, async (error, user) => {
            if (user === null) {
                return response.status(400).send({ message: `Couldn't find this user`});
            } else {
                try {
                    user.verifiedMail = true;
                    await user.save().then(saved => {
                        console.log(saved);
                    });
                    return response.status(200).send({ message: `Successfully verified the user's email address` });
                } catch (err) {
                    return response.status(500).send(err);
                }
            }
        });
    }
});

/* contato */

router.post('/contato', async (request, response) => {

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
        await SendMail.execute("suporte@ceos.com", assunto, variables, hbsPath);
        return response.status(200).json({ message: "logo a equipe entrara em contato com você" });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ message: "erro para realizar o envio da mensagem de contato" });
    }
});

export { router };