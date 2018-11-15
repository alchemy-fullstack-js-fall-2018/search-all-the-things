import React, { Component, Fragment } from 'react';

import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

import styles from './App.css';

export default class App extends Component {


  state = {

    query: '',
    isLoading: false

  }

  render() {


    const { query } = this.state;

    return (
      <main className={styles.main}>
        <Header />
        <form>
          <label htmlFor="query">Search the News</label>
          <input name="query"></input>
          <button type="submit">FIND IT</button>
        </form>


        <Footer />
      </main>
    );
  }
}
