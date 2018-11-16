import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Results extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    updateTotalPages: PropTypes.func.isRequired,
    getResults: PropTypes.func.isRequired,
    ResultComponent: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired
  };

  state = {
    results: []
  };

  updateResults = () => {
    const { currentPage, updateTotalPages, getResults, query } = this.props;
    getResults(currentPage, query)
      .then(({ totalPages, results }) => {
        this.setState({ results });
        updateTotalPages(totalPages);
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
      <ul>
        {listItems}
      </ul>
    );
  }

}
