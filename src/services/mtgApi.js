import queryString from 'querystring';

const getResource = (page, resource, query) => {

  query.page = page;
  const qryString = queryString.stringify(query);
  const myRequest = `https://api.magicthegathering.io/v1/${resource}?${qryString}`;

  let totalResults = 0;
  let totalPages = 0;

  return fetch(myRequest).then(response => {
    totalResults = parseInt(response.headers.get('total-count'));
    let pageSize = parseInt(response.headers.get('page-size'));
    totalPages = Math.ceil(totalResults / pageSize);

    return response.json();
  })
    .then(json => {
      return {
        totalResults: totalResults,
        totalPages: totalPages,
        results: json[resource]
      };
    })
    .catch(error => { console.log(error);}); /* eslint-disable-line no-console */
};

export const getCards = (page, query) => {
  return getResource(page, 'cards', query);
};

// Possibly add getSets later on
