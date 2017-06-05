const apiKey = process.env.API_KEY;
const url = 'https://newsapi.org/v1/';

function getSources() {
  return fetch(`${url}sources`)
          .then(res => res.json());
}

function getArticle(source, sortBy) {
  return fetch(`${url}articles?source=${source}}&sortBy=&sortBy=${sortBy}&apiKey=${apiKey}`)
          .then(res => res.json());
}

export { getSources, getArticle };
