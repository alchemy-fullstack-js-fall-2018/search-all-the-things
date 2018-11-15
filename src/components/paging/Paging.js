import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Paging = ({ currentPage, updatePage, totalResults }) => {

  const totalPages = Math.ceil(totalResults / 10);
  return (
    <Fragment>
      <button onClick={() => updatePage(currentPage - 1)}>Previous</button>
      <span> Page: {currentPage} of {totalPages}</span>
      <button onClick={() => updatePage(currentPage + 1)}>Next</button>
    </Fragment>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
  totalResults: PropTypes.number
};

Paging.defaultProps = {
  totalResults: 1
};

export default Paging;
