import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = ({ updateSearchRequest }) => {

  return (
    <Fragment>
      <label htmlFor='search'>Search </label>
      <input name='searchRequest' id='search' onChange={updateSearchRequest} />
    </Fragment>
  );
};

Search.propTypes = {
  updateSearchRequest: PropTypes.func.isRequired
};

export default Search;
