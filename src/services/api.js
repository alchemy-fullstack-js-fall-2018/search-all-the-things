const PAGE_SIZE = 10;

export const getBooks = (title, page) => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyBQ6nfOfTPhMrZZWeVCii4MeJr-Vc16HAU&startIndex=${startIndex}`
    )
        .then(res => res.json())
        .then(({ items, totalItems }) => {
            return {
                totalPages: Math.ceil(totalItems / PAGE_SIZE),
                books: items
            };
        });
};
