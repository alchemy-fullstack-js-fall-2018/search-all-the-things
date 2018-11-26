import React, { Component, Fragment } from 'react';
import { getBooks } from '../../services/api';
import PropTypes from 'prop-types';
import Pageable from '../pageable/Pageable';
export default class Books extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    state = {
        books: [],
        currentPage: 1,
        totalPages: null
    };

    updateResults = () => {
        const { title } = this.props;
        getBooks(title, this.state.currentPage).then(
            ({ books, totalPages }) => {
                this.setState({ books: books, totalPages: totalPages });
            }
        );
    };

    handlePageUpdate = page => {
        this.setState({ currentPage: page }, () => {
            this.updateResults();
        });
    };

    componentDidMount() {
        this.updateResults();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.title !== this.props.title) {
            this.updateResults();
        }
    }

    render() {
        const { books, currentPage, totalPages } = this.state;
        const booksComponents = books.map(book => {
            return <Book key={book.id} book={book} />;
        });

        return (
            <Fragment>
                <Pageable
                    currentPage={currentPage}
                    totalPages={totalPages}
                    updatePage={this.handlePageUpdate}
                />
                <div>{booksComponents}</div>
            </Fragment>
        );
    }
}

const Book = ({ book }) => {
    return (
        <div>
            <p>{book.volumeInfo.title}</p>
        </div>
    );
};
