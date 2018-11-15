import React, { Component, Fragment } from 'react';
import Person from './people/Person';
import { getPeople } from '../services/starWarsApi';
import styles from './App.css';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 1
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <Fragment>
        <Paging currentPage={currentPage} totalPages={totalPages} updatePage={this.updatePage} />
        <div className={styles.people}>
        </div>
      </Fragment>
    );
  }
}
