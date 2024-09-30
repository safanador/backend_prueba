// /routes/menu.js
const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

// Endpoint para obtener los datos del menú
router.get('/menu', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el menú', error });
  }
});

module.exports = router;
