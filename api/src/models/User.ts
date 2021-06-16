import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

interface User {
    email: string;
    name: string,
    hash: string;
    salt: string;
    createdAt: Date;
    uuid: string;
}

let schema = new Schema<User>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },

    hash: String,
    salt: String,

    createdAt: {
        type: Date,
        default: Date.now()
    },
    uuid: {
        type: String,
        default: uuid()
    }
});

/*schema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('base64');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('base64');
};*/

schema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('base64');
    return this.hash === hash;
};

const UserModel = model<User>('User', schema);

export { UserModel };