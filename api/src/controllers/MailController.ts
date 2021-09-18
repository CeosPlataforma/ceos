import { Request, Response } from "express";
import { resolve } from "path";
import SendMail from "../services/SendMail" 

class MailController {
    async contato(request: Request, response: Response) {

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
            await SendMail.execute("ceos.plataforma@gmail.com", assunto, variables, hbsPath);
            return response.status(200).json({ message: "logo a equipe entrara em contato com você" });
        } catch (err) {
            console.log(err);
            return response.status(500).json({ message: "erro para realizar o envio da mensagem de contato" });
        }
    }
}

export { MailController };