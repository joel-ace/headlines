import React from 'react';
import { mount } from 'enzyme';
import Sources from '../../src/components/Sources.jsx';
import SourceStore from '../../src/stores/SourceStore';
import props from '../../__mocks__/props';

jest.mock('../../src/utils.js', () => ({
  getSources: () => Promise.resolve({ sources: 'getPromise' }),
  getArticle: () => Promise.resolve({ articles: 'getPromise' }),
  generateComponents: () => <div> Hello world </div>,
  responseSuccess: () => ({ a: 'b' }),
  isLoggedIn: () => 'true',
}));

describe('Sources Component', () => {
  const componentDidMountSpy = jest.spyOn(Sources.prototype, 'componentDidMount');
  const sourceStoreSpy = jest.spyOn(SourceStore, 'getAll');
  const fetchSourcesSpy = jest.spyOn(Sources.prototype, 'fetchSources');

  it('should mount without crashing', () => {
    mount(<Sources {...props} />);
  });

  it('should call the Source store getAll method at least once', () => {
    expect(sourceStoreSpy).toHaveBeenCalled();
  });

  it('should call componentDidMount', () => {
    expect(componentDidMountSpy).toHaveBeenCalled();
  });

  it('should call fetchSources method', () => {
    expect(fetchSourcesSpy).toHaveBeenCalled();
  });
});
