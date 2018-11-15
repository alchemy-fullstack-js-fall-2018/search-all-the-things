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
      return <li key={newsItem.url}>{newsItem.title}</li>;
    });

    return (
      <ul>
        {news}
      </ul>
    );
  }
}
