import React, { Component, Fragment } from 'react';
// import getResults from '../../services/starWarsApi';
import Paging from '../paging/Paging';

export default class Results extends Component {
  state = {
    currentPage: 3,
    totalPages: 10,
    status: ''
  };

  //totalPages = Math.ceil(total number of items / by the page size)
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handlePageUpdate = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, totalPages, status } = this.state;

    const statusOptions = ['people', 'planets', 'starships'].map(status => {
      return <option key={status} value={status}>{status}</option>;
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
      </Fragment>
    );
  }
}
