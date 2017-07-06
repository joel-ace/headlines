import React from 'react';
import { mount } from 'enzyme';
import ArticleLoading from '../../src/components/ArticleLoading.jsx';

describe('ArticleLoading Component', () => {
  it('should have a class of loading', () => {
    const loadingComponent = mount(<ArticleLoading />);
    const loadingWrapper = loadingComponent.find('.loading');
    expect(loadingWrapper.length).toBe(1);
  });
});
