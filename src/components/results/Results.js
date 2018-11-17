import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Results.css';

export default class Results extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    updateCounts: PropTypes.func.isRequired,
    getResults: PropTypes.func.isRequired,
    ResultComponent: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired
  };

  state = {
    results: []
  };

  updateResults = () => {
    const { currentPage, updateCounts, getResults, query } = this.props;
    getResults(currentPage, query)
      .then(({ totalPages, totalResults, results }) => {
        this.setState({ results });
        updateCounts(totalPages, totalResults);
      });
  };

  componentDidMount() {
    this.updateResults();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentPage !== this.props.currentPage || prevProps.query !== this.props.query) {
      this.updateResults();
    }
  }

  render() {
    const { ResultComponent } = this.props;
    const { results } = this.state;

    const listItems = results.map(result => {
      return <ResultComponent key={result.id} result={result} />;
    });

    return (
      <Fragment>
        <div className={styles.list}>
          <ul >
            {listItems}
          </ul>
        </div>
      </Fragment>
    );
  }

}
