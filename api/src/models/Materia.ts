import { Schema, model } from 'mongoose';

interface Materia {
    name: string;
    createdAt: Date;
    uuid: string;
    user: string;
}

let schema = new Schema<Materia>({

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
        type: String
    },

    user: { 
        type: String,
        ref: 'User',
        required: true
    }

});

const MateriaModel = model<Materia>('Materia', schema);

export { MateriaModel };