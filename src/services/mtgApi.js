const getResource = (page, resource) => {

  const myRequest = `https://api.magicthegathering.io/v1/${resource}?page=${page}`;
  let totalResults;
  let totalPages;

  return fetch(myRequest).then(function(response) {
    totalResults = response.headers.get('total-count');
    let pageSize = response.headers.get('page-size');
    totalPages = Math.ceil(totalResults / pageSize);

    return response.json();
  })
    .then(function(json) {
      return {
        totalResults: totalResults,
        totalPages: totalPages,
        results: json[resource]
      };
    })
    .catch(function(error) { console.log(error);}); /* eslint-disable-line no-console */
};

export const getCards = page => {
  return getResource(page, 'cards');
};

// Possibly add getSets later on
