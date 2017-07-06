import React from 'react';
import { mount } from 'enzyme';
import HigherOrderComponent from '../../src/components/HigherOrderComponent.jsx';

jest.mock('../../src/utils.js', () => ({
  getSources: () => Promise.resolve({ sources: 'getPromise' }),
  getArticle: () => Promise.resolve({ articles: 'getPromise' }),
  isLoggedIn: () => true,
}));

describe('Higher Order Component', () => {
  const sample = () => <div> Hell world </div>;
  const SampleHoc = HigherOrderComponent(sample);
  const componentDidMountSpy = jest.spyOn(SampleHoc.prototype, 'componentDidMount');
  const sampleComponent = mount(<SampleHoc text={'this is a text'}/>);
  it('should mount without crashing', () => {
    expect(sampleComponent.find(sample).length).toEqual(1);
  });

  it('should call componentDidMount', () => {
    expect(componentDidMountSpy).toHaveBeenCalled();
  });
});
