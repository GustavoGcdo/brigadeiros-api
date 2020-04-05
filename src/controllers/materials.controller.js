const Router = require('express').Router();

const responseHandler = require('../infra/responseHandler');
const createHandler = require('../handlers/materials/create.handler');
const paginateHandler = require('../handlers/materials/paginate.handler');

Router.get('/', async (request, response) => {
  try {
    const params = request.query;
    const result = await paginateHandler.handle(params);
    return responseHandler.handle(response, result);
  } catch (error) {
    return responseHandler.handleError(response, error);
  }
});

Router.post('/', async (request, response) => {
  try {
    const data = request.body;
    const result = await createHandler.handle(data);
    return responseHandler.handle(response, result);
  } catch (error) {
    return responseHandler.handleError(response, error);
  }
});

module.exports = Router;
