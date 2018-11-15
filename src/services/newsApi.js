export const getNews = (search, page) => {
  return fetch(`https://newsapi.org/v2/everything?page=${page}&q=${search}&apiKey=b19e58e630134037b0ad9c290f0019e6`)
    .then(res => res.json())
    .then(json => ({
      results: json.articles,
      totalResults: json.totalResults
    }));
};
