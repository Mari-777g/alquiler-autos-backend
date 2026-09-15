import { Router } from "express";
import { verificarToken } from "../middlewares/auth.middleware.js";
import { actualizarAuto, crearAuto, eliminarAuto, listarAutos, listarDisponibles, obtenerAuto } from "../controllers/autoController.js";
import { validarCamposAuto, validarIdNumerico } from "../middlewares/validar.middleware.js";

// Las rutas fijas van SIEMPRE antes que las que llevan parametro
const router = Router();
router.post('/', verificarToken, crearAuto);
router.get('/', listarAutos);
router.get('/disponibles', listarDisponibles);
router.post('/', verificarToken, validarCamposAuto, crearAuto);
router.get('/', listarAutos);
router.get('/:id', validarIdNumerico, obtenerAuto);
router.put('/:id', verificarToken, validarIdNumerico, actualizarAuto);
router.delete('/:id', verificarToken, validarIdNumerico, eliminarAuto);

export default router;