import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pager from '../pager/Pager.js';
import Results from '../results/Results.js';

import styles from './ResultsBox.css';

export default class ResultsBox extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    pageSize: PropTypes.number.isRequired,
    results: PropTypes.array,
    query: PropTypes.string.isRequired,
    totalCount: PropTypes.number,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired,
  };

  render() {

    const { isLoading, results, currentPage,
      totalCount, totalPages, updatePage, query  } = this.props;

    const loadingGif = <img
      className={styles.loader}
      src='https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif'
      alt="loading"
    />;

    return (
      <Fragment>

        { isLoading ?
          loadingGif
          :
          <Fragment>
            <Results
              results = {results}
              query = {query}
              totalCount = {totalCount}
            />
            <Pager
              currentPage = {currentPage}
              totalPages = {totalPages}
              updatePage = {updatePage}
            />
          </Fragment>
        }

      </Fragment>
    );
  }
}
