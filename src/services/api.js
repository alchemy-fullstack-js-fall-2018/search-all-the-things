export const getBooks = (title) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyBQ6nfOfTPhMrZZWeVCii4MeJr-Vc16HAU`)
        .then(res => res.json())
        .then(json => json.items);
};


