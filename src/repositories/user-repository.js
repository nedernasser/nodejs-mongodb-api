const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async () => {
  const res = await User.find({}, 'Nome CPF DataNascimento TipoPlano');
  return res;
}

exports.getById = async (id) => {
  const res = await User
    .findById(id);
  return res;
}

exports.create = async (data) => {
  var user = new User(data);
  await user.save();
}

exports.update = async (id, data) => {
  await User
    .findByIdAndUpdate(id, {
      TipoPlano: data.TipoPlano,
      NumeroDependentes: data.NumeroDependentes
    });
}

exports.delete = async (id) => {
  await User
    .findOneAndRemove(id);
}