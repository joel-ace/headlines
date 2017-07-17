import dispatcher from '../../src/dispatcher/dispatcher';
import mockAPI from '../../__mocks__/mockAPI.json';
import SourceStore from '../../src/stores/SourceStore';

jest.mock('../../src/dispatcher/dispatcher.js');

describe('Source Store', () => {
  let registerDispatcher;

  const sources = {
    type: 'GET_SOURCES',
    sources: mockAPI,
  };

  beforeEach(() => {
    registerDispatcher = dispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no sources', () => {
    expect(SourceStore.getAll().length).toBe(0);
  });

  it('should return the correct array of sources', () => {
    registerDispatcher(sources);
    expect(SourceStore.getAll().length).toBe(9);
    expect(SourceStore.getAll()).toEqual(mockAPI);
  });
});
