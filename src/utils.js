import React from 'react';

const apiKey = process.env.NEWS_API_KEY;
const url = 'https://newsapi.org/v1/';

/**
 * @class Utils
 */
class Utils {
  /**
   * @description gets all available sources
   * @static
   * @returns {Promise} a promise
   * @memberof Utils
   */
  static getSources() {
    return fetch(`${url}sources?language=en`)
            .then(res => res.json())
            .catch(error => error);
  }

  /**
   * @description gets articles for particular source
   * @static
   * @param {string} source news source
   * @param {string} sortBy article sort option
   * @returns {Promise} returns a promise
   * @memberof Utils
   */
  static getArticle(source, sortBy) {
    return fetch(`${url}articles?language=en&source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`)
            .then(res => res.json());
  }

  /**
   * @description maps through array to generate component
   * @static
   * @method
   * @param {array} dataArray - array of data
   * @param {Component} Component - react component
   * @param {key} key - property to use as unique key
   * @returns {ReactElement} - a react element
   * @memberof Utils
   */
  static generateComponents(dataArray, Component, key) {
    return (
      dataArray.map(
        data => <Component key={data[key]} {...data} />,
      )
    );
  }

  /**
   * @description adds the user token to localStorage and reloads the page
   * @static
   * @method
   * @param {object} user takes in a user object
   * @returns {void}
   * @memberof Utils
   */
  static responseSuccess(user) {
    localStorage.setItem('headlinesToken', user.tokenId);
    location.reload();
  }

  /**
   * @description Validates the token with Google using a validation url
   * @static
   * @method
   * @returns {Boolean} true if verified, false if not
   * @memberof Utils
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
   * @description Deletes token from localStorage and redirects to sources page
   * @static
   * @method
   * @returns {void}
   * @memberof Utils
   */
  static logout() {
    localStorage.removeItem('headlinesToken');
    window.location.replace('/');
  }
}

export default Utils;
