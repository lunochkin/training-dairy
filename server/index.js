let express = require('express');
let compression = require('compression');
let app = express();
let bodyParser = require("body-parser");
let _ = require('lodash');
let debug = require('debug')('server');
let path = require('path');
let passport = require('passport');

app.use(compression());
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(passport.initialize());


app.get(/^[a-z0-9\/_-]+$/, function (request, response) {
  response.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

let port = process.env.PORT || "4009";
app.listen(port);
console.log("port: ", port);
