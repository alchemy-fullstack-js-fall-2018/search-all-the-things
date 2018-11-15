import React, { Component } from 'react';
import { getBooks } from '../../services/api';
import PropTypes from 'prop-types';

export default class Books extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    
    state = {
        books: []
    };

    updateResults = () => {
        const { title } = this.props;
        console.log('title', title);
        getBooks(title)
            .then(res => {
                this.setState({ books: res });
            });
    }

    componentDidMount() {
        this.updateResults();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.title !== this.props.title) {
            this.updateResults();
        }
    }

    render() {
        const { books } = this.state;
        console.log('books', books);
        const booksComponents = books.map(book => {
            return <Book key={book.id}
                book={book} />;
        });
        
        return (
            <div>
                {booksComponents}
            </div>
        );
    }
}

const Book = ({ book }) => {
    return <div>
        <p>{ book.volumeInfo.title }</p>
    </div>;
};


