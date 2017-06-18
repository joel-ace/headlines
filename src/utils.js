const apiKey = process.env.NEWS_API_KEY;
const url = 'https://newsapi.org/v1/';

/**
 * @class Utils
 */

class Utils {
  /**
   * @static
   * @memberof Utils
   * @return {Promise} - Returns a promise
   */
  static getSources() {
    return fetch(`${url}sources?language=en`)
            .then(res => res.json())
            .catch(error => error);
  }

  /**
   * @static
   * @memberof Utils
   * @param {string} source - Takes in a source parameter
   * @param {string} sortBy - Takes in a sortBy parameter
   * @param {string} [key] - optional key parameter
   * @return {Promise} - Returns a promise
   */
  static getArticle(source, sortBy, key = apiKey) {
    return fetch(`${url}articles?language=en&source=${source}&sortBy=${sortBy}&apiKey=${key}`)
            .then(res => res.json());
  }

  /**
   * @static
   * @memberof Utils
   * @param {obj} user - Takes in a user object
   * @return {void}
   * adds the user token to localStorage and reloads the page
   */
  static responseSuccess(user) {
    localStorage.setItem('headlinesToken', user.tokenId);
    location.reload();
  }

  /**
   * @static
   * @memberof Utils
   * @return {Boolean}
   * Validates the token with Google using a validation url
   */
  static isLoggedIn() {
    if (localStorage.headlinesToken) {
      return fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${localStorage.headlinesToken}`)
                      .then(res => res)
                      .then((googleResponse) => {
                        if (googleResponse.email_verified === 'true') {
                          return true;
                        }
                        localStorage.removeItem('headlinesToken');
                        return false;
                      });
    }
    return false;
  }

  /**
   * @static
   * @memberof Utils
   * @return {void}
   * Deletes token from localStorage
   * Redirects to sources page
   */
  static logout() {
    localStorage.removeItem('headlinesToken');
    window.location.replace('/');
  }
}

export default Utils;
