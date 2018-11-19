export const getResults = (status, page) => {
  return fetch(`https://swapi.co/api/${status}/?page=${page}`)
    .then(res => res.json());
};
