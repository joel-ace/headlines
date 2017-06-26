import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '../../src/components/ErrorPage.jsx';

describe('ErrorPage Component', () => {
  it('should have an ID of error', () => {
    const errorPage = shallow(<ErrorPage />);
    const divID = errorPage.find('#error');
    expect(divID.length).toBe(1);
  });
});
