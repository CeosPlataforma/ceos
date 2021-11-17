import { Router } from 'express';
import { AtividadeController } from '../controllers/AtividadeController';
import { MailController } from '../controllers/MailController';
import { MateriaController } from '../controllers/MateriaController';
import { UserController } from '../controllers/UserController';
import { CronogramaController } from '../controllers/CronogramaController'
import('../database/')
const router = Router();

router.get('/', (request, response) => {
    response.status(200).redirect('http://localhost:3000/')
});

// EMAIL

const mailController = new MailController();
router.post('/contato', mailController.contato);

// MATERIAS

const materiaController = new MateriaController();
router.post('/materia', materiaController.createMateria);
router.get('/materia', materiaController.getAllMaterias);
router.post('/materia-rename', materiaController.rename)
router.post('/materia-details', materiaController.getMateria)
router.post('/materia-deletar', materiaController.delete)
// USUARIO

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

// ATIVIDADES 

const atividadeController = new AtividadeController();
router.post('/atividades', atividadeController.criarAtividade)
router.post('/get-atividades', atividadeController.getAtividades)
router.get('/get-atividades', atividadeController.getAllAtividades)
router.post('/delete-atividade', atividadeController.delete)
router.patch('/editar-atividade', atividadeController.edit)

// CRONOGRAMA
const cronogramaController = new CronogramaController();
router.get('/cronograma', cronogramaController.getCronograma)
router.post('/cronograma', cronogramaController.saveCronograma)

export { router };
