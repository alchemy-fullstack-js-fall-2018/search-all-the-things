export const getNews = (search, page, resultsPerPage) => {
  return fetch(`https://newsapi.org/v2/everything?pageSize=${resultsPerPage}&page=${page}&q=${search}&apiKey=eb29f27ac24a4592b7d39d6708389a1c`)
    .then(res => res.json())
    .then(json => ({
      results: json.articles,
      totalResults: json.totalResults
    }));
};
