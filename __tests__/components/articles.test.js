import React from 'react';
import { mount } from 'enzyme';
import Articles from '../../src/components/Articles.jsx';
import SingleArticle from '../../src/components/SingleArticle.jsx';
import props from '../../__mocks__/props';

jest.mock('../../src/utils.js', () => ({
  getSources: () => Promise.resolve({ sources: [] }),
  getArticle: () => Promise.resolve({ articles: [] }),
  generateComponents: jest.fn(),
  isLoggedIn: () => true,
}));

describe('Article Component', () => {
  const articles = {
    urlToImage: '',
    title: '',
    description: '',
    url: '',
  };

  const singleArticleComponent = mount(<SingleArticle {...articles} />);

  it('should mount without crashing', () => {
    mount(<Articles {...props} />);
  });

  it('should have a SingleArticle Component', () => {
    expect(singleArticleComponent.length).toBe(1);
  });
});
