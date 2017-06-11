const apiKey = process.env.NEWS_API_KEY;
const url = 'https://newsapi.org/v1/';

class Utils {
  static getSources() {
    return fetch(`${url}sources?language=en`)
            .then(res => res.json());
  }

  static getArticle(source, sortBy, key = apiKey) {
    return fetch(`${url}articles?language=en&source=${source}&sortBy=${sortBy}&apiKey=${key}`)
            .then(res => res.json());
  }

  static isLoggedIn() {
    if (localStorage.headlinesToken) {
      return fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${localStorage.headlinesToken}`)
                      .then(res => res)
                      .then(googleResponse => (
                        (googleResponse.email_verified === 'true') ? true : false
                      ));
    } else {
      return false;
    }
  }

}

export default Utils;
