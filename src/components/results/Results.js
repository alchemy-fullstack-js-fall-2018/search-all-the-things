import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Results extends Component {
  static propTypes = {
    getNews: PropTypes.func.isRequired,
    searchRequest: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    updateTotalResults: PropTypes.func.isRequired
  };

  state = {
    results: []
  };

  updateResults = () => {
    const { getNews, searchRequest, currentPage, updateTotalResults } = this.props;

    getNews(searchRequest, currentPage)
      .then(({ results, totalResults }) => {
        this.setState({ results });
        updateTotalResults(totalResults);
      });
  };

  componentDidMount() {
    if(this.props.searchRequest.length > 0) {
      this.updateResults();
    }
  }

  componentDidUpdate(prevProps) {
    const pageChanged = prevProps.currentPage !== this.props.currentPage;
    const searchRequestChanged = prevProps.searchRequest !== this.props.searchRequest;

    if(this.props.searchRequest.length > 0 && (pageChanged || searchRequestChanged)) {
      this.updateResults();
    }
  }

  render() {
    const { results } = this.state;
    const listArticles = results.map(result => {
      return <li key={result.url}>{result.title}</li>;
    });
    return (
      <Fragment>
        <h1>Welcome to the News!</h1>
        <ul>{listArticles}</ul>

      </Fragment>
    );
  }


}
