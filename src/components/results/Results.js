import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Results.css';

export default class App extends Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
  };

  render() {
    const { results } = this.props;

    const news = results.map(newsItem => {
      return <div key={newsItem.url}>
        <h3>{newsItem.title}</h3>
        <p>{newsItem.description}</p>
      </div>;
    });

    return (
      <section className={styles.news}>
        {news}
      </section>
    );
  }
}
