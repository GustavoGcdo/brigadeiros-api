const resultInitialValue = {
  data: {},
  errors: [],
  success: false,
  message: '',
};

const resultPaginateInitialValue = {
  list: [],
  total: 0,
  limit: 0,
  page: 0,
  length: 0,
};

function handleResult(options = resultInitialValue) {
  const objetReturn = { ...resultInitialValue, ...options };

  return {
    data: objetReturn.data,
    errors: objetReturn.errors,
    success: objetReturn.success,
    message: objetReturn.message,
  };
}

function handleResultPaginate(options = resultPaginateInitialValue) {
  const objetReturn = { ...resultPaginateInitialValue, ...options };

  return {
    list: objetReturn.list,
    total: objetReturn.total,
    limit: objetReturn.limit,
    page: objetReturn.page,
    length: objetReturn.list.length,
  };
}

module.exports = { handleResult, handleResultPaginate };
