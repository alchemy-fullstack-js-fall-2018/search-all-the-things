const NEWS_API_KEY = process.env.NEWS_API_KEY;

export const getNews = (options) => {

  const { query, pageSize, currentPage } = options;
  const optionString = `q=${query}` + `&pageSize=${pageSize}` + `&page=${currentPage}`;
  return fetch(`https://newsapi.org/v2/everything?${optionString}&apiKey=${NEWS_API_KEY}`, {
    headers: { origin: null }
  })
    .then(res => res.json())
    .then(json => ({
      totalCount: json.totalResults,
      results: json.articles
    }));
};
