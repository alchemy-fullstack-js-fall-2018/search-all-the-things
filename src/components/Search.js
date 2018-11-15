import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = ({ updateSearchResults }) => {

  return (
    <Fragment>
      <input name='searchResults' id='search' onChange={updateSearchResults} />
    </Fragment>
  );
};

Search.prototypes = {
  updateSearchResults: PropTypes.func.isRequired
};

export default Search;
