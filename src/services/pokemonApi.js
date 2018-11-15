const getResource = (page, resource) => {
  return fetch(`http://pokeapi.co/api/v2/${resource}?page=${page}`, {
  headers: { origin: null }
  })

    .then(res => res.json())
    .then(json => ({
      total: json.info.pages,
      results: json.results
    }));
};

export const getPokemon = page => {
  return getResource(page, 'pokemon');
};

export const getAbilities = page => {
  return getResource(page, 'abilities');
};
