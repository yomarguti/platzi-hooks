import React from 'react';

const Search = ({ search, searchInput, searchHandler }) => {
  return (
    <div className="w-full pb-5">
      <input
        placeholder="Type a Character"
        type="text"
        className="w-full focus:outline-none border border-gray-400 rounded-xl italic px-3 py-3"
        value={search}
        onChange={searchHandler}
        ref={searchInput}
      />
    </div>
  );
};

export default Search;
