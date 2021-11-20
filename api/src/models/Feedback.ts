import { Schema, model } from 'mongoose';

interface Feedback {
    email: string;
    reason: string;
    message: string;
}

const schema = new Schema<Feedback>({

    email: {
        type: String,
        required: false
    },

    reason: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }

});

const FeedbackModel = model<Feedback>('Feedback', schema);

export { FeedbackModel };