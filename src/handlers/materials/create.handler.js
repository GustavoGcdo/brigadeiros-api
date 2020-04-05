const { handleResult } = require('../../infra/resultHandler');
const repository = require('../../repositories/material.repository');
const CreateContract = require('../../contracts/materials/createMaterial.contract');

async function handle(createDto) {

  const contract = new CreateContract();
  const isValid = contract.validate(createDto);

  if (!isValid) {
    const errors = contract.validator.errors();
    const resultWithErrors = handleResult({
      errors,
      message: 'failed to create material',
    });
    return resultWithErrors;
  }

  const data = await repository.create(createDto);
  
  const result = handleResult({
    data,
    success: true,
    message: 'material successfully created',
  });

  return result;
}

module.exports = { handle };
