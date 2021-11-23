import { Request, Response } from 'express';
import { FeedbackModel } from '../models/Feedback'
import { TicketModel } from '../models/Ticket';
import { UserModel } from '../models/User';

class AdminController {
    
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