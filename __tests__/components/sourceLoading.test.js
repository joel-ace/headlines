import React from 'react';
import { shallow } from 'enzyme';
import SourceLoading from '../../src/components/SourceLoading.jsx';

describe('SourceLoading Component', () => {
  it('should have a class of loading', () => {
    const loadingComponent = shallow(<SourceLoading />);
    const loadingWrapper = loadingComponent.find('h2 > i.fa.fa-spinner');
    expect(loadingWrapper.length).toBe(1);
  });
});
