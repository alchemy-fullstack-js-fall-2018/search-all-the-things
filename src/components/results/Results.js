import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css';
export default class Results extends Component {
    static propTypes = {
      currentPage: PropTypes.number.isRequired,
      searchResults: PropTypes.string.isRequired,
      getResults: PropTypes.func.isRequired,
      updateTotalResults: PropTypes.func.isRequired,
      ResultComponent: PropTypes.func.isRequired
    };

    state = {
      results: []
    };

    updateResults = () => {
      const { currentPage, getResults, searchResults, updateTotalResults } = this.props;

      getResults(searchResults, currentPage)
        .then(({ totalResults, results }) => {
          this.setState({ results });
          updateTotalResults(totalResults);
        });
    };

    componentDidMount() {
      this.updateResults();
    }

    componentDidUpdate(prevProps) {
      const pageChanged = prevProps.currentPage !== this.props.currentPage;
      const searchResultsChanged = prevProps.searchResults !== this.props.searchResults;
      if((pageChanged || searchResultsChanged)) {
        this.updateResults();
      }
    }

    render() {
      const { ResultComponent } = this.props;
      const { results } = this.state;

      const listItems = results.map(result => {
        return <ResultComponent key={result.url} result={result} />;
      });

      return (
        <ul className={styles.container}>
          {listItems}
        </ul>
      );
    }
}
