import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Results extends Component {
  static propTypes = {
    getNews: PropTypes.func.isRequired,
    searchResults: PropTypes.string.isRequired
  };

  state = {
    results: []
  };

  updateResults = () => {
    const { getNews, searchResults } = this.props;
    getNews(searchResults)
      .then(({ results }) =>
        this.setState({ results })
      );
  };

  componentDidMount() {
    this.updateResults();
  }

  render() {
    const { results } = this.state;
    const listArticles = results.map(result => {
      return <li key={result.title}>{result.title}</li>;
    });
    return (
      <Fragment>
      debugger;
        <h1>Hello World</h1>
        <ul>
          <li>{listArticles}</li>
        </ul>

      </Fragment>
    );
  }


  // getNews({props.searchResults})
};