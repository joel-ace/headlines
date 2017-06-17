import React from 'react';
import { mount } from 'enzyme';
import Protected from '../../src/components/Protected.jsx';

describe('Protected Component', () => {
  it('should have an ID of protected', () => {
    const protectedComponent = mount(<Protected />);
    const divID = protectedComponent.find('#protected');
    expect(divID.length).toBe(1);
  });
});
