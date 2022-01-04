import React from 'react';

import { useGlobalContext } from './context';

const Lista = () => {
  const { setPokemonName, pokemonList, pokemon, toggleSearch } =
    useGlobalContext();

  return (
    <div className="choosePokemon">
      {pokemonList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setPokemonName(item.name);
              toggleSearch();
            }}
            style={{ cursor: 'pointer' }}
          >
            <p
              style={{ textTransform: 'capitalize' }}
              className={`${item.name === pokemon.name && 'btn-danger'} `}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Lista;
