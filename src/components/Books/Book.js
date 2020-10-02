import React from 'react';

const Book = ({ book }) => {
  return (
    <li>
      <h2>{book.volumeInfo.title}</h2>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <p>Author: {book.volumeInfo.authors[0]}</p>
      <p>
        Price:{' '}
        {book.saleInfo.saleability === 'FOR_SALE'
          ? `$${book.saleInfo.retailPrice.amount}`
          : 'Not for Sale'}
      </p>
      <p>{book.volumeInfo.description}</p>
    </li>
  );
};

export default Book;
