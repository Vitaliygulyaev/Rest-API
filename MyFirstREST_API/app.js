var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var productRoutes = require('./routes/users');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/users', productRoutes);


module.exports = app;


