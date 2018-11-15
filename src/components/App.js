import React, { Component, Fragment } from 'react';
import Articles from './Articles';
// import { getResource } from '../services/newsApi';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Articles/>
      </Fragment>
    );
  }
}

