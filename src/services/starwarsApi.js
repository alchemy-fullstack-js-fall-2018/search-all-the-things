export const getResource = (page) => {
  return fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(res => res.json());
};
