import React from 'react';
import styled from 'styled-components';
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
          <SearchResults>{renderBooks()}</SearchResults>
        </>
      ) : null}
    </section>
  );
};

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 1.6rem;
`;

export default Books;
