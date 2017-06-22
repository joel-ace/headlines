import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

/**
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  /**
  * @method getAll
  * @return {array} - returns an array of sources
  */
  getAll() {
    return this.sources;
  }

  /**
  * @method handleActions
  * @param {obj} action
  * @return {void}
  * Listens to actions from the dispatcher
  * runs actions relevant to Source Store
  * Emits a change event
  */
  handleActions(action) {
    if (action.type === 'GET_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    }
  }

}

// create new instance of SourceStore
const sourceStore = new SourceStore();

// register the store to recieve actions from dispatcher
dispatcher.register(
  sourceStore.handleActions.bind(sourceStore),
);

export default sourceStore;
