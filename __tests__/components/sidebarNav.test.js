import React from 'react';
import { mount } from 'enzyme';
import SidebarNav from '../../src/components/SidebarNav.jsx';

const props = ['top', 'latest'];

describe('SidebarNav Component', () => {
  it('should mount without crashing', () => {
    mount(<SidebarNav {...props} />);
  });
  it('should always render list items', () => {
    const navbar = mount(<SidebarNav {...props} />);
    const list = navbar.find('li a');
    expect(list.length).toBeGreaterThan(0);
  });
});
