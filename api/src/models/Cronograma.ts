import { Schema, model, Types } from 'mongoose'

interface Cronograma {
    user: Types.ObjectId;
    cronograma_obj: Array<Object>;
    uuid: string;
}

const schema = new Schema<Cronograma>({

    user: {
        type: 'ObjectId',
        required: true
    },

    cronograma_obj: {
        type: Array,
        required: true,
        default: [{
            id: 0,
            hora: '7:00', seg: '', ter: '', qua: '', qui: '', sex: '', sab: '', dom: ''
        }]
    },

    uuid: {
        type: String,
        required: true,
        index: true
    },
});

const CronogramaModel = model<Cronograma>('Cronograma', schema);

export { CronogramaModel }