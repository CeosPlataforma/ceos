import { request, response, Router } from 'express';
import { MailController } from '../controllers/MailController';
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
router.get('/userinfo', userController.userinfo)
router.post('/register', userController.registerUser);
router.get('/register/:userID', userController.verifyEmail);

router.post('/fuck', (req, res) => {
    console.log(req.body)
    const returnMsg = req.body.fodase + "" + req.body.fods;
    return res.json({return: returnMsg})
});

export { router };