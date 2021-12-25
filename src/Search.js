import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { completePokemonList, setPokemonList, searchPhrase, setSearchPhrase } =
    useGlobalContext();

  const search = async (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <div className="mt-3">
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
