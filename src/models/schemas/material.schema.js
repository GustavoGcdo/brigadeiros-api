const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: String,
    quantityOfProducts: Number,
    price: Number,
    purchaseDate: Date,
    unitOfMeasurement: String,
    quantity: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Material', schema);
