const Router = require('express').Router();

const indexController = require('../controllers/index.controller');
const materialsController = require('../controllers/materials.controller');

Router.use('/', indexController);
Router.use('/materials', materialsController);

module.exports = Router;
