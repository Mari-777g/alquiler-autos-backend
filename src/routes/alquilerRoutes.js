import { Router } from 'express';
import { verificarToken } from '../middlewares/auth.middleware.js';
import { devolverVehiculo, historial, realizarAlquiler } from '../controllers/alquilerController.js';
import { validarCamposAlquiler, validarIdNumerico } from '../middlewares/validar.middleware.js';

const router = Router();
// Todas exigen token: un alquiler siempre pertenece a alguien identificado
router.post('/', verificarToken, validarCamposAlquiler, realizarAlquiler);
router.post('/historial', verificarToken, historial);
router.put('/devolver/:id', verificarToken, validarIdNumerico, devolverVehiculo);


export default router;