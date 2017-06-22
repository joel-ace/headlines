import React from 'react';
import { mount } from 'enzyme';
import Login from '../../src/components/Login.jsx';
import localStorageMock from '../../__mocks__/localStorage';

jest.mock('../../src/utils', () => ({
  getSources: () => Promise.resolve('getPromise'),
  getArticle: () => Promise.resolve('getPromise'),
  isLoggedIn: () => true,
}));

Window.localStorage = localStorageMock;

describe('Login Component', () => {
  const loginComponent = <Login />;
  const loginMount = mount(loginComponent);
  it('should have a Button', () => {
    const button = loginMount.find('button');
    expect(button.length).toEqual(1);
  });
});
