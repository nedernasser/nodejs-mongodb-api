const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Nome: {
    type: String,
    required: [true, 'O Nome é obrigatório'],
    trim: true
  },
  CPF: {
    type: String,
    index: true,
    unique: true,
    required: [true, 'O CPF é obrigatório']
  },
  RG: {
    type: String,
    required: [true, 'O RG é obrigatório']
  },
  DataNascimento: {
    type: Date,
    required: [true, 'A Data de Nascimento é obrigatório']
  },
  TipoPlano: {
    type: String,
    required: [true, 'O Tipo do Plano é obrigatório'],
    enum: ['Basic', 'Standard', 'Premium']
  },
  NumeroDependentes: {
    type: Number
  }
});

module.exports = mongoose.model('User', schema);