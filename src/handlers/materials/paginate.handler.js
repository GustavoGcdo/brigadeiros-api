const paginator = require('../../helpers/paginator');
const repository = require('../../repositories/material.repository');
const { handleResult, handleResultPaginate } = require('../../infra/resultHandler');

async function handle(paginateDto) {
  const { page, skip, limit } = paginator.getPaginateOptions(paginateDto);
  const queryFilter = getQueryFilter(paginateDto);
  const list = await repository.get(queryFilter, skip, limit);

  const count = await repository.count(queryFilter);

  const resultPaginate = handleResultPaginate({
    list: list,
    total: count,
    page,
    limit,
  });

  const result = handleResult({
    data: resultPaginate,
    success: true,
    message: 'materials successfully found',
  });

  return result;
}

function getQueryFilter(filter = {}) {
  const queryFilter = {};
  const { exact } = filter;

  if (filter.name) {
    if (exact) {
      queryFilter.name = filter.name;
    } else {
      queryFilter.name = { $regex: filter.name, $options: 'i' };
    }
  }

  return queryFilter;
}

module.exports = { handle };
