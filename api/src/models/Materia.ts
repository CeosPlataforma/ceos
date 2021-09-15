import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

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

    user: { 
        type: String,
        ref: 'User',
        required: true
    }

});

const MateriaModel = model<Materia>('Materia', schema);

export { MateriaModel };