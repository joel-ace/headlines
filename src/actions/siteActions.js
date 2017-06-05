import dispatcher from '../dispatcher';
import * as newsAPI from '../newsAPI';

export function fetchSources() {
  newsAPI.getSources().then((res) => {
    dispatcher.dispatch({
      type: 'GET_SOURCES',
      sources: res.sources,
    });
  });
}


export function fetchArticles(source, sortBy) {
  newsAPI.getArticle(source, sortBy).then((res) => {
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
