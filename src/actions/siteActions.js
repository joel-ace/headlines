import dispatcher from '../dispatcher/dispatcher';
import utils from '../utils';

/**
 * Gets the list of sources from Api
 * @function fetchSources - Dispatches it to the stores
 * @return {void}
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
 * @function fetchSources - Dispatches it to the stores
 * @param {string} source Source for article selection
 * @param {string} sortBy SortBy for article
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
