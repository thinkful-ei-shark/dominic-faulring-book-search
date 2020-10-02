import React from 'react';
import noImg from './no-book.jpg';

const Book = ({ book }) => {
  const { volumeInfo, saleInfo } = book;
  return (
    <li>
      <h2>{volumeInfo.title}</h2>
      <img
        src={
          volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail
            ? volumeInfo.imageLinks.thumbnail
            : noImg
        }
        alt={volumeInfo.title}
      />
      <p>
        Author:{' '}
        {volumeInfo.authors && volumeInfo.authors.length
          ? volumeInfo.authors[0]
          : 'No Author'}
      </p>
      <p>
        Price:{' '}
        {saleInfo.saleability === 'FOR_SALE'
          ? `$${saleInfo.retailPrice.amount}`
          : 'Not for Sale'}
      </p>
      <p>
        {volumeInfo.description
          ? volumeInfo.description
          : 'No description available'}
      </p>
    </li>
  );
};

export default Book;
