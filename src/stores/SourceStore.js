import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

/**
 * @description SourceStore
 * @class
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * @description Creates an instance of SourceStore.
   * @constructor
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sources = [];
  }

  /**
   * @description returns an array of sources
   * @method
   * @returns {array} an array of sources
   * @memberof SourceStore
   */
  getAll() {
    return this.sources;
  }

  /**
   * @description Listens to actions from the dispatcher and emit change
   * @method
   * @param {object} action - requested action
   * @returns {void}
   * @memberof SourceStore
   */
  handleActions(action) {
    if (action.type === 'GET_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    }
  }

}

/** create new instance of SourceStore */
const sourceStore = new SourceStore();

/** register the store to recieve actions from dispatcher */
dispatcher.register(
  sourceStore.handleActions.bind(sourceStore),
);

export default sourceStore;
