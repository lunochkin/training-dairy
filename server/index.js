const path = require('path');

require('dotenv').config({path: path.join(__dirname, '.env')});

const express = require('express');
const compression = require('compression');
const app = express();
const bodyParser = require("body-parser");
const _ = require('lodash');
const debug = require('debug')('server');
const passport = require('passport');
const api = require('./api');
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader('Authorization');
opts.secretOrKey = config.jwtSecret;
opts.ignoreExpiration = true;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  mongoose.model('User').findOne({email: jwt_payload.email}).then(user => {
    done(null, user);
  });
}));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/training-diary');

require('./models/User');
require('./models/Exercise');
require('./models/Record');


app.use(compression());
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(passport.initialize());


app.use('/api', api);

app.get(/^[a-z0-9\/_-]+$/, function (request, response) {
  response.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(config.port);
console.log("port: ", config.port);
