// Esta linea va PRIMERO: carga en .env antes de que se importe nada mas
import 'dotenv/config';
import app from './app.js';
import { sequelize } from './models/index.js';
const PORT = process.env.PORT || 3000;

// Validar que esta funcionando la conexion con sequeliza 
try {
    await sequelize.authenticate();
    console.log('Conexion con la base de datos establecida');
} catch (error) {
    console.error('No se pudo conectar con la base de datos:', error.message);
}
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
