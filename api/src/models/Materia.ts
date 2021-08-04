import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

interface Materia {
    name: string;
    createdAt: Date;
    uuid: string;
    user: Schema.Types.ObjectId;
}

let schema = new Schema<Materia>({

    name: {
        type: String,
        default: '',
        unique: true,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },

    uuid: {
        type: String,
        default: uuid()
    },

    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

const MateriaModel = model<Materia>('Materia', schema);

export { MateriaModel };