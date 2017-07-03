import React from 'react';
import { shallow } from 'enzyme';
import ArticleLoading from '../../src/components/ArticleLoading.jsx';

describe('ArticleLoading Component', () => {
  it('should have a class of loading', () => {
    const loadingComponent = shallow(<ArticleLoading />);
    const loadingWrapper = loadingComponent.find('.loading');
    expect(loadingWrapper.length).toBe(1);
  });
});
