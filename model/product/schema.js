const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false }
});


module.exports = mongoose.model('Products', productSchema);
