import { Router } from 'express';
import { MailController } from '../controllers/MailController';
import { MateriaController } from '../controllers/MateriaController';
import { UserController } from '../controllers/UserController';
import('../database/')
const router = Router();

router.get('/', (request, response) => {
    response.status(200).redirect('http://localhost:3000/')
});

const mailController = new MailController();
router.post('/contato', mailController.contato);

const materiaController = new MateriaController();
router.post('/materia', materiaController.createMateria);
router.get('/materia', materiaController.getAllMaterias);

const userController = new UserController();
router.post('/login', userController.login);
router.post('/register', userController.registerUser);
router.get('/register/:userID', userController.verifyEmail);

router.post('/logout', userController.logout)
router.post('/redefinir-senha/', userController.resetPassword)

router.get('/userinfo', userController.userinfo)

router.post('/upload-foto/', userController.uploadFoto)
router.get('/get-foto/', userController.getFoto)

router.patch('/mudar-senha/', userController.mudarSenha)
router.patch('/mudar-dados/', userController.mudarDados)

router.post('/deletar-usuario/', userController.deletarUsuario)

export { router };
