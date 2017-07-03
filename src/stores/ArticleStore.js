import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

/**
 * @description ArticleStore
 * @class
 * @extends {EventEmitter}
 */
class ArticleStore extends EventEmitter {
  /**
   * @description Creates an instance of ArticleStore
   * @constructor
   * @memberof ArticleStore
   */
  constructor() {
    super();
    this.articles = [];
  }

  /**
   * @description returns an array of articles
   * @method
   * @returns {array} an array of articles
   * @memberof ArticleStore
   */
  getArticles() {
    return this.articles;
  }

  /**
   * @description Listens to actions from the dispatcher and Emits a change event
   * @method
   * @param {object} action requested action
   * @returns {void}
   * @memberof ArticleStore
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
