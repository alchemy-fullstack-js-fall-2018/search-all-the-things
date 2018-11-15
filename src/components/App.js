import React, { Component, Fragment } from 'react';
import Search from './Search';
import Results from './results/Results';
import { getNews } from '../services/newsApi';

export default class App extends Component {

  state = {
    currentPage: 1,
    searchResults: 'bitcoin'
  };

  updateSearchResults = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {

    const searchResults = this.state.searchResults;

    return (
      <Fragment>
        <Search updateSearchResults={this.updateSearchResults}/>
        <Results getNews={getNews} searchResults={searchResults}/>
      </Fragment>
    );

  }
}
