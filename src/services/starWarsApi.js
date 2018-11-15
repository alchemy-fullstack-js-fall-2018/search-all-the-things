export const getPeople = () => {
    return fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(json => (json.results));
};
