import React, { Component, Fragment } from 'react';
import Articles from './Articles';
import Search from './Search';
import { getArticles } from '../services/newsApi';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Articles/>
        <Search/>
      </Fragment>
    );
  }
}

