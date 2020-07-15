
const repository = require('../repositories/user-repository');

function users(server) {
  server.get('/user', async (req, res, next) => {
    try {
      var data = await repository.get();
      res.status(200);
      res.send(data);
    } catch (e) {
      setInternalError(res, e);
    }
    next();
  })

  server.get('/user/:id', async (req, res, next) => {
    try {
      res.status(200);
      res.send(await repository.getById(req.params.id));
    } catch (e) {
      setInternalError(res, e);
    }
    next();
  })

  server.post('/user', async (req, res, next) => {
    try {
      await repository.create({
        Nome: req.body.Nome,
        CPF: req.body.CPF,
        RG: req.body.RG,
        DataNascimento: req.body.DataNascimento,
        TipoPlano: req.body.TipoPlano,
        NumeroDependentes: req.body.NumeroDependentes
      });
      res.status(201);
      res.send({
        message: 'Usuário cadastrado com sucesso!'
      });
    } catch (e) {
      setInternalError(res, e);
    }
    next();
  })

  server.put('/user', async (req, res, next) => {
    try {
      await repository.update(req.params.id, req.body);
      res.status(200);
      res.send({
        message: 'Usuário atualizado com sucesso!'
      });
    } catch (e) {
      setInternalError(res, e);
    }
    next();
  })

  server.del('/user/:id', async (req, res, next) => {
    try {
      await repository.delete(req.body.id)
      res.status(200);
      res.send({
        message: 'Usuário removido com sucesso!'
      });
    } catch (e) {
      setInternalError(res, e);
    }
    next();
  })
}

function setInternalError(res, e) {
  res.status(500);
  res.send({
    message: e
  });
}

module.exports = users;