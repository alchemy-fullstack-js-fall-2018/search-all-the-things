import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Pager.css';

export default class App extends Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired
  }

  render() {

    const { currentPage, totalPages, updatePage } = this.props;

    return (
      <div>

        <button
          onClick={() => updatePage(currentPage - 1)}
        >Previous
        </button>

        <span>{currentPage} out of {totalPages}</span>

        <button
          onClick={() => updatePage(currentPage + 1)}
        >Next
        </button>

      </div>
    );
  }
}
