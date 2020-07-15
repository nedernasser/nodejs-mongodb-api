const userController = require('../controllers/user-controller')

const routes = (server) => {
  userController(server)
}

module.exports = routes
