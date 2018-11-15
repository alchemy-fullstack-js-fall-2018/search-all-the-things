import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Paging = ({ currentPage, totalPages, updatePage }) => {

  return (
    <Fragment>
      <button onClick={() => updatePage(currentPage - 1)}>Previous</button>
      <span> {currentPage} out of {totalPages} </span>
      <button onClick={() => updatePage(currentPage + 1)}>Next</button>
    </Fragment>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};

export default Paging;
