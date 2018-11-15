import React, { Component, Fragment } from 'react';

import styles from './Results.css';

export default class App extends Component {

  state = {

  };



  render() {


    const {  } = this.state;

    return (
      <Fragment>

        {isLoading ? loadingGif : <p>results loaded</p>}

      </Fragment>
    );
  }
}
