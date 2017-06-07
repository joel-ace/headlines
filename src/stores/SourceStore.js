import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';

class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  getAll() {
    return this.sources;
  }

  handleActions(action) {
    switch (action.type) {
      default: {
        this.sources = action.sources;
        this.emit('change');
        break;
      }
    }
  }

}

const sourceStore = new SourceStore();
dispatcher.register(
  sourceStore.handleActions.bind(sourceStore),
);
export default sourceStore;
