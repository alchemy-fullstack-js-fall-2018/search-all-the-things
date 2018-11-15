import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from './results/Results';
import Search from './search/Search';
import News from './news/News';
import { getNews } from './services/newsApi';

export default class App extends Component {
  state = {
    currentPage: 1,
    // totalPages: 1
    searchResults: ''
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };


  updateSearchResults = ({ target }) => {
    this.setState({ [target.name]: target.value, currentPage: 1 });
  };

  render() {
    const { currentPage, searchResults } = this.state;
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Search updateSearchResults={this.updateSearchResults} searchResults={searchResults}/>
        <Results
          currentPage={currentPage}
          getResults={getNews}
          searchResults={searchResults}
          ResultComponent={News}
        />
        <Paging currentPage={currentPage} updatePage={this.updatePage} />
      </Fragment>
    );
  }
}
