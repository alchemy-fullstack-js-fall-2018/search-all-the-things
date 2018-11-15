import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBox.css';

export default class App extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired
  };

  state = {

  };



  render() {


    const {  } = this.state;
    const { query, pageSize } = this.props;


    const pageSizeOptions = [5, 10, 20, 50]
      .map(size => <option key={size} value={size}>{size}</option>);


    return (
      <Fragment>
        <h2>Search the news!</h2>
        <form>
          <div className={styles.searchForm}>
            {query && <p>search: {query}</p>}
            <label htmlFor="query">search term</label>
            <input
              name="query" value={query}
              type="text" onChange={this.onChange}
            ></input>
            <label htmlFor="pageSize">Page size</label>
            <select
              name="pageSize" defaultValue={pageSize}
              onChange={this.onChange}
            >{pageSizeOptions}
            </select>
          </div>
          <button type="submit">FIND IT</button>
        </form>

      </Fragment>
    );
  }
}
