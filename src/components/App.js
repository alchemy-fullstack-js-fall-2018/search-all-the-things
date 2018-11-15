import React, { Component, Fragment } from 'react';
import Search from './search/Search';
import Results from './results/Results';
import Paging from './paging/Paging';
import { getNews } from '../services/newsApi';

export default class App extends Component {

  state = {
    currentPage: 1,
    totalResults: 1,
    searchRequest: ''
  };

  updateSearchRequest = ({ target }) => {
    this.setState({ [target.name]: target.value, currentPage: 1 });
  };

  updatePage = page => {
    if(page > 0) {
      this.setState({ currentPage: page });
    }
  };

  updateTotalResults = totalResults => {
    this.setState({ totalResults });
  };

  render() {
    const { searchRequest, currentPage, totalResults } = this.state;

    return (
      <Fragment>
        <Search updateSearchRequest={this.updateSearchRequest}/>
        <Paging
          currentPage={currentPage}
          totalResults={totalResults}
          updatePage={this.updatePage}
        />
        <Results
          getNews={getNews}
          searchRequest={searchRequest}
          updateTotalResults={this.updateTotalResults}
          currentPage={currentPage}
        />
      </Fragment>
    );

  }
}
