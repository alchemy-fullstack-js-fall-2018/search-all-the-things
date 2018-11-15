import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from '../results/Results';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  };

  render() {
    return (
      <Fragment>
        <Paging />
        <Results />
      </Fragment>
    );
  }
}
