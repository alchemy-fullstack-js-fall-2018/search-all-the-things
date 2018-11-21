import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css';
import { getNews } from '../../services/newsApi';


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
    const { searchRequest, currentPage, updateTotalResults, resultsPerPage } = this.props;

    getNews(searchRequest, currentPage, resultsPerPage)
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
    const resultsPerPageChanged = prevProps.resultsPerPage !== this.props.resultsPerPage;

    if(this.props.searchRequest.length > 0 && (pageChanged || searchRequestChanged || resultsPerPageChanged)) {
      this.updateResults();
    }
  }

  render() {

    const { results } = this.state;
    const listArticles = results.map(result => {
      return <li key={result.url}>
        <span>
          <h2><b>{result.title}: </b></h2>
          {result.description}
        </span>
        <img src={result.urlToImage} />
      </li>;
    });

    return (
      <Fragment>
        <ul id={styles.results}>{listArticles}</ul>
      </Fragment>
    );
  }


}
