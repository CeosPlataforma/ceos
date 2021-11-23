import { Schema, model } from 'mongoose';

interface Materia {
    name: string;
    createdAt: Date;
    uuid: string;
    user: string;
    professor: string;
}

const schema = new Schema<Materia>({

    name: {
        type: String,
        default: '',
        required: true
    },

    professor: {
        type: String,
        default: '',
        required: false
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
    }

});

const MateriaModel = model<Materia>('Materia', schema);

export { MateriaModel };