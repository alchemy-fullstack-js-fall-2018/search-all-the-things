import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ currentPage, updatePage, totalResults }) => {
  const totalPages = Math.ceil(totalResults / 20);
  return (


    <Fragment>
      <div id={styles.paging}>
        <button onClick={()=> updatePage(currentPage - 1)}>Previous Results</button>
        <h1>{currentPage} of {totalPages}</h1>
        <button onClick={()=> updatePage(currentPage + 1)}>Next Results</button>
      </div>
    </Fragment>
  );
};

Paging.protoTypes = {
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
};

export default Paging;
