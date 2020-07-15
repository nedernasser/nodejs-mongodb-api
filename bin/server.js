const restify = require('restify');
const server = restify.createServer();
const config = require('./config');

server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));

const mongoose = require('mongoose');
mongoose.connect(config.connectionString);

const User = require('../src/models/user');

const routes = require('../src/routes/user-route');
routes(server);

module.exports = server; 