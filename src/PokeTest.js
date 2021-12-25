import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { useGlobalContext } from './context';
const P = new Pokedex();

const PokeTest = () => {
  const { pokemonList, chosenTypes } = useGlobalContext();
  const [typeList1, setTypeList1] = useState([]);
  const [typeList2, setTypeList2] = useState([]);

  const getPokemonListByTypes = (types) => {
    if (types.length > 0)
      P.getTypeByName(types[0])
        .then((response) => {
          setTypeList1(response.pokemon);
        })
        .catch((error) => {
          console.error('There was an error: ', error);
        });
    if (types.length > 1)
      P.getTypeByName(types[1])
        .then((response) => {
          setTypeList2(response.pokemon);
        })
        .catch((error) => {
          console.error('There was an error: ', error);
        });
  };

  useEffect(() => {
    getPokemonListByTypes(chosenTypes);
  }, [chosenTypes]);

  useEffect(() => {
    if (
      typeList1 !== null &&
      typeList1 !== undefined &&
      typeList1.length > 0 &&
      typeList2 !== null &&
      typeList2 !== undefined &&
      typeList2.length > 0
    ) {
      let list = [];

      for (let i = 0; i < typeList1.length; i++) {
        for (let j = 0; j < typeList2.length; j++) {
          if (typeList1[i].pokemon.name === typeList2[j].pokemon.name) {
            list.push(typeList1[i]);
          }
        }
      }
      setTypeList1(list);
    }
  }, [typeList2]);
  return (
    <div>
      {typeList1.map((pokemon, index) => {
        return <p key={index}>{pokemon.pokemon.name}</p>;
      })}
    </div>
  );
};

export default PokeTest;
