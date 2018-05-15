var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');
var db = mongoose.connection;

// Routing
var routing = require('./routes/routing');
app.use(routing.cats);
app.use(routing.products);


app.listen(3000);
console.log("SERVER IS RUNNING on port 3000...")