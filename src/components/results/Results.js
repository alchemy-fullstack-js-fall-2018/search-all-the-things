import React, { Component, Fragment } from 'react';
import Paging from '../paging/Paging';
import { getResults } from '../../services/starWarsApi';
import styles from './Results.css';

export default class Results extends Component {
  state = {
    currentPage: 1,
    totalPages: 1,
    status: 'people',
    results: [],
    loading: false
  };

  fetchResults = () => {
    const { status, currentPage } = this.state;
    this.setState({ loading: true, results: [] }, () => {
      getResults(status, currentPage).then(res => {
        this.setState({
          totalPages: Math.ceil(res.count / 10),
          results: res.results,
          loading: false
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
    if(
      prevState.currentPage !== this.state.currentPage ||
      prevState.status !== this.state.status
    ) {
      this.fetchResults();
    }
  }

  render() {
    const { results, currentPage, totalPages, status, loading } = this.state;

    const resultsComponent = results.map(result => {
      return <Result key={result.name} name={result.name} />;
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
        <label htmlFor="status">Search For:</label>
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
        {loading && <h2>LOADING....</h2>}
        <div className={styles.results}>{resultsComponent}</div>
      </Fragment>
    );
  }
}

const Result = ({ name }) => {
  return (
    <div className={styles.result}>
      <h3>Name: {name}</h3>
    </div>
  );
};
