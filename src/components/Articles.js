import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getArticles } from '../services/newsApi';

export default class Articles extends Component {
    state = {
      articles: []
    };

    componentDidMount() {
      getArticles()
        .then(res => this.setState({ articles: res.articles }));
    }
    render() {
      const articles = this.state.articles.map(article => <li key={article.id}>{article.title}</li>);
      return (
        <ul>{articles}</ul>
      );
    }
}



