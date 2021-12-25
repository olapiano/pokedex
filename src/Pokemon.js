import { useEffect } from 'react';
import { useGlobalContext } from './context';
//import { useTranslation } from 'react-i18next';

const Pokemon = () => {
  const { pokemonName, fetchPokemon, pokemon } = useGlobalContext();

  //const { t } = useTranslation();
  useEffect(() => {
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="pokemon-info">
      <h3>
        {pokemon.name} <span>#{pokemon.id}</span>
      </h3>

      <p>
        Typ:{' '}
        {pokemon.types &&
          pokemon.types.map((type, index) => {
            return (
              <span key={index}>
                {`${index > 0 ? '&' : ''} ${type.type.name} `}
              </span>
            );
          })}
      </p>
      <div className="sprites">
        {pokemon.sprites &&
          Object.entries(pokemon.sprites)
            .filter(([key, value]) => {
              return value !== null && key !== 'versions' && key !== 'other';
            })
            .map(([key, value]) => {
              return <img key={key} src={value} alt={pokemon.name} />;
            })}
      </div>
    </div>
  );
};

export default Pokemon;
