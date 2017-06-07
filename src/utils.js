const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.NEWS_API_KEY;
const url = 'https://newsapi.org/v1/';

console.log(getArticle('abc-news-au', 'top'));

function getSources() {
  return fetch(`${url}sources`)
          .then(res => res.json());
}

function getArticle(source, sortBy, key = apiKey) {
  return fetch(`${url}articles?source=${source}&sortBy=${sortBy}&apiKey=${key}`)
          .then(res => res.json());
}

export { getSources, getArticle };
