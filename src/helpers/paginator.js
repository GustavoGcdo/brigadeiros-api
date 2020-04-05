const initParams = {
  page: '1',
  limit: '10',
};

function getPaginateOptions(params = initParams) {
  const paramsPaginate = { ...initParams, ...params };
  const { page, limit } = paramsPaginate;

  const numberPage = parseInt(page);
  const numberLimit = parseInt(limit);
  const skip = (page - 1) * limit;

  const paginateOptions = {
    skip,
    page: numberPage,
    limit: numberLimit,
  };

  return paginateOptions;
}

module.exports = {
  getPaginateOptions,
};
