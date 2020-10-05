import React, { useState } from 'react';
import GlobalStyles from './globalStyles';
import Books from './components/Books/Books';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const App = () => {
  const [books, setBooks] = useState(null);
  const [printType, setPrintType] = useState('all');
  const [bookType, setBookType] = useState('');

  const getBooks = async (searchTerm) => {
    try {
      const res = await fetch(
        `${API_URL}${searchTerm}&printType=${printType}${
          bookType !== '' ? `&filter=${bookType}` : ''
        }`
      );
      const data = await res.json();
      return setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const changePrintType = (type) => setPrintType(type);

  const changeBookType = (type) => setBookType(type);

  return (
    <>
      <GlobalStyles />
      <Header></Header>
      <main>
        <Search
          getBooks={getBooks}
          changePrintType={changePrintType}
          changeBookType={changeBookType}
        ></Search>
        <Books books={books}></Books>
      </main>
    </>
  );
};

export default App;
