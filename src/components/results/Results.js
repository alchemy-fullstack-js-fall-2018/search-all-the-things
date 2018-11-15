import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Results.css';

export default class Results extends Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired
  };

  render() {
    const { results, totalCount, query } = this.props;

    const news = results.map(newsItem => {
      return <a
        key={newsItem.url}
        href={newsItem.url}
        className={styles.newsItem}
      >
        <h3>{newsItem.title}</h3>
        {newsItem.urlToImage && <img
          className={styles.newsImage}
          src={newsItem.urlToImage}
          alt={newsItem.title}/>
        }
        <p>{newsItem.description}</p>
      </a>;
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
