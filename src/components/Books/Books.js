import React from 'react';
import Book from './Book';

const Books = ({ books }) => {
  const renderBooks = () => {
    return books.items.map((book) => <Book book={book}></Book>);
  };

  return (
    <section>
      <h1>Books</h1>
      <ul>{books ? renderBooks() : null}</ul>
    </section>
  );
};

export default Books;
