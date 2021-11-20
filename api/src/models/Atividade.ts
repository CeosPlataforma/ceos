import { Schema, model, Document, Types } from 'mongoose';

interface Atividade {
    name: string;
    createdAt: Date;
    dueBy: Date;
    uuid: string;
    user: string;
    materia: Types.ObjectId;
    atv_type: string;
    description: string;
    trashed: boolean;
    concluida: boolean;
}

const schema = new Schema<Atividade>({

    name: {
        type: String,
        default: '',
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },

    dueBy: {
        type: Date
    },

    description: {
        type: String
    },

    atv_type: {
        type: String
    },

    uuid: {
        type: String,
        index: true
    },

    user: { 
        type: String,
        ref: 'User',
        required: true
    },

    trashed: {
        type: Boolean,
        default: false
    },

    concluida: {
        type: Boolean,
        default: false
    },

    materia: { 
        type: 'ObjectId',
        ref: 'Materia',
        required: true
    }

});

const AtividadeModel = model<Atividade>('Atividade', schema);

export { AtividadeModel };