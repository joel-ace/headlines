import dispatcher from '../dispatcher/dispatcher';
import utils from '../utils';

/**
 * @description Gets sources from Api and Dispatches to the source store
 * @function
 * @returns {void}
 */
export function fetchSources() {
  utils.getSources().then((res) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources: res.sources,
    });
  });
}

/**
 * @description Gets articles of a selected source and Dispatches it to the artice store
 * @param {string} source Source for article selection
 * @param {string} sortBy Sort option for article
 * @return {void}
 */
export function fetchArticles(source, sortBy) {
  utils.getArticle(source, sortBy).then((res) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: res.articles,
    });
  });
}
