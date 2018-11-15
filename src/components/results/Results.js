import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Results.css';

export default class App extends Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired
  };

  render() {
    const { results, totalCount, query } = this.props;

    const news = results.map(newsItem => {
      return <div key={newsItem.url}>
        <h3>{newsItem.title}</h3>
        <p>{newsItem.description}</p>
      </div>;
    });

    return (
      <Fragment>
        <p>Your search for {`"${query}"`} returned <strong>{totalCount}</strong> results</p>
        <section className={styles.news}>
          {news}
        </section>
      </Fragment>
    );
  }
}
