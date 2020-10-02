import React from 'react';
import Book from './Book';

const Books = ({ books }) => {
  const renderBooks = () => {
    if (!books || books.totalItems === 0) {
      return <p>No Books Found :(</p>;
    }
    return books.items.map((book) => <Book key={book.id} book={book}></Book>);
  };

  return (
    <section>
      <h1>Books</h1>
      <ul>{books ? renderBooks() : null}</ul>
    </section>
  );
};

export default Books;
