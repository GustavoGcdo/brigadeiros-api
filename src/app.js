const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/v1', routes);

module.exports = app;
