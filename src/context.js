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
  const [species, setSpecies] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState([]);

  const apiLink = 'https://pokeapi.co/api/v2/';
  let searchQuery = `pokemon?limit=1118&offset=0`;

  const fetchPokemonList = async (req, res) => {
    try {
      res = await axios.get(`${apiLink + searchQuery}/`, {
        headers: { Accept: 'application/json' },
      });
      setCompletePokemonList(res.data.results);
      console.log('Fetch Lista', res.data.results);
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
      res = await axios.get(`${apiLink + 'type'}`, {
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

  const fetchSpecies = async (req, res) => {
    if (pokemon)
      try {
        res = await axios.get(`${pokemon.species.url}`, {
          headers: { Accept: 'application/json' },
        });
        console.log('Fetch Species', species.evolution_chain);
        setSpecies(res.data);
      } catch (error) {
        console.log('Fetch species error');
      }
  };

  const fetchEvolutionChain = async (req, res) => {
    if (species)
      try {
        res = await axios.get(`${species.evolution_chain.url}`, {
          headers: { Accept: 'application/json' },
        });
        console.log('Fetch Evolution Chain', res.data.chain);
        let chain = [res.data.chain.species.name];
        if (res.data.chain.evolves_to.length > 0) {
          res.data.chain.evolves_to.forEach((element) => {
            console.log('element: ', element);
          });
        }
        setEvolutionChain(chain);
      } catch (error) {
        console.log('Fetch evolution chain error');
      }
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

  useEffect(() => {
    fetchSpecies();
  }, [pokemon]);

  useEffect(() => {
    fetchEvolutionChain();
  }, [species]);

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
        evolutionChain,
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
