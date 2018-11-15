import React, { Component } from 'react';

import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import SearchBox from '../searchBox/SearchBox.js';
import ResultsBox from '../resultsBox/ResultsBox.js';

import { getNews } from '../../services/searchApi.js';

import styles from './App.css';

export default class App extends Component {

  state = {
    isLoading: false,
    query: '',
    pageSize: 20,
    currentPage: 1,
    totalPages: null,
    totalCount: null,
    results: null
  };


  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  updateResults = (event) => {
    event.preventDefault();
    const { query, pageSize, currentPage } = this.state;
    const options = { query, pageSize, currentPage };
    getNews(options)
      .then(({ totalCount, results }) => {
        this.setState({ results });
        this.setState({ totalCount });
      });

  };

  render() {


    const { query, isLoading, pageSize, results, totalCount } = this.state;


    return (
      <main className={styles.main}>
        <Header />
        {
          isLoading || results ?
            <ResultsBox
              isLoading = {isLoading}
              pageSize = {pageSize}
              results = {results}
              totalCount = {totalCount}
            />
            :
            <SearchBox
              query = {query}
              pageSize = {pageSize}
              onChange = {this.onChange}
              updateResults = {this.updateResults}
            />
        }
        <Footer />
      </main>
    );
  }
}
