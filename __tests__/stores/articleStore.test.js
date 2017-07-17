import dispatcher from '../../src/dispatcher/dispatcher';
import mockAPI from '../../__mocks__/mockAPI.json';
import ArticleStore from '../../src/stores/ArticleStore';

jest.mock('../../src/dispatcher/dispatcher.js');

describe('Article Store', () => {
  let registerDispatcher;

  const articles = {
    type: 'GET_ARTICLES',
    articles: mockAPI
  };

  beforeEach(() => {
    registerDispatcher = dispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should return the correct array of articles', () => {
    registerDispatcher(articles);
    expect(ArticleStore.getArticles('cnn', 'top').length).toBe(9);
    expect(ArticleStore.getArticles('cnn', 'top')).toEqual(mockAPI);
  });
});
