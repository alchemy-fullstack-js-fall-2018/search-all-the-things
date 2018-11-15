import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from './results/Results';
import Search from './search/Search';
import News from './news/News';
import styles from './App.css';
import { getNews } from './services/newsApi';

export default class App extends Component {

  state = {
    currentPage: 1,
    totalResults: 1,
    searchResults: ''
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateTotalResults = totalResults => {
    this.setState({ totalResults });
  };


  updateSearchResults = ({ target }) => {
    this.setState({ [target.name]: target.value, currentPage: 1 });
  };

  render() {
    const { currentPage, searchResults, totalResults } = this.state;
    return (
      <Fragment>
        <div className={styles.header}>
          <h1>Search The News</h1>
          <Search updateSearchResults={this.updateSearchResults} searchResults={searchResults}/><br/>
          <Paging currentPage={currentPage} totalResults={totalResults} updatePage={this.updatePage} />
        </div>
        <Results
          currentPage={currentPage}
          getResults={getNews}
          searchResults={searchResults}
          updateTotalResults={this.updateTotalResults}
          ResultComponent={News}
        />
      </Fragment>
    );
  }
}
