import React from 'react';

const apiKey = process.env.NEWS_API_KEY;
const url = 'https://newsapi.org/v1/';

/**
 * @class Utils
 */
class Utils {
  /**
   * gets all available sources
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
   * gets articles for particular source
   * @static
   * @memberof Utils
   * @param {string} source - Takes in a source parameter
   * @param {string} sortBy - Takes in a sortBy parameter
   * @param {string} [key] - optional key parameter
   * @return {Promise} - Returns a promise
   */
  static getArticle(source, sortBy) {
    return fetch(`${url}articles?language=en&source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`)
            .then(res => res.json());
  }

  /**
   * maps through array to generate single component
   * @static
   * @memberof Utils
   * @param {array} dataArray - array of data
   * @param {Component} Component - react component
   * @returns {ReactElement} - a react element
   */
  static generateComponents(dataArray, Component) {
    return (
      dataArray.map(
        articles => <Component key={articles.title} {...articles} />,
      )
    );
  }

  /**
   * adds the user token to localStorage and reloads the page
   * @static
   * @memberof Utils
   * @param {obj} user - Takes in a user object
   * @return {void}
   */
  static responseSuccess(user) {
    localStorage.setItem('headlinesToken', user.tokenId);
    location.reload();
  }

  /**
   * Validates the token with Google using a validation url
   * @static
   * @memberof Utils
   * @returns {Boolean} - true if verified, false if not
   */
  static isLoggedIn() {
    if (localStorage.headlinesToken) {
      return fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${localStorage.headlinesToken}`)
              .then((googleResponse) => {
                if (googleResponse.email_verified === true) {
                  return true;
                }
                return false;
              });
    }
    return false;
  }

  /**
   * Deletes token from localStorage
   * Redirects to sources page
   * @static
   * @memberof Utils
   * @return {void}
   */
  static logout() {
    localStorage.removeItem('headlinesToken');
    window.location.replace('/');
  }
}

export default Utils;
