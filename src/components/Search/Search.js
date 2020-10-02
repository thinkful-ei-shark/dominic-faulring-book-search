import React, { useState } from 'react';

const Search = ({ getBooks }) => {
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
      <input
        placeholder='book title'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;
