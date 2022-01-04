import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [completePokemonList, setCompletePokemonList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState('bulbasaur');
  const [listOfTypes, setListOfTypes] = useState([]);
  const [chosenTypes, setChosenTypes] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [viewSearch, setViewSearch] = useState(false);
  const [viewSettings, setViewSettings] = useState(false);

  const apiLink = 'https://pokeapi.co/api/v2/';
  let searchQuery = `pokemon?limit=1118&offset=0`;

  const fetchPokemonList = async (req, res) => {
    try {
      res = await axios.get(`${apiLink + searchQuery}/`, {
        headers: { Accept: 'application/json' },
      });
      setCompletePokemonList(res.data.results);
      console.log('Fetch Lista');
    } catch (error) {}
  };

  const fetchData = async (apiLink) => {
    const list = [];
    while (list.length < 5) {
      axios
        .get(pokemonName)

        .then((response) => {})
        .catch((error) => {})
        .then(() => {
          console.log(pokemonName);
        });
    }
  };

  const fetchTypeList = async (req, res) => {
    try {
      res = await axios.get(`${apiLink + 'type'}/`, {
        headers: { Accept: 'application/json' },
      });
      console.log('Fetch Typer');
      setListOfTypes(res.data.results);
    } catch (error) {}
  };

  const fetchPokemon = async (req, res) => {
    try {
      res = await axios.get(
        `${apiLink + 'pokemon/' + pokemonName.toLowerCase()}/`,
        {
          headers: { Accept: 'application/json' },
        }
      );
      console.log('Fetch Pokemon');
      setPokemon(res.data);
    } catch (error) {}
  };

  const fetchEvolutionChain = async (req, res) => {
    try {
      res = await axios.get(`${apiLink + 'evolution-chain/' + pokemon.id}/`, {
        headers: { Accept: 'application/json' },
      });
      console.log('Evulotion', res.data);
    } catch (error) {}
  };

  const typeClickHandler = (type) => {
    let types = chosenTypes;
    if (types.includes(type)) {
      types = types.filter((item) => {
        return item !== type;
      });
      setChosenTypes(types);
    } else if (types) {
      if (types.length < 2) setChosenTypes([type].concat(types));
    } else setChosenTypes([type]);
  };

  const toggleSearch = () => {
    setViewSearch(!viewSearch);
    setViewSettings(false);
  };

  const toggleSettings = () => {
    setViewSettings(!viewSettings);
    setViewSearch(false);
  };

  useEffect(() => {
    fetchPokemonList();
    fetchTypeList();
    //fetchData();
  }, []);

  useEffect(() => {
    setPokemonList(completePokemonList);
  }, [completePokemonList]);

  useEffect(() => {
    setPokemonList(
      completePokemonList.filter((item) => {
        return item.name.includes(searchPhrase.toLowerCase());
      })
    );
  }, [searchPhrase]);

  return (
    <AppContext.Provider
      value={{
        completePokemonList,
        pokemonList,
        setPokemonList,
        pokemon,
        setPokemon,
        pokemonName,
        setPokemonName,
        fetchPokemonList,
        fetchPokemon,
        listOfTypes,
        searchPhrase,
        setSearchPhrase,
        chosenTypes,
        setChosenTypes,
        typeClickHandler,
        viewSearch,
        viewSettings,
        toggleSearch,
        toggleSettings,
        fetchEvolutionChain,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
