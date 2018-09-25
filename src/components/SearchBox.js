import React from 'react';

const SearchBox = ({ search, onSearchChange }) => (
  <div className='tc'>
    <input
      className='pa3 ba b--green bg-lightest-blue'
      label='Search'
      type='search'
      placeholder='Search...'
      value={search}
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBox;
