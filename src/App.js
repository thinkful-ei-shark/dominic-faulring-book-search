import React from 'react';
import Books from './components/Books/Books';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

const App = () => {
  return (
    <main>
      <Header></Header>
      <Search></Search>
      <Books></Books>
    </main>
  );
};

export default App;
