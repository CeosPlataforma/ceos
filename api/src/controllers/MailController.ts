import { Request, Response } from "express";
import { resolve } from "path";
import SendMail from "../services/SendMail"
import { TicketModel } from "../models/Ticket"

class MailController {
    async contato(request: Request, response: Response) {

        const nome = request.body.nome;
        const email = request.body.email;
        const assunto = request.body.assunto;
        const mensagem = request.body.mensagem;

        const ticket = new TicketModel()
        ticket.nome = nome
        ticket.email = email
        ticket.assunto = assunto
        ticket.mensagem = mensagem

        const hbsPath = resolve(__dirname, "..", "views", "email", "supportMail.hbs");

        const variables = {
            nome,
            email,
            assunto,
            msg: mensagem
        }

        try {
            await ticket.save()
            //await SendMail.execute("ceos.plataforma@gmail.com", assunto, variables, hbsPath);
            return response.status(200).json({ message: "logo a equipe entrara em contato com você" });
        } catch (err) {
            console.log(err);
            return response.status(500).json({ message: "erro para realizar o envio da mensagem de contato" });
        }
    }

    async get(request: Request, response: Response) {

    }
}

export { MailController };