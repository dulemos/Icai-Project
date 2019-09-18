const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('controllers')
    .then('models')
    .then('routes')
    .into(app)

module.exports = app;