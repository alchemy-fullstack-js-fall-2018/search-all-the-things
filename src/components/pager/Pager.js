import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Pager.css';

export default class Pager extends Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired
  }

  render() {

    const { currentPage, totalPages, updatePage } = this.props;

    return (
      <div>

        {(currentPage > 1) &&
          <button
            className={styles.pageButton}
            onClick={() => updatePage(currentPage - 1)}
          >Previous
          </button>
        }

        <span>{currentPage} out of {totalPages} pages</span>

        {(currentPage < totalPages) &&
          <button
            className={styles.pageButton}
            onClick={() => updatePage(currentPage + 1)}
          >Next
          </button>
        }

      </div>
    );
  }
}
