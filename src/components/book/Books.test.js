import React from 'react';
import Books from './Books';
import render from 'react-test-renderer';
jest.mock('../../services/api', () => {
    return { getBooks: () => Promise.resolve({ books: [], totalPages: 1 }) };
});


describe('books', () => {
    test('books snapshot', () => {
        expect(render
            .create(<Books title="my title" />)
            .toJSON()).toMatchSnapshot();
    });
});

