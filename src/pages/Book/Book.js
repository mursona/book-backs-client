import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookSummaryCard from './BookSummaryCard';

const Book = () => {

    const categoryBook = useLoaderData();
    return (
        <div>
            {
                categoryBook.map(book =>
                <BookSummaryCard                     
                key={book._id}
                book={book}
                >
                </BookSummaryCard>)
            }
        </div>
    );
};

export default Book;