import React, { useState } from "react";

const SearchForm = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();

    setSearch(searchValue);
    setSearchValue("");
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="inputSeach"></label>
      <input
        type="text"
        name="inputSeach"
        id="inputSeach"
        placeholder="Digitar pesquisa"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default SearchForm;
