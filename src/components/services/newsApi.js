const API_KEY = process.env.NEWS_API_KEY;

export const getResource = page => {
  return fetch(`https://newsapi.org/v2/everything?q=bitcoin&pageSize=10&page=${page}&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(json => ({
      results: json.articles
    }));
};

