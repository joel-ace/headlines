import React from 'react';
import { mount } from 'enzyme';
import SidebarNav from '../../src/components/SidebarNav.jsx';
import SourceStore from '../../src/stores/SourceStore';

const props = {
  id: 'cnn',
  sortBysAvailable: [],
  name: 'CNN',
};

jest.mock('../../src/utils', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticle: () => Promise.resolve('getPromise'),
  isLoggedIn: () => true,
}));

describe('Sidebar Component', () => {
  const sidebarNavComponent = mount(<SidebarNav {...props} />);
  it('should have a SidebarNav Component', () => {
    expect(sidebarNavComponent.length).toBe(1);
  });
});
