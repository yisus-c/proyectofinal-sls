'use strict';
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {obtenerDatos} = require('./getData');

app.use(bodyParser.urlencoded({extended: true}));
const cpQro = require('./cpqro.json');

app.get('/postales/:postalcode', (req, res) =>{
  const postalCode = req.params.postalcode;
  res.send(obtenerDatos(postalCode));
});

module.exports.generic = serverless(app);
/*
module.exports.municipios = async (event) => {
  const cp = event.pathParameters.cp;
  const data = require('./cpqro.json');
  const colonias =[];
  const resultados = data.filter(objecto => objecto.cp==cp);
  colonias.push(resultados);
  
  if(colonias.length==0){
    return {error: 'no hay colonias', colonias}
  }
  return {
    colonias,
    error: null
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
*/