import dispatcher from '../../src/dispatcher/dispatcher';
import * as newsActions from '../../src/actions/siteActions';

// Mock the dispatcher
jest.mock('../../src/dispatcher/dispatcher');

// Mock the utils class to get getSources and getArticle
const Utils = jest.mock('../../src/utils.js', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticle: () => Promise.resolve('getPromise'),
}));

const dispatchSpy = jest.spyOn(dispatcher, 'dispatch');

describe('Actions', () => {
  test('should call Utils.getSources() on fetchSources', () => {
    newsActions.fetchSources();
    expect((Utils.getSources()).mock.calls.length).toBe(1);
  });
});
