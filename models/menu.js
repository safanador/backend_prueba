// /models/menu.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para los items del menú
const MenuItemSchema = new Schema({
  title: String,
  description: String,
  price: String,
  imageUrl: String,
  _id: { type: Schema.Types.ObjectId, auto: true }
});

// Esquema flexible para las subcategorias
const MenuSubCategorySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: String,  // Nombre de la subcategoría
  items: [MenuItemSchema]
});

// Esquema flexible para las categorias
const MenuCategorySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: String,
    subcategory: [MenuSubCategorySchema]
});

// Esquema principal que incluye las categorías dinámicas
const MenuSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  iconUri: String,
  categories: [MenuCategorySchema]
});

module.exports = mongoose.model('Menu', MenuSchema);
