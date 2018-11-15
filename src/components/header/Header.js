import React, { Component } from 'react';

import styles from './Header.css';

export default class Header extends Component {


  render() {

    return (
      <header className={styles.header}>
        <h1>Hot Off the Motherfucking Presses</h1>
        <p>I mean that</p>
      </header>
    );
  }


}
