// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const menuRoutes = require('./routes/menu');
const cors = require('cors');

dotenv.config();

// Inicializar la aplicación de Express
const app = express();

// Habilita CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.log('Error conectando a MongoDB:', error));

// Usar las rutas para manejar el menú
app.use('/api', menuRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
