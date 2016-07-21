import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaPokemon = new Schema({
  name: { type: String },
  imge_url: { type: String },
});

module.exports = mongoose.model('Pokemon', schemaPokemon);
