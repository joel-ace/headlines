import dispatcher from '../dispatcher';
import * as utils from '../utils';

export function fetchSources() {
  utils.getSources().then((res) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources: res.sources,
    });
  });
}


export function fetchArticles(source, sortBy) {
  utils.getArticle(source, sortBy).then((res) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      sources: res.sources,
    }).catch((error) => {
      dispatcher.dispatch({
        type: 'GET_ARTICLES',
        error,
      });
    });
  });
}
