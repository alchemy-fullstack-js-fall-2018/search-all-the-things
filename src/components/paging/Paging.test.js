import React from 'react';
import Paging from './Paging';
import render from 'react-test-renderer';

describe('Paging', () => {
  test('paging snapshot', () => {
    expect(
      render.create(<Paging />).toJSON()

    ).toMatchSnapshot();
  });
});
