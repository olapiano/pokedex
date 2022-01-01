import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { completePokemonList, setPokemonList, searchPhrase, setSearchPhrase } =
    useGlobalContext();

  const { t } = useTranslation();

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
        placeholder={t('search pokémon')}
      />
    </div>
  );
};

export default Search;
