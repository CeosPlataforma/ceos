import { Request, Response } from 'express';
import { UserModel } from '../models/User';
import { validate } from 'uuid';
import SendMail from "../services/SendMail";
import { resolve } from 'path';
import crypto from 'crypto';

class UserController {

    async registerUser(request: Request, response: Response) {

        const newUser = new UserModel();
        newUser.name = request.body.name;
        newUser.email = request.body.email.toLowerCase();
        newUser.salt = crypto.randomBytes(16).toString('base64');
        newUser.hash = crypto.pbkdf2Sync(request.body.password, newUser.salt, 1000, 64, 'sha512').toString('base64');
        //console.log(newUser);

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
                return response.status(200).json({ message: "sucesso" });
            } catch (err) {
                console.log(err);
                return response.status(500).json({ message: "Erro ao enviar email de verificação" });
            }
        } catch (err) {
            if (err.code === 11000) {
                return response.json({ message: "Este email já esta em uso", emailInUse: true })
            }
        }
    }

    async login(request: Request, response: Response) {
        const { email, password } = request.body;
        console.log({ email, password });
        await UserModel.findOne({ email }, (error, user) => {
            if (user === null) {
                console.log("inexistente")
                return response.status(400).json({ message: 'User doesn\'t exist' });
            } else {
                console.log("existente")
                if (user.validPassword(request.body.password)) {
                    if (user.verifiedMail == true) {
                        request.session.user = user;
                        console.log({
                            message: "session",
                            request: request.session.user
                        });
                        console.log("sucesso")
                        return response.status(201).json({ message: "User logged in" });
                    } else {
                        console.log("verificar")
                        return response.status(400).json({ message: "Please verify your email address before logging in" });
                    }
                } else {
                    console.log("senha")
                    return response.status(400).json({ message: "Wrong password" });
                }
            }
        });
    }

    async verifyEmail(request: Request, response: Response) {

        const uuid = request.params.userID;
        if (!validate(uuid)) {
            return response.status(500).json({
                msg: "invalid uuid given"
            });
        } else {
            UserModel.findOne({ uuid }, async (error, user) => {
                if (user === null) {
                    return response.status(400).send({ message: `Couldn't find this user` });
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
    }

    async session(request: Request, response: Response) {

    }
}

export { UserController };