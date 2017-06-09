import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  getArticles() {
    return this.articles;
  }

  handleActions(action) {
    if (action.type === 'GET_ARTICLES') {
      this.articles = action.articles;
      this.emit('change');
    }
  }

}

const articleStore = new ArticleStore();
dispatcher.register(
  articleStore.handleActions.bind(articleStore),
);
export default articleStore;
