import { request, response, Router } from 'express';
import { MailController } from '../controllers/MailController';
import { UserModel } from '../models/User'
import { resolve } from 'path';
import crypto from 'crypto';
import { validate } from 'uuid';
import SendMail from '../services/SendMail';
import { UserController } from '../controllers/UserController';
import('../database/')
const router = Router();

router.get('/', (request, response) => {
    response.status(200).sendFile('D:/Programacao/ceos-main/website/landing-page/');
});

const mailController = new MailController();
router.post('/contato', mailController.contato);

const userController = new UserController();
router.post('/login', userController.login);
router.post('/register', userController.registerUser);
router.get('/register/:userID', userController.verifyEmail);

export { router };