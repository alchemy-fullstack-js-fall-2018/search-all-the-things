
export const getArticles = (page, pageSize, search) => {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSize}&page=${page}&apiKey=e3b34ff49b2c4304845ee4dd7ae9fefd`)
    .then(res => res.json())
    .then(json => ({
      total: json.totalResults,
      articles: json.articles
    }));
};
