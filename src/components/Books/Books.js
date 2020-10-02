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
      {books ? (
        <>
          <h2>Results</h2>
          <ul>{renderBooks()}</ul>
        </>
      ) : null}
    </section>
  );
};

export default Books;
