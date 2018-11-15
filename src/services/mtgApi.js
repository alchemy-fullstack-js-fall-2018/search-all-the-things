const getResource = (page, resource, query) => {

  query.page = page;
  const queryString = Object.keys(query).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
  }).join('&');

  const myRequest = `https://api.magicthegathering.io/v1/${resource}?${queryString}`;

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

export const getCards = (page, query) => {
  return getResource(page, 'cards', query);
};

// Possibly add getSets later on
