import queryString from 'querystring';

export const getPokemon = (page, query = {}) => {
  const queryStr = queryString.stringify({ page, ...query });
  return fetch(`http://pokeapi.co/api/v2/pokemon${resource}`, {
  headers: { origin: null }
  })
    .then(res => res.json())
};
