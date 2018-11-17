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
    totalResults: 0,
    query: {
      rarity: '',
      type: ''
    }
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateCounts = (totalPages, totalResults) => {
    this.setState({ totalPages, totalResults });
  };

  onQueryItemChange = ({ target }) => {
    const { query } = this.state;
    this.setState({ currentPage: 1, query:{ ...query, [target.name]: target.value } });
  };

  render() {
    const { currentPage, totalPages, totalResults, query } = this.state;
    return (
      <Fragment>
        <h1>Magic the Gathering</h1>
        <Query query={query}
          onQueryItemChange={this.onQueryItemChange}
        />
        <Paging currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
          updatePage={this.updatePage}
        />
        <div>
          <Results currentPage={currentPage}
            updateCounts={this.updateCounts}
            getResults={getCards}
            ResultComponent={Card}
            query={query}
          />
        </div>
      </Fragment>
    );
  }
}
