import dispatcher from '../../src/dispatcher/dispatcher';
import * as siteActions from '../../src/actions/siteActions';
import Utils from '../../src/utils';

// Mock the dispatcher and NewsApi.
jest.mock('../../src/dispatcher/dispatcher.js');
jest.mock('../../src/utils');

const sourceAPI = Utils.getSources;
const articleAPI = Utils.getArticle;

sourceAPI.mockReturnValue(Promise.resolve({ data: 'This is the surce data' }));
articleAPI.mockReturnValue(Promise.resolve({ data: 'This is the article data' }));

const dispatchSpy = jest.spyOn(dispatcher, 'dispatch');

describe('siteActions', () => {
  it('should call Utils.getSources() on fetchSources', () => {
    siteActions.fetchSources();
    expect(sourceAPI.mock.calls.length).toBe(1);
  });

  it('should call Utils.getArticles() on fetchArticles', () => {
    siteActions.fetchArticles('cnn', 'top');
    expect(sourceAPI.mock.calls.length).toBe(1);
  });

  it('should call dispatcher dispatch method and dispatch GET_SOURCES action type for sources when called', () => {
    siteActions.fetchSources();
    const sourceAction = dispatchSpy.mock.calls[0][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(sourceAction.type).toEqual('GET_SOURCES');
  });

  it('should call dispatcher dispatch method and dispatch GET_ARTICLES action type for articles when called', () => {
    siteActions.fetchArticles('cnn', 'top');
    const articleAction = dispatchSpy.mock.calls[1][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(articleAction.type).toEqual('GET_ARTICLES');
  });
});
