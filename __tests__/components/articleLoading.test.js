import React from 'react';
import { shallow } from 'enzyme';
import ArticleLoading from '../../src/components/ArticleLoading.jsx';

describe('ErrorPage Component', () => {
  it('should have an ID of error', () => {
    const loadingComponent = shallow(<ArticleLoading />);
    const loadingWrapper = loadingComponent.find('.loading');
    expect(loadingWrapper.length).toBe(1);
  });
});
