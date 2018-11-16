import React, { Component, Fragment } from 'react';
import Paging from './paging/Paging';
import Results from './results/Results';
import Card from './card/Card';
import Query from './query/Query';
import { getCards } from '../services/mtgApi';


export default class App extends Component {

  state = {
    currentPage: 1,
    totalPages: 1,
    query: {
      rarity: 'mythic rare'
    }
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateTotalPages = totalPages => {
    this.setState({ totalPages });
  };

  onQueryItemChange = ({ target }) => {
    this.setState({ query:{ [target.name]: target.value } });
  };

  render() {
    const { currentPage, totalPages, query } = this.state;
    return (
      <Fragment>
        <h1>Magic the Gathering</h1>
        <Query query={query}
          onQueryItemChange={this.onQueryItemChange}/>
        <Paging currentPage={currentPage} totalPages={totalPages} updatePage={this.updatePage} />
        <div>
          <Results currentPage={currentPage}
            updateTotalPages={this.updateTotalPages}
            getResults={getCards}
            ResultComponent={Card}
            query={query}
          />
        </div>
      </Fragment>
    );
  }
}
