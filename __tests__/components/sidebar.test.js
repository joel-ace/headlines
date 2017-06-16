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
  it('should have a SidebarNav Component', () => {
    const singleArticleComponent = mount(<SidebarNav {...props} />);
    expect(singleArticleComponent.length).toBe(1);
  });
});
