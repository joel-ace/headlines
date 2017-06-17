import React from 'react';
import { shallow, mount } from 'enzyme';
import Sources from '../../src/components/Sources.jsx';
import SingleSource from '../../src/components/SingleSource.jsx';
import SourceStore from '../../src/stores/SourceStore';
import * as SiteActions from '../../src/actions/siteActions';
import props from '../../__mocks__/props';

jest.mock('../../src/utils', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticle: () => Promise.resolve('getPromise'),
  isLoggedIn: () => true,
}));

describe('Sources Component', () => {

  const componentDidMountSpy = jest.spyOn(Sources.prototype, 'componentDidMount');
  const siteActionSpy = jest.spyOn(SiteActions, 'fetchArticles');
  const sourceStoreSpy = jest.spyOn(SourceStore, 'getAll');
  const component = mount(<Sources {...props} />);
  const sources = {
    id: 'metro',
    name: 'Metro',
    description: 'News, Sport, Showbiz, Celebrities from Metro - a free British newspaper.',
    sortBysAvailable: ['top', 'latest'],
  };


  it('should mount without crashing', () => {
    mount(<Sources />);
  });

  it('should call the Source store getAll method at least once', () => {
    expect(sourceStoreSpy).toHaveBeenCalled();
  });

  it('should call componentDidMount', () => {
    expect(componentDidMountSpy).toHaveBeenCalled();
  });

  // it('should call siteAction with source and sortBy as arguments', () => {
  //   expect(siteActionSpy).toBeCalledWith(props.match.params.source, sortBy[0]);
  // });

  // it('should call siteAction.fetchArticles', () => {
  //   expect(siteActionSpy.mock.calls.length).toBeGreaterThan(0);
  // });

  // it('should have a SincleSource Component', () => {
  //   const singleArticleComponent = mount(<SingleArticle {...articles} />);
  //   expect(singleArticleComponent.length).toBe(1);
  // });
});
