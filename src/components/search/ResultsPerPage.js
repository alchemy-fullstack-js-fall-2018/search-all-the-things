import React from 'react';
import PropTypes from 'prop-types';

const ResultsPerPage = ({ updateResultsPerPage }) => {
  return (
    <select onChange={updateResultsPerPage} defaultValue={10}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
    </select>
  );
};

ResultsPerPage.propTypes = {
  updateResultsPerPage: PropTypes.func.isRequired
};

export default ResultsPerPage;
