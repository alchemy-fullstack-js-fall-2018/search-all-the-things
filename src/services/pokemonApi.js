import queryString from 'querystring';

export const getPokemon = (page, query = {}) => {
  const queryStr = queryString.stringify({ page, ...query });
  return fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon?${queryStr}/`, {
  headers: { origin: null }
  })
    .then(res => res.json())
};

export const getAbilities = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/ability/`)
    .then(res => res.json())
    .then(json => json.results.map(ability => ability.name))
};
