export const getResults = (page) => {
  return fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(res => res.json());
};
