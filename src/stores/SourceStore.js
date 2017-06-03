import { EventEmitter } from 'events';
import * as newsAPI from '../newsAPI';


class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = newsAPI.getSources();
  }

  getAll() {
    return this.sources;
  }

}

const sourceStore = new SourceStore();


export default sourceStore;
