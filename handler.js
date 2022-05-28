'use strict';
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {obtenerDatos} = require('./getData');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/postales/:postalcode', (req, res) =>{
  const postalCode = req.params.postalcode;
  res.send(obtenerDatos(postalCode));
});

module.exports.generic = serverless(app);