const API_KEY = process.env.NEWS_API_KEY;

export const getNews = (search, page) => {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=10&page=${page}&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(json => ({
      totalResults: json.totalResults,
      results: json.articles || []
    }));
};

