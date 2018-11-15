import React, { Component, Fragment } from 'react';
import Search from './search/Search';
import Results from './results/Results';
import Paging from './paging/Paging';
import ResultsPerPage from './search/ResultsPerPage';
import { getNews } from '../services/newsApi';
import styles from './App.css';

export default class App extends Component {

  state = {
    currentPage: 1,
    totalResults: 1,
    resultsPerPage: 10,
    searchRequest: ''
  };

  updateSearchRequest = ({ target }) => {
    this.setState({ [target.name]: target.value, currentPage: 1 });
  };

  updateResultsPerPage = ({ target }) => {
    this.setState({ resultsPerPage: target.value });
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
    const { searchRequest, currentPage, totalResults, resultsPerPage } = this.state;

    return (
      <Fragment>
        <div id={styles.landingPage}>
          <h1>Headlines Now!</h1>
          <h2><i>Your #1 Source for the News</i></h2>
          <div id={styles.searchBar}>
            <Search updateSearchRequest={this.updateSearchRequest} />
            <ResultsPerPage updateResultsPerPage={this.updateResultsPerPage} />
          </div>
          <Paging
            currentPage={currentPage}
            resultsPerPage={resultsPerPage}
            totalResults={totalResults}
            updatePage={this.updatePage}
          />
          <Results
            getNews={getNews}
            searchRequest={searchRequest}
            updateTotalResults={this.updateTotalResults}
            currentPage={currentPage}
            resultsPerPage={resultsPerPage}
          />
        </div>
      </Fragment>

    );

  }
}
