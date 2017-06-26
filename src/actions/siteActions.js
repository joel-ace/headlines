import dispatcher from '../dispatcher/dispatcher';
import utils from '../utils';

/**
 * Gets the list of sources from Api
 * Dispatches it to the source store
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
 * Gets the list of articles from from selected source
 * Dispatches it to the artice store
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
