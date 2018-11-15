import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ currentPage, updatePage, totalResults, resultsPerPage }) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  return (


    <Fragment>
      <div id={styles.paging}>
        <button onClick={()=> updatePage(currentPage - 1)}>Previous Results</button>
        <h3>{currentPage} of {totalPages}</h3>
        <button onClick={()=> updatePage(currentPage + 1)}>Next Results</button>
      </div>
    </Fragment>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
};

export default Paging;
