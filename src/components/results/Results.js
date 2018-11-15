import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Results extends Component {
    static propTypes = {
      currentPage: PropTypes.number.isRequired,
      getResults: PropTypes.func.isRequired,
      ResultComponent: PropTypes.func.isRequired
    };

    state = {
      results: []
    };

    updateResults = () => {
      const { currentPage, getResults } = this.props;

      getResults(currentPage)
        .then(({ results }) => {
          this.setState({ results });
        });
    };

    componentDidMount() {
      this.updateResults();
    }

    componentDidUpdate(prevProps) {
      if(prevProps.currentPage !== this.props.currentPage) {
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
        <ul>
          {listItems}
        </ul>
      );
    }
}
