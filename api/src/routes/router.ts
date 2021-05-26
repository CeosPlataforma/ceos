import { request, response, Router } from 'express';
import { UserModel } from '../models/User'
import * as bodyparser from 'body-parser';
import crypto from 'crypto';
import('../database/')
const router = Router();

router.get('/', (request, response) => {
    response.status(200).sendFile('D:/Programacao/ceos-main/website/landing-page/')
});

const urlencodedparser = bodyparser.urlencoded({ extended: false });

router.post('/login', urlencodedparser, async (request, response) => {

    const { email, password } = request.body;
    UserModel.findOne({ email }, (error, user) => {
        if (user === null) {
            return response.status(400).send({ message: 'Invalid username/password' })
        } else {
            if (user.validPassword(request.body.password)) {
                return response.status(201).send({ message: "User logged in" });
            } else {
                return response.status(400).send({ message: "Wrong password" })
            }
        }
    });
});

router.post('/register', urlencodedparser, async (request, response) => {

    const newUser = new UserModel();
    newUser.name = request.body.name;
    newUser.email = request.body.email;
    newUser.salt = crypto.randomBytes(16).toString('base64');
    newUser.hash = crypto.pbkdf2Sync(request.body.password, newUser.salt, 1000, 64, 'sha512').toString('base64');

  /*schema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('base64');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('base64');
    };
   */

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        response.status(200).redirect('/acessar/acessar.html');
    } catch (err) {
        response.status(500).json(err);
    }

    // const user = new UserModel({
    //     email: request.body.email,
    //     name:  request.body.name,
    //     password: request.body.password
    // });

    // try {
    //     const savedUser = await user.save();
    //     console.log(savedUser);
    //     response.status(200).redirect('/acessar/acessar.html');
    // }
    // catch (err) {
    //     response.status(500).json(err);
    // }
});

export { router };