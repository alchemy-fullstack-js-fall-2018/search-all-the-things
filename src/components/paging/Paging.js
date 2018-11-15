import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ currentPage, updatePage }) => {
  return (
    <div>
      <button onClick={() => updatePage(currentPage - 1)}>Previous</button>
      <span>{currentPage}</span>
      <button onClick={() => updatePage(currentPage - 1)}>Previous</button>
    </div>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};

export default Paging;
