import React from 'react';
import { mount } from 'enzyme';
import SingleArticle from '../../src/components/SingleArticle.jsx';

describe('SingleArticle Component', () => {
  it('should always render div with col-md-12 class', () => {
    const articleWrapper = mount(<SingleArticle />);
    const divs = articleWrapper.find('div.col-md-12');
    expect(divs.length).toBeGreaterThan(0);
  });
});
