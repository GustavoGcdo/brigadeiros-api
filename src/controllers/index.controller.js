const Router = require('express').Router();

Router.get('/', (req, res) => {
  return res.status(200).send({
    version: '1.0',
    name: 'brigadeiro-api',
  });
});

module.exports = Router;
