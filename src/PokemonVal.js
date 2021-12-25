import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import axios from 'axios';

const PokemonVal = () => {
  const [completeList, setCompleteList] = useState([]);
  const { pokemonList, setPokemonName } = useGlobalContext();

  const list = pokemonList.slice(0, 3);

  const fetchData = (apiLink) => {
    axios
      .get(apiLink)
      .then(function (response) {
        setCompleteList([response.data, ...completeList]);
      })
      .catch(function (error) {
        console.error(error);
      })
      .then(function () {
        // console.log(completeList, completeList.length);
      });
  };

  return (
    <div className="card-deck d-flex justify-content-center">
      {list.map((item, index) => {
        return (
          <div
            className="card d-flex justify-content-around align-items-center m-3"
            onClick={() => setPokemonName(item.name)}
            style={{
              height: 150,
              width: 150,
              borderRadius: 75,
              cursor: 'pointer',
              backgroundImage:
                'linear-gradient(rgb(255, 148, 0),rgb(255, 202, 0))',
            }}
            key={index}
          >
            {/* <img
              className="card-img-top"
              style={{ height: 100, width: 100 }}
              src={}
              alt={item.name}
            /> */}
            <div className="card-img-overlay">
              <h6 className="card-title text-capitalize">{item.name}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonVal;
