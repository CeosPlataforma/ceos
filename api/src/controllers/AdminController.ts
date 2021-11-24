import { Request, Response } from 'express';
import mongoose, { Types } from 'mongoose';
import { resolve } from 'path';
import { AtividadeModel } from '../models/Atividade';
import { FeedbackModel } from '../models/Feedback'
import { MateriaModel } from '../models/Materia';
import { TicketModel } from '../models/Ticket';
import { UserModel } from '../models/User';
import SendMail from '../services/SendMail';

class AdminController {
    
    async deleteTicket(request: Request, response: Response) {
        const uuid = request.body.uuid
        console.log(request.body)

        //const tickets = await TicketModel.findById(id).exec()
        //console.log(typeof tickets._id)

        //console.log(mongoose.connections)
        await TicketModel.findOneAndDelete({uuid: uuid}, { useFindAndModify: false })
        .then(doc => {
            //console.log(doc)
        }).catch(error => console.log(error))
        //console.log(ticket)
        // ticket.resolvido = true
        // ticket.save()
        return response.json({ success: true })
    }

    async solveTicket(request: Request, response: Response) {
        const uuid = request.body.uuid
        console.log(request.body)

        //const tickets = await TicketModel.findById(id).exec()
        //console.log(typeof tickets._id)

        //console.log(mongoose.connections)
        await TicketModel.findOneAndUpdate({uuid: uuid}, { $set: { resolvido: true } }, { useFindAndModify: false })
        .then(doc => {
            console.log(doc)
        }).catch(error => console.log(error))
        //console.log(ticket)
        // ticket.resolvido = true
        // ticket.save()
        return response.json({ success: true })
    }

    async editUser(request: Request, response: Response) {
        const uuid = request.body.uuid
        const _id = request.body._id

        const newv = {
            nome: request.body.novo.nome,
            email: request.body.novo.email,
            verifiedMail: request.body.novo.verifiedMail
        }

        const oldv = {
            nome: request.body.velho.nome,
            email: request.body.velho.email,
            verifiedMail: request.body.velho.verifiedMail
        }

        const nome_changed = oldv.nome !== newv.nome
        const email_changed = oldv.email !== newv.email
        const verifiedMail_changed = oldv.verifiedMail !== newv.verifiedMail

        const changed_v = {
            nome: nome_changed,
            email: email_changed,
            verifiedMail: verifiedMail_changed,
        }

        console.log("old", oldv)
        console.log("new", newv)
        console.log("changed", changed_v)

        const changed: Boolean = changed_v.nome || changed_v.email || changed_v.verifiedMail

        if (!changed) {
            return response.json({ message: "no-change" })
        }

        const user = await UserModel.findById(_id, (error, res) => error ? console.log(error) : console.log(res))

        if (changed_v.nome) {
            //@ts-ignore
            user.name = newv.nome
        }

        if (changed_v.email) {
            //@ts-ignore
            user.email = newv.email
            const pathNotif = resolve(__dirname, "..", "views", "email", "emailChangeNotif.hbs");

            const variables = {
                nome: changed_v.nome ? newv.nome : oldv.nome,
                link: `http://localhost:3333/register/${uuid}`
            }

            try {
                await SendMail.execute(oldv.email, "Seu email mudou", variables, pathNotif);
            } catch (error) {
                console.log(error)
            }

        }

        if (changed_v.verifiedMail) {
            //@ts-ignore
            user.verifiedMail = newv.verifiedMail
            if (newv.verifiedMail == false) {
                const pathConfirmar = resolve(__dirname, "..", "views", "email", "confirmEmail.hbs");

                const variables = {
                    nome: changed_v.nome ? newv.nome : oldv.nome,
                    link: `http://localhost:3333/register/${uuid}`
                }

                try {
                    await SendMail.execute(changed_v.email ? newv.email : oldv.email, "Confirmação do Email", variables, pathConfirmar);
                } catch (error) {
                    console.log(error);
                    return response.json({ message: "erro-total", error });
                }
            }
        }

        try {
            user.save()
            return response.json({ success: true })
        } catch (error) {
            console.log(error)
            return response.json({ success: false })
        }
    }

    async deleteUser(request: Request, response: Response) {
        const _id = request.body._id
        const uuid = request.body.uuid
        try {
            UserModel.findByIdAndDelete(_id).exec()
            MateriaModel.deleteMany({ user: uuid })
            AtividadeModel.deleteMany({ user: uuid })
            return response.json({ success: true })
        } catch (error) {
            console.log(error)
            return response.json(error)
        }
    }

    async count(request: Request, response: Response) {
        const userCount = await UserModel.countDocuments({}, (error, count) => { if (error) throw new Error("erro"); else count })
        const ticketCount = await TicketModel.countDocuments({}, (error, count) => { if (error) throw new Error("erro"); else count })
        const feedbackCount = await FeedbackModel.countDocuments({}, (error, count) => { if (error) throw new Error("erro"); else count })
        //console.log(userCount)
        return response.json({ userCount, ticketCount, feedbackCount })
    }

    async getMessages(request: Request, response: Response) {
        FeedbackModel.find({}).exec(async (error, mensagens) => {
            if (error) {
                console.log(error)
            } else if (!mensagens.length) {
                return response.json({ message: "sem-mensagens" });
            } else {
                return response.send(mensagens);
            }
        })
    }

    async getUsers(request: Request, response: Response) {
        UserModel.find({}).exec(async (error, users) => {
            if (error) {
                console.log(error)
            } else if (!users.length) {
                return response.json({ message: "sem-users" });
            } else {
                return response.send(users);
            }
        })
    }

    async getTickets(request: Request, response: Response) {
        TicketModel.find({}).exec(async (error, tickets) => {
            if (error) {
                console.log(error)
            } else if (!tickets.length) {
                return response.json({ message: "sem-tickets" });
            } else {
                return response.send(tickets);
            }
        })
    }
}
export { AdminController }