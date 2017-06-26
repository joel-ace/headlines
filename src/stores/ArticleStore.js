import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

/**
 * @class ArticleStore
 * @extends {EventEmitter}
 */
class ArticleStore extends EventEmitter {
  /**
   * Creates an instance of ArticleStore
   * @memberof ArticleStore
   */
  constructor() {
    super();
    this.articles = [];
  }

  /**
   * returns an array of articles
   * @returns {array} - an array of articles
   * @memberof ArticleStore
   */
  getArticles() {
    return this.articles;
  }

  /**
   * Listens to actions from the dispatcher
   * run actions relevant to Article Store
   * Emits a change event
   * @param {object} action - requested action
   * @memberof ArticleStore
   * @return {void}
   */
  handleActions(action) {
    if (action.type === 'GET_ARTICLES') {
      this.articles = action.articles;
      this.emit('change');
    }
  }

}

/** create new instance of ArticleStore */
const articleStore = new ArticleStore();

/** register the store to recieve actions from dispatcher */
dispatcher.register(
  articleStore.handleActions.bind(articleStore),
);

export default articleStore;
