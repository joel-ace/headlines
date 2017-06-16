import React from 'react';
import { mount } from 'enzyme';
import ErrorPage from '../../src/components/ErrorPage.jsx';

describe('ErrorPage Component', () => {
  it('should have an ID of error', () => {
    const errorPage = mount(<ErrorPage />);
    const divID = errorPage.find('#error');
    expect(divID.length).toBe(1);
  });
});
