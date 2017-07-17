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

const windowLocationMock = () => ({
  replace: jest.fn()
});

const fetchMock = () => Promise.resolve({ json: () => ({ a: 1 }) });

window.localStorage = storageMock();
window.fetch = fetchMock;
window.location = windowLocationMock();

describe('Utils Class', () => {
  describe('getSources method', () => {
    it('should return a promise resolve when called', (done) => {
      Utils.getSources().then((res) => {
        expect(res).toEqual({ a: 1 });
        done();
      });
    });
  });
  describe('getArticle method', () => {
    it('should return a promise resolve when called', (done) => {
      Utils.getArticle().then((res) => {
        expect(res).toEqual({ a: 1 });
        done();
      });
    });
  });

  describe('isLoggedIn method', () => {
    it('should return a boolean when called', () => {
      expect(typeof Utils.isLoggedIn()).toBe('boolean');
    });
  });

  describe('logout method', () => {
    it('should remove headlinesToken from localStorage', () => {
      Object.defineProperty(window.location, 'replace', {
        writable: true,
        value: jest.fn(),
      });
      Utils.logout();
      expect(window.localStorage.removeItem).toHaveBeenCalled();
      expect(window.location.replace).toHaveBeenCalled();
    });
  });

  describe('generateComponents method', () => {
    const data = [
      { title: 'article' },
      { title: 'source' },
      { title: 'news' },
    ];
    const SampleComponent = () => <div> Hello world {data.title} </div>;
    const mockGeneratedComponent = [
      <SampleComponent title="article" />,
      <SampleComponent title="source" />,
      <SampleComponent title="news" />
    ];

    it('should map through data and return an array of components', () => {
      const generatedComponent = Utils.generateComponents(data, SampleComponent, 'title');
      expect(generatedComponent[0].toString()).toEqual(mockGeneratedComponent[0].toString());
    });
  });
});
