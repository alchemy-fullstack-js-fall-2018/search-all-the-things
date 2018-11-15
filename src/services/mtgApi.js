const getResource = (page, resource) => {

  return fetch(`https://api.magicthegathering.io/v1/${resource}?page=${page}`, {
    headers: { origin: null }
  })
    .then(res => res.json())
    .then(json => ({
      total:25,
      results: json.cards
    }));
};

export const getCards = page => {
  return getResource(page, 'cards');
};

// Possibly add getSets later on
