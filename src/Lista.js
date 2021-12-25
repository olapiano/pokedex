import React from 'react';

import { useGlobalContext } from './context';

const Lista = () => {
  const { setPokemonName, pokemonList, pokemon } = useGlobalContext();

  const selectHandler = () => {};
  return (
    <div className="choosePokemon">
      <select name="sometext" size="10" onClick={() => {}}>
        {pokemonList.map((item, index) => {
          return (
            <option key={index} onClick={() => setPokemonName(item.name)}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* {pokemonList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => setPokemonName(item.name)}
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
      })} */}
    </div>
  );
};

export default Lista;
