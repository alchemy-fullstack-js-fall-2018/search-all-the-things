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

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateResults = (event) => {
    event.preventDefault();
    const { query, pageSize, currentPage } = this.state;
    const options = { query, pageSize, currentPage };
    getNews(options)
      .then(({ totalCount, results }) => {
        const totalPages = Math.ceil(totalCount / pageSize);
        this.setState({ results });
        this.setState({ totalCount });
        this.setState({ totalPages });
      });
  };



  render() {


    const { query, isLoading, pageSize, results,
      totalCount, totalPages, currentPage } = this.state;


    return (
      <main className={styles.main}>
        <Header />
        {
          isLoading || (results && totalCount && totalPages) ?
            <ResultsBox
              isLoading = {isLoading}
              pageSize = {pageSize}
              results = {results}
              totalCount = {totalCount}
              totalPages = {totalPages}
              currentPage = {currentPage}
              updatePage = {this.updatePage}
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
