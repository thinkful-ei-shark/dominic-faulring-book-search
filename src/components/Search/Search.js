import React, { useState } from 'react';
import styled from 'styled-components';

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
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor='book-title'>Book Title</label>
        <input
          id='book-title'
          type='text'
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
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: calc(100% - 9.6rem);
  margin: 0 auto 4.8rem auto;
  display: flex;
  justify-content: flex-end;
`;

export default Search;
