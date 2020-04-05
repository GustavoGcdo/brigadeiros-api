const Material = require('../models/schemas/material.schema');

async function get(filter = {}, skip = 0, limit = 0, sort = {}) {
  const list = await Material.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .then((docs) => docs.map((d) => d.toObject()));

  return list;
}

async function count(filter = {}) {
  const countDocuments = await Material.countDocuments(filter);
  return countDocuments;
}

async function create(data) {
  const created = await Material.create(data);
  return created;
}

async function update(id, newData) {
  const updated = await Material.updateOne({ _id: id }, newData);
  return updated;
}

async function updateWithFilter(filter, newData) {
  const data = await Material.update(filter, newData);
  return data;
}

module.exports = {
  get,
  count,
  create,
  update,
  updateWithFilter,
};
