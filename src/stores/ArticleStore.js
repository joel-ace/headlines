import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

/**
 * @class ArticleStore
 * @extends {EventEmitter}
 */
class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  /**
  * @method getArticles
  * @return {array} - returns an array of articles
  */
  getArticles() {
    return this.articles;
  }


  /**
  * @method handleActions
  * @param {obj} action
  * @return {void}
  * Listens to actions from the dispatcher
  * runs actions relevant to Article Store
  * Emits a change event
  */
  handleActions(action) {
    if (action.type === 'GET_ARTICLES') {
      this.articles = action.articles;
      this.emit('change');
    }
  }

}

// create new instance of ArticleStore
const articleStore = new ArticleStore();

// register the store to recieve actions from dispatcher
dispatcher.register(
  articleStore.handleActions.bind(articleStore),
);

export default articleStore;
