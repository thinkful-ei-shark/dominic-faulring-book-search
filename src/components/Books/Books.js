import React, { useState } from 'react';
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const Books = () => {
  const [books, setBooks] = useState(null);

  return (
    <section>
      <h1>Books</h1>
      <button onClick={() => setBooks('State has changed')}>
        change my books state
      </button>
    </section>
  );
};

export default Books;
