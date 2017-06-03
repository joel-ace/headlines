import { EventEmitter } from 'events';
import * as newsAPI from '../newsAPI';


class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.sources = newsAPI.getArticles();
  }

  getAll() {
    return this.sources;
  }

}

const sourceStore = new SourceStore();


export default ArticleStore;
