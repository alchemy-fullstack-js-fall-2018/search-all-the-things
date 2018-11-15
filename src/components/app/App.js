import React, { Component } from 'react';

import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import SearchBox from '../searchBox/SearchBox.js';
import ResultsBox from '../resultsBox/ResultsBox.js';

import styles from './App.css';

export default class App extends Component {

  state = {
    query: '',
    isLoading: false,
    pageSize: 20,
    results: null
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {


    const { query, isLoading, pageSize, results } = this.state;


    return (
      <main className={styles.main}>
        <Header />
        {
          isLoading || results ?
            <ResultsBox
              isLoading = {isLoading}
              pageSize = {pageSize}
            />
            :
            <SearchBox
              query = {query}
              pageSize = {pageSize}
            />
        }
        <Footer />
      </main>
    );
  }
}
