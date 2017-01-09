const api = require('express').Router();

api.use('/register', require('./register'));
api.use('/login', require('./login'));
api.use('/exercises', require('./exercises'));
api.use('/records', require('./records'));

api.all('/*', function (req, res) {
  res.sendStatus(404);
});

module.exports = api;
