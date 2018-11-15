import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBox.css';

export default class App extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    updateResults: PropTypes.func.isRequired
  };


  render() {


    const { query, pageSize, onChange, updateResults } = this.props;


    const pageSizeOptions = [5, 10, 20, 50]
      .map(size => <option key={size} value={size}>{size}</option>);


    return (
      <Fragment>
        <h2>Search the news!</h2>
        <form>
          {query && <p>search: {query}</p>}
          <div className={styles.searchForm}>
            <label htmlFor="query">search term</label>
            <input
              name="query" value={query}
              type="text" onChange={onChange}
            ></input>
            <label htmlFor="pageSize">Page size</label>
            <select
              name="pageSize" defaultValue={pageSize}
              onChange={onChange}
            >{pageSizeOptions}
            </select>
          </div>
          <button
            type="submit"
            onClick={updateResults}
          >FIND IT</button>
        </form>

      </Fragment>
    );
  }
}
