import { verificarToken } from '../middlewares/auth.middleware.js';
import { Router } from 'express';
import { loginCliente, perfilCliente, registrarCliente } from '../controllers/clienteController.js';
import { validarCamposCliente, validarCredenciales } from '../middlewares/validar.middleware.js';
const router = Router();
// Publica: quien se registra todavia no tiene token
router.post('/registro', validarCamposCliente, registrarCliente);
router.post('/login', validarCredenciales, loginCliente);
router.get('/perfil', verificarToken, perfilCliente);

export default router;
