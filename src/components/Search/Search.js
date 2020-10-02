import React, { useState } from 'react';

const Search = ({ getBooks, changePrintType, changeBookType }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query || query.trim() === '') {
      return;
    }

    return getBooks(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='book-title'>Book Title</label>
      <input
        id='book-title'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        required
      />
      <label htmlFor='select-print-type'>Print Type</label>
      <select
        id='select-print-type'
        onChange={(e) => changePrintType(e.target.value)}
      >
        <option defaultValue value='all'>
          All
        </option>
        <option value='books'>Books</option>
        <option value='magazines'>Magazines</option>
      </select>
      <label htmlFor='select-book-type'>Book Type</label>
      <select
        id='select-book-type'
        onChange={(e) => changeBookType(e.target.value)}
      >
        <option defaultValue value=''>
          No Filter
        </option>
        <option value='free-ebooks'>Free Ebooks</option>
        <option value='paid-ebooks'>Paid Ebooks</option>
      </select>
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;
