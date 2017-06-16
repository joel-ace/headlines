import React from 'react';
import { mount } from 'enzyme';
import SingleSource from '../../src/components/SingleSource.jsx';

describe('SingleSource Component', () => {
  it('should always render div with col-md-4 and  nrc class', () => {
    const articleWrapper = mount(<SingleSource />);
    const divs = articleWrapper.find('div.col-md-4.nrc');
    expect(divs.length).toBeGreaterThan(0);
  });
});
