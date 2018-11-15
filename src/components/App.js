import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Paging currentPage={currentPage} totalPages={totalPages} updatePage={this.updatePage} />
      </Fragment>
    );
  }
}
