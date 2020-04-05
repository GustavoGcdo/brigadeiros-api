const req = require('express').response;
const { handleResult } = require('./resultHandler');

function handle(response = req, result) {
  if (result.success) {
    return response.status(200).send(result);
  }
  return response.status(400).send(result);
}

function handleError(response = req, error) {
  const errorMessage = error.toString();
  const resultWithError = handleResult({
    errors: [errorMessage],
    success: false,
  });

  console.error(error);

  return response.status(500).send(resultWithError);
}

module.exports = {
  handle,
  handleError,
};
