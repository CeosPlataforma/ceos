import { Schema, model } from 'mongoose';

interface Materia {
    name: string;
    createdAt: Date;
    uuid: string;
    user: string;
    atividades: Array<String>;
}

const schema = new Schema<Materia>({

    name: {
        type: String,
        default: '',
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
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

    atividades: [{
        type: String,
        ref: 'Atividade'
    }]

});

const MateriaModel = model<Materia>('Materia', schema);

export { MateriaModel };