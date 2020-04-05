const Validator = require('../../helpers/validator');

class CreateMaterialContract {
  constructor() {
    this.validator = new Validator();
  }

  validate({ name }) {
    this.validator.isRequired(name.trim(), 'name', 'Nome é obrigatório');

    return this.validator.isValid();
  }
}

module.exports = CreateMaterialContract;
