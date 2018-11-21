import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';



const Paging = ({ currentPage, updatePage, totalResults, resultsPerPage }) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const prevBtn = currentPage > 1 && <button onClick={()=> updatePage(currentPage - 1)}>Previous Results</button>;
  const nxtBtn = currentPage < totalPages && <button onClick={()=> updatePage(currentPage + 1)}>Next Results</button>;
  const pageNumberDisplay = totalResults > 0 && <h3>{currentPage} of {totalPages}</h3>

  return (
    <Fragment>
      <div id={styles.paging}>
        {prevBtn}
        {pageNumberDisplay}
        {nxtBtn}
      </div>
    </Fragment>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
};

export default Paging;
