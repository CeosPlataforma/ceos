import crypto from 'crypto';
import { Request, Response } from 'express';
import { resolve } from 'path';
import { validate } from 'uuid';
import { UserModel } from '../models/User';
import SendMail from "../services/SendMail";

class UserController {

    async registerUser(request: Request, response: Response) {

        const newUser = new UserModel();
        newUser.name = request.body.name;
        newUser.email = request.body.email.toLowerCase();
        newUser.salt = crypto.randomBytes(16).toString('base64');
        newUser.hash = crypto.pbkdf2Sync(request.body.password, newUser.salt, 1000, 64, 'sha512').toString('base64');
        newUser.uuid = crypto.randomUUID({disableEntropyCache: true});

        try {
            const savedUser = await newUser.save();
            console.log(savedUser);
            const hbsPath = resolve(__dirname, "..", "views", "email", "confirmEmail.hbs");

            const variables = {
                nome: request.body.name,
                link: `http://localhost:3333/register/${savedUser.uuid}`
            }

            try {
                await SendMail.execute(request.body.email, "Confirmação do Email", variables, hbsPath);
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
                return response.json({ error: 'inexistent' });
            } else {
                console.log("existente")
                if (user.validPassword(request.body.password)) {
                    if (user.verifiedMail == true) {
                        request.session.user = {
                            email,
                            name: user.name,
                            id: user._id,
                            uuid: user.uuid
                        };
                        request.session.save()
                        console.log({
                            message: "session",
                            "session.user": request.session.user
                        });
                        console.log("sucesso")
                        return response.status(201).json({ message: "User logged in", user: request.session.user });
                    } else {
                        console.log("verificar")
                        return response.json({ error: "verify" });
                    }
                } else {
                    console.log("senha")
                    return response.json({ error: "password" });
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
                        return response.status(200).redirect('http://localhost:3000/acessar');
                    } catch (err) {
                        return response.status(500).send(err);
                    }
                }
            });
        }
    }

    async userinfo(request: Request, response: Response) {
        response.json({
            session: request.session
        });
    }

    async logout(request: Request, response: Response) {
        request.session.destroy((err) => {
            
        })
        console.log("session destruida")
    }

    async resetPassword(request: Request, response: Response) {
        
        if (request.body.hasOwnProperty('email')) { 
            const { email } = request.body 
            await UserModel.findOne({ email: email }, function (error, user_doc) { 
                if (error) { 
                    console.log(error)
                    return response.json({error: error})
                } else if (user_doc === null) {
                    return response.json({error: "inexistent"})
                } else { 
                    const hbsPath = resolve(__dirname, "..", "views", "email", "forgotPassword.hbs");

                    const variables = {
                        nome: request.body.name,
                        link: `http://localhost:3000/redefinir-senha/${user_doc.uuid}` 
                    }

                    try {
                        SendMail.execute(request.body.email, "Mudança de Senha", variables, hbsPath); 
                        return response.status(200).json({ success: true });
                    } catch (err) {
                        console.log(err);
                        return response.json({ error: "Erro ao enviar email" });
                    }
                }
            });
        } else if (request.body.user_uuid) { // se tiver o id do usuario, faz isso 🔽

            const { user_uuid }  = request.body; // id do usuario
            const { password } = request.body; // senha 
            const new_salt = crypto.randomBytes(16).toString('base64'); // coisas de hash e segurança e tal
            const new_hash = crypto.pbkdf2Sync(password, new_salt, 1000, 64, 'sha512').toString('base64'); // coisas de hash e segurança e tal
            await UserModel.findOneAndUpdate({ uuid: user_uuid }, {salt: new_salt, hash: new_hash}, {new: false, useFindAndModify: false}, function (error, user_doc) { 
                //pesquisar o usuario no banco, 
                if (error) { // se der erro
                    console.log(error)
                    return response.json({error: error})
                } else if (user_doc === null) { // se não existir o usuario
                    return response.json({error: "inexistent"})
                } else {
                    return response.json({success: true}) // se der tudo certo (já vai ter mudado a senha se o usuario existir)
                }
            });

        }
    }

    async getFoto(request: Request, response: Response) {
        const { uuid } = request.session.user;
        await UserModel.findOne({ uuid }, (error, user) => {
            if (user === null) {
                return response.json({ error: 'inexistent' });
            } else if (error) {
                return response.json({ error: error });
            } else {
                console.log(user.avatar);
                return response.json({ foto: user.avatar });
            }
        });
    }

    async uploadFoto(request: Request, response: Response) {
        const { uuid } = request.session.user;
        await UserModel.findOne({ uuid: uuid }, function (error, user) {
            if (user === null) {
                return response.status(200).send({ message: `Couldn't find this user` });
            } else {
                //@ts-ignore
                user.avatar.data = request.files.image.data
                //@ts-ignore
                user.avatar.contentType = request.files.image.mimetype

                try {
                    user.save();
                    return response.status(200).json({message: "success"});
                } catch (error) {
                    return response.status(500).send(error);
                }
            }
        });
    }

    async mudarDados(request: Request, response: Response) {
        console.log(request.body)
    }
    
    async mudarSenha(request: Request, response: Response) {
        console.log(request.body)
        const { password, newPassword } = request.body;
        const new_salt = crypto.randomBytes(16).toString('base64'); // coisas de hash e segurança e tal
        const new_hash = crypto.pbkdf2Sync(newPassword, new_salt, 1000, 64, 'sha512').toString('base64');

        const { uuid } = request.session.user;
        console.log({ newPassword, password });

        await UserModel.findOne({ uuid }, (error, user) => {
            if (user === null) {
                console.log("inexistente")
                return response.json({ error: 'inexistent' });
            } else {
                console.log("existente")
                if (user.validPassword(password)) {
                    
                    user.salt = new_salt;
                    user.hash = new_hash

                    user.save().then(saved => {
                        console.log(saved);
                    });

                    request.session.destroy((err) => {});

                    console.log("senha mudada")
                    return response.json({ message: "success" });

                } else {

                    console.log("senha")
                    return response.json({ error: "password" });
                    
                }
            }
        });
    }

    async deletarUsuario(request: Request, response: Response) {
        const { email, password } = request.body;
        console.log({ email, password });
        await UserModel.findOne({ email }, (error, user) => {
            if (user === null) {
                console.log("inexistente")
                return response.json({ error: 'inexistent' });
            } else {
                console.log("existente")
                if (user.validPassword(request.body.password)) {
                    request.session.destroy((err) => {});
                    user.remove()
                    console.log("usuario removido")
                    return response.json({ message: "success" });
                } else {
                    console.log("senha")
                    return response.json({ error: "password" });
                }
            }
        });
    }

}

export { UserController };
