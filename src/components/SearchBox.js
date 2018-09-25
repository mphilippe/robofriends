import React from 'react';

const SearchBox = ({ search, onSearchChange }) => (
  <div className='tc'>
    <label for='search'>
      Search:
    </label>
    <input
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      name='search'
      placeholder='Search...'
      value={search}
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBox;
