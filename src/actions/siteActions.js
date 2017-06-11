import dispatcher from '../dispatcher/dispatcher';
import utils from '../utils';

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
      articles: res.articles,
    });
  });
}
