import React, { Component } from 'react';
import { getBooks } from '../../services/api';

export default class Books extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        getBooks()
            .then(res => {
                this.setState({ books: res });
            });
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


