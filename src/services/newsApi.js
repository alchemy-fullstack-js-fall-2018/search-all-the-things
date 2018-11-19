export const getArticles = (country) => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=fe25b34b52dc4df8a64c621d15a42ba6`, {
    headers: { origin: null } 
  })
    .then(res => res.json());
};

