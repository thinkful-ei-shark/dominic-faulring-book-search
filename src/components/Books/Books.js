import React, { useState } from 'react';
import Book from './Book';
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const Books = () => {
  const [books, setBooks] = useState(null);
  // const [loading, setLoading] = useState(false);

  const getBooks = (searchTerm) => {
    fetch(`${API_URL}${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  };

  const renderBooks = () => {
    return books.items.map((book) => <Book book={book}></Book>);
  };

  return (
    <section>
      <h1>Books</h1>
      <button onClick={() => getBooks('harry potter')}>Get Books</button>
      <ul>{books ? renderBooks() : null}</ul>
    </section>
  );
};

export default Books;
