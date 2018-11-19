import React, { Component, Fragment } from 'react';
// import getResults from '../../services/starWarsApi';
import Paging from '../paging/Paging';
import { getResults } from '../../services/starWarsApi';

export default class Results extends Component {
  state = {
    currentPage: 1,
    totalPages: 1,
    status: '',
    results: []
  };

  fetchResults = () => {
    const { currentPage } = this.state;
    this.setState({ results: [] }, () => {
      getResults(currentPage).then(res => {
        this.setState({
          totalPages: Math.ceil(res.count / 10),
          results: res.results
        });
      });
    });
  };
  //totalPages = Math.ceil(total number of items / by the page size)
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handlePageUpdate = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    this.fetchResults();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage ||
      prevState.status !== this.state.status) {
      this.fetchResults();
    }
  }

  render() {
    const { results, currentPage, totalPages, status } = this.state;

    const resultsComponent = results.map(result => {
      return <Result key={result.name} name={result.name} height={result.height} />
    });

    const statusOptions = ['people', 'planets', 'starships'].map(status => {
      return (
        <option key={status} value={status}>
          {status}
        </option>
      );
    });

    return (
      <Fragment>
        <select
          name="status"
          defaultValue={status}
          onChange={this.handleChange}
        >
          {statusOptions}
        </select>
        <Paging
          currentPage={currentPage}
          updatePage={this.handlePageUpdate}
          totalPages={totalPages}
        />
        <div>
          {resultsComponent}
        </div>
      </Fragment>
    );
  }
}

const Result = ({ name, height }) => {
  return <div>
    <h3>Name: {name}</h3>
    <h4>Height: {height}</h4>
  </div>;
};
