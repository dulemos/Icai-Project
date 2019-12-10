const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

consign({cwd: 'app'})
    .include('controllers')
    .then('models')
    .then('routes')
    .then('middlewares')
    .into(app)

module.exports = app;