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
    switch (action.type) {
      case 'GET_ARTICLES': {
        this.articles = action.articles;
        this.emit('change');
        break;
      }
      default: {
        this.articles = action.articles;
        this.emit('change');
        break;
      }
    }
  }

}

const articleStore = new ArticleStore();
dispatcher.register(
  articleStore.handleActions.bind(articleStore),
);
export default articleStore;
