import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookSummaryCard from './BookSummaryCard';

const Book = () => {

    const categoryBook = useLoaderData();
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
            {
                categoryBook.map(book =>
                <BookSummaryCard                     
                key={book._id}
                book={book}
                >
                </BookSummaryCard>)
            }
        </div>
        </div>
    );
};

export default Book;