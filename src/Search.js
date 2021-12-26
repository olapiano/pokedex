import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { completePokemonList, setPokemonList, searchPhrase, setSearchPhrase } =
    useGlobalContext();

  const search = async (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <div className="search-phrase">
      <input
        type="text"
        value={searchPhrase}
        onChange={(e) => {
          search(e);
        }}
        placeholder="Sök Pokémon"
      />
    </div>
  );
};

export default Search;
