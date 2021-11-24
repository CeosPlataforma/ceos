import { Schema, model } from 'mongoose';

interface Ticket {
    email: string;
    assunto: string;
    mensagem: string;
    nome: string;
    resolvido: boolean;
}

const schema = new Schema<Ticket>({

    email: {
        type: String,
        required: false
    },

    assunto: {
        type: String,
        required: true
    },

    mensagem: {
        type: String,
        required: true
    },

    nome: {
        type: String,
        required: true
    },

    resolvido: {
        type: Boolean,
        required: false,
        default: false
    }

});

const TicketModel = model<Ticket>('Ticket', schema);

export { TicketModel };