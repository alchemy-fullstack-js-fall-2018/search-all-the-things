import React, { Component, Fragment } from 'react';
import { getBooks } from '../services/api';
// import Results from './results/Results';
import Books from './book/Books';

export default class App extends Component {
    state = {
        currentPage: 1,
        totalPages: 1,
        title: '',
        results: []
    };

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
        getBooks().then(results => {
            this.setState({ results });
        });
    };

    updatePage = page => {
        this.setState({ currentPage: page });
    };

    updateTotalPages = totalPages => {
        this.setState({ totalPages });
    };

    render() {
        const { title } = this.state;
        return (
            <Fragment>
                <form>
                    <label>
                        Book Title Search:
                        <br />
                        <input
                            name="title"
                            value={title}
                            onChange={this.onChange}
                        />
                    </label>
                    <br />
                    {title && <Books title={title} />}
                </form>
            </Fragment>
        );
    }
}
