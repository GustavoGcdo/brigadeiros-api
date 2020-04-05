const { Types } = require('mongoose');

let errors = [];

function ValidationContract() {
  errors = [];
}

ValidationContract.prototype.isObjectIdValid = (value, name, message) => {
  if (!Types.ObjectId.isValid(value)) errors.push({ name, message });
};

ValidationContract.prototype.isRequired = (value, name, message) => {
  if (!value || value.length <= 0) errors.push({ name, message });
};

ValidationContract.prototype.isEqual = (value1, value2, name, message) => {
  if (value1 === value2) errors.push({ name, message });
};

ValidationContract.prototype.isNotEqual = (value1, value2, name, message) => {
  if (value1 !== value2) errors.push({ name, message });
};

ValidationContract.prototype.isNotNull = (value, name, message) => {
  if (value === null || value === 'null') errors.push({ name, message });
};

ValidationContract.prototype.hasMinLen = (value, min, name, message) => {
  if (!value || value.length < min) errors.push({ name, message });
};

ValidationContract.prototype.hasMaxLen = (value, max, name, message) => {
  if (!value || value.length > max) errors.push({ name, message });
};

ValidationContract.prototype.isFixedLen = (value, length, name, message) => {
  if (value.length !== length) errors.push({ name, message });
};

ValidationContract.prototype.isEmail = (value, name, message) => {
  const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) errors.push({ name, message });
};

ValidationContract.prototype.errors = () => errors;

ValidationContract.prototype.clear = () => {
  errors = [];
};

ValidationContract.prototype.isValid = () => errors.length === 0;

module.exports = ValidationContract;
