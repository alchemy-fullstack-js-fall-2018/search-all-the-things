import React from 'react';
import Results from './Results';
import render from 'react-test-renderer';

jest.mock('../../services/starWarsApi.js', () => ({
  getResults() {
    return Promise.resolve({});
  }
}));


describe('Results', () => {
  test('results snapshot', () => {
    expect(

      render.create(<Results />).toJSON()

    ).toMatchSnapshot();
  });
});
