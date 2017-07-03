import React from 'react';
import { mount } from 'enzyme';
import Articles from '../../src/components/Articles.jsx';
import SingleArticle from '../../src/components/SingleArticle.jsx';
import ArticleStore from '../../src/stores/ArticleStore';
import * as SiteActions from '../../src/actions/siteActions';
import props from '../../__mocks__/props';

jest.mock('../../src/utils.js', () => ({
  getSources: () => Promise.resolve({ sources: [] }),
  getArticle: () => Promise.resolve({ articles: [] }),
  isLoggedIn: () => true,
}));

describe('Article Component', () => {
  const sortBy = props.match.params.sort.split(',');
  const sortArticles = jest.fn();
  const componentDidMountSpy = jest.spyOn(Articles.prototype, 'componentDidMount');
  const sortArticlesSpy = jest.spyOn(Articles.prototype, 'sortArticles');
  const articleStoreSpy = jest.spyOn(ArticleStore, 'on');
  const siteActionSpy = jest.spyOn(SiteActions, 'fetchArticles');
  // const component = mount(<Articles {...props} onChange={sortArticles} />);
  const articles = {
    urlToImage: '',
    title: '',
    description: '',
    url: '',
  };


  it('should mount without crashing', () => {
    mount(<Articles {...props} />);
  });

  it('should call the article store', () => {
    expect(articleStoreSpy).toHaveBeenCalled();
  });

  it('should call componentDidMount', () => {
    expect(componentDidMountSpy).toHaveBeenCalled();
  });

  xit('should call sortArticles on emit change', () => {
    expect(component.props().onChange).toBe(sortArticles);
  });

  it('should call siteAction with source and sortBy as arguments', () => {
    expect(siteActionSpy).toBeCalledWith(props.match.params.source, sortBy[0]);
  });

  it('should call siteAction.fetchArticles', () => {
    expect(siteActionSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
