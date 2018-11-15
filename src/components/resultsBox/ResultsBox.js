import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './ResultsBox.css';

export default class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    pageSize: PropTypes.number.isRequired
  };


  state = {

  };



  render() {


    const {  } = this.state;
    const { isLoading  } = this.props;

    const loadingGif = <img src='https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif' alt="loading" />;


    return (
      <Fragment>

        {isLoading ? loadingGif : <p>results loaded</p>}

      </Fragment>
    );
  }
}
