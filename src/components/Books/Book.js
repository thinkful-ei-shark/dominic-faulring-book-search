import React from 'react';
import styled from 'styled-components';
import noImg from './no-book.jpg';

const Book = ({ book }) => {
  const { volumeInfo, saleInfo } = book;
  return (
    <BookResult>
      <h3>{volumeInfo.title}</h3>
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
          ? volumeInfo.description.substring(0, 160) + '...'
          : 'No description available'}
      </p>
    </BookResult>
  );
};

const BookResult = styled.div``;

export default Book;
