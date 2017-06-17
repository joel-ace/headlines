import dispatcher from '../../src/dispatcher/dispatcher';
import * as siteActions from '../../src/actions/siteActions';

// Mock the dispatcher
jest.mock('../../src/dispatcher/dispatcher');

// Mock the utils class to get getSources and getArticle
jest.mock('../../src/utils.js');

const dispatchSpy = jest.spyOn(dispatcher, 'dispatch');

describe('Actions', () => {
  xit('should call Utils.getSources() on fetchSources', () => {
    siteActions.fetchSources();
    expect((Utils.getSources()).mock.calls.length).toHaveBeenCalled();
  });
  xit('should have a type of "GET_ARTICLES"', () => {
    expect(siteActions.fetchSources('cnn', 'top').type).toEqual('GET_ARTICLES');
  });
});
