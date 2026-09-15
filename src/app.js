import express from 'express';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes.js';
import autoRoutes from './routes/autoRoutes.js';
import alquilerRoutes from './routes/alquilerRoutes.js';
import { manejadorErrores } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
// Para que Express entienda JSON en el body de las peticiones
app.use(express.json());

// Ruta de prueba: verificar que la API esta viva
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API de alquiler de Autos funcionario correctamente'
    });
});

app.use('/api/clientes', clienteRoutes);
app.use('/api/autos', autoRoutes);
app.use('/api/alquiler', alquilerRoutes)

// Cualquier peticion que no coincidio con nada de arriba
app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});
app.use(manejadorErrores); // SIEMPRE el ultimo

export default app;
