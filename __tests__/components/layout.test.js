import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Header from '../../src/components/Header.jsx';
import Sources from '../../src/components/Sources.jsx';
import Articles from '../../src/components/Articles.jsx';

jest.mock('../../src/utils', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticle: () => Promise.resolve('getPromise'),
  isLoggedIn: () => true,
}));


describe('Layout Component', () => {
  const headerComponent = mount(<Header />);
  it('should contain a header component', () => {
    expect(headerComponent.length).toBe(1);
  });
});
