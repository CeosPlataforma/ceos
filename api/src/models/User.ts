import { Schema, model } from 'mongoose';
import crypto from 'crypto';

interface User {
    email: string;
    name: string;
    hash: string;
    salt: string;
    createdAt: Date;
    uuid: string;
    verifiedMail: boolean;
    avatar?: string;
    materias?: Array<String>;
}

const schema = new Schema<User>({

    verifiedMail: {
        type: Boolean,
        default: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    avatar: {
        data: Buffer,
        contentType: String
    },

    hash: String,
    salt: String,

    createdAt: {
        type: Date,
        default: Date.now()
    },
    
    materias: [{
        type: String,
        ref: 'Materia'
    }],

    uuid: {
        type: String,
        index: true
    }
});

schema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('base64');
    return this.hash === hash;
};

const UserModel = model<User>('User', schema);

export { UserModel };