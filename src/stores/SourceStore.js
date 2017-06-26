import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

/**
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sources = [];
  }

  /**
   * returns an array of sources
   * @returns {array} - an array of sources
   * @memberof SourceStore
   */
  getAll() {
    return this.sources;
  }

  /**
   * Listens to actions from the dispatcher
   * run actions relevant to Source Store
   * Emits a change event
   * @param {object} action - requested action
   * @memberof SourceStore
   * @return {void}
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
