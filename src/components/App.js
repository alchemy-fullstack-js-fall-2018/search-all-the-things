import React, { Component, Fragment } from 'react';
// import Paging from './paging/Paging';
// import { getTitles } from '../services/api';
// import Results from './results/Results';
// import Book from './book/Book';

export default class App extends Component {
    state = {
        currentPage: 1,
        totalPages: 1,
        title: ''
    };

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
        console.log(target.value);
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
                </form>
            </Fragment>
        );
    }
}
