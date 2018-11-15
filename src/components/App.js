import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
// import Results from '../results/Results';

export default class App extends Component {
  state = {
    currentPage: 1
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <Fragment>
        <Paging currentPage={currentPage} updatePage={this.updatePage} />
        {/* <Results /> */}
      </Fragment>
    );
  }
}
