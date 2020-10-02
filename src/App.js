import React, { useState } from 'react';
import Books from './components/Books/Books';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const App = () => {
  const [books, setBooks] = useState(null);

  const getBooks = (searchTerm) => {
    fetch(`${API_URL}${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <Header></Header>
      <Search getBooks={getBooks}></Search>
      <Books books={books}></Books>
    </main>
  );
};

export default App;
