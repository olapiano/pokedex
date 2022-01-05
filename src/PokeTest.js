import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { useGlobalContext } from './context';
const P = new Pokedex();

const PokeTest = () => {
  const { setPokemonList, completePokemonList, chosenTypes } =
    useGlobalContext();
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
    else setTypeList1([]);
    if (types.length > 1)
      P.getTypeByName(types[1])
        .then((response) => {
          setTypeList2(response.pokemon);
        })
        .catch((error) => {
          console.error('There was an error: ', error);
        });
    else {
      setTypeList2([]);
    }
  };

  useEffect(() => {
    getPokemonListByTypes(chosenTypes);
  }, [chosenTypes]);

  useEffect(() => {
    let list = [];
    console.log('type lists', typeList1, typeList2);

    if (
      typeList1 !== null &&
      typeList1 !== undefined &&
      typeList1.length > 0 &&
      typeList2 !== null &&
      typeList2 !== undefined &&
      typeList2.length > 0
    ) {
      for (let i = 0; i < typeList1.length; i++) {
        for (let j = 0; j < typeList2.length; j++) {
          if (typeList1[i].pokemon.name === typeList2[j].pokemon.name) {
            list.push(typeList1[i]);
          }
        }
      }
    } else if (
      typeList1 !== null &&
      typeList1 !== undefined &&
      typeList1.length > 0
    )
      for (let i = 0; i < typeList1.length; i++) {
        list.push(typeList1[i]);
      }
    else {
      setPokemonList(completePokemonList);
      return;
    }

    setPokemonList(
      list.map((item) => {
        return item.pokemon;
      })
    );
  }, [typeList1, typeList2]);

  return (
    <div>
      {/* {typeList1.map((pokemon, index) => {
        return <p key={index}>{pokemon.pokemon.name}</p>;
      })} */}
    </div>
  );
};

export default PokeTest;
