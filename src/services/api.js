const getResource = () => {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:keyes&key=AIzaSyBQ6nfOfTPhMrZZWeVCii4MeJr-Vc16HAU')
        .then(res => res.json())
        .then(json => json.items);
};

export const getBooks = page => {
    return getResource();
};
