import React from 'react';
import Utils from '../../src/utils';

const storageMock = () => {
  const storage = {
    headlinesToken: 'fgdfgdfgdgfdgdgdfgdfgfdgdfgf'
  };

  return {
    setItem: (key, value) => {
      storage[key] = value || '';
    },
    getItem: key => (key in storage ? storage[key] : null),
    removeItem: jest.fn(),
  };
};

window.localStorage = storageMock();

describe('Utils Class', () => {
  describe('isLoggedIn method', () => {
    it('should return a boolean when called', () => {
      expect(typeof Utils.isLoggedIn()).toBe('boolean');
    });
  });
});
