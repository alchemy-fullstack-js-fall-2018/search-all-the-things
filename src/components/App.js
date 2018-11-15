import React, { Component, Fragment } from 'react';
// import Paging from './paging/Paging';
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
        console.log(target.value);
        getBooks()
            .then((results) => {
                this.setState({ results });
                console.log({ results });
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
                <h1>Hello World</h1>
                <form>
                    <label>Book Title:<br/>
                        <input name="title" value={title} onChange={this.onChange} />
                    </label><br/>
                    <Books />
                </form>
            </Fragment>
        );
    }
}
