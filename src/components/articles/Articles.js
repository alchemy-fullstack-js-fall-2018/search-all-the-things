import React, { Component, Fragment } from 'react';
import { getArticles } from '../../services/newsApi';
import Paging from '../paging/Paging';

export default class Articles extends Component {
  state = {
    currentPage: 2,
    totalPages: 1,
    pageSize: 10,
    articles: [],
    search: 'Rick and Morty',
    loading: false
  };

  fetchArticles = () => {
    const { currentPage, pageSize, search } = this.state;
    getArticles(currentPage, pageSize, search)
      .then(res => {
        this.setState({
          totalPages: '',
          articles: res.articles
        });
      });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.search !== this.state.search) {
      this.fetchArticles()
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { articles, currentPage, totalPages, loading } = this.state;

    const articlesComponents = articles.map(article => {
      return <Article key={article.title}
        title={article.title}
        author={article.author}
        url={article.url}/>;
    });

    return (
      <Fragment>
        Hello News?
        <div>
          <label htmlFor="search">Search:</label>
          <input name="search" type="text" onChange={this.handleChange}/>
        </div>

        <Paging currentPage={currentPage}/>
        <div>
          {articlesComponents}
        </div>
      </Fragment>
    );
  }
}

const Article = ({ title, author, url }) => {
  return <div>
    <h2>{title}</h2>
    <h5>by {author || 'Anonymous'}</h5>
    <a href={url}>Go to Story</a>
  </div>;
};
