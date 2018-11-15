import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from './results/Results';
import Card from './card/Card';
import { getCards } from '../services/mtgApi';


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
        <h1>Magic the Gathering</h1>
        <Paging currentPage={currentPage} totalPages={totalPages} updatePage={this.updatePage} />
        <div>
          <Results currentPage={currentPage}
            updateTotalPages={this.updateTotalPages}
            getResults={getCards}
            ResultComponent={Card}
          />
        </div>
      </Fragment>
    );
  }
}
