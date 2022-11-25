import React from 'react';

const BookSummaryCard = ({book}) => {

    const {_id, name, location} = book
    return (
        <div>
            {name}
            {location}
        </div>
    );
};

export default BookSummaryCard;