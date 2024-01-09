import React from "react";

function Search(props) {
  let { setSearch } = props;
  return (
    <>
      <h1 id="search">Search Anything here...</h1>
      <input
        className="search-input"
        type="text"
        placeholder="type anything here..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
