const apiKey = process.env.NEWS_API_KEY;
const url = 'https://newsapi.org/v1/';

function getSources() {
  return fetch(`${url}sources`)
          .then(res => res.json());
}

function getArticle(source, sortBy, key = apiKey) {
  return fetch(`${url}articles?source=${source}&sortBy=${sortBy}&apiKey=${key}`)
          .then(res => res.json());
}

export { getSources, getArticle };
