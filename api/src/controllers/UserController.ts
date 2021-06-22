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
        newUser.email = request.body.email;
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

    }

    async login(request: Request, response: Response){

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

    }

    async verifyEmail(request: Request, response: Response){

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
    }
}

export { UserController };