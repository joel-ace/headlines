// const dotenv = require('dotenv');

// dotenv.config();

const apiKey = '213327409d384371851777e7c7f78dfe';
const url = 'https://newsapi.org/v1/';

console.log(getArticle('abc-news-au', 'top'));

function getSources() {
  return fetch(`${url}sources`)
          .then(res => res.json());
}

function getArticle(source, sortBy, key = apiKey) {
  return fetch(`${url}articles?source=${source}}&sortBy=${sortBy}&apiKey=${key}`)
          .then(res => res.json());
}

export { getSources, getArticle };
