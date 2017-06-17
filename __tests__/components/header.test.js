import React from 'react';
import { mount } from 'enzyme';
import Login from '../../src/components/Login.jsx';
import Header from '../../src/components/Header.jsx';

jest.mock('../../src/utils', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticle: () => Promise.resolve('getPromise'),
  isLoggedIn: () => true,
}));


const localStorageMock = {
  setItem: () => {},
  removeItem: () => {},
  key: () => {},
  getItem: () => {},
  length: 0,
};

Window.localStorage = localStorageMock;

describe('Header Component', () => {
  it('should have a Login Component', () => {
    const loginComponent = mount(<Login />);
    expect(loginComponent.length).toBe(1);
  });

  it('should have a div with id header', () => {
    const header = mount(<Header />);
    const div = header.find('#header');
    expect(div.length).toEqual(1);
  });
});
