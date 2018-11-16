import React, { Component, Fragment } from 'react';
import getResults from '../../services/starWarsApi';

export default class Results extends Component {
  state = {
    currentPage: 1
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };
  //totalPages = Math.ceil(total number of items / by the page size)




  
}
