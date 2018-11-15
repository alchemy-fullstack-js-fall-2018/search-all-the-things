import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from './results/Results';
import News from './news/News';
import { getNews } from './services/newsApi';

export default class App extends Component {
  state = {
    currentPage: 1,
    // totalPages: 1
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Results
          currentPage={currentPage}
          getResults={getNews}
          ResultComponent={News}
        />
        <Paging currentPage={currentPage} updatePage={this.updatePage} />
      </Fragment>
    );
  }
}
