const API_KEY = process.env.NEWS_API_KEY;

export const getNews = (search, page) => {
  console.log(search);
  return fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=10&page=${page}&apiKey=${API_KEY}`)

    .then(res => res.json())
    .then(json => ({
      total: json.totalResults,
      results: json.articles || []
    }));
};

