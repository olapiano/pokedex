import { useEffect } from 'react';
import { useGlobalContext } from './context';
import { useTranslation } from 'react-i18next';
import typeColors from './typeColors.json';

const Pokemon = () => {
  const { pokemonName, fetchPokemon, pokemon, evolutionChain } =
    useGlobalContext();

  const spriteSortOrder = [
    'front_default',
    'back_default',
    'front_female',
    'back_female',
    'front_shiny',
    'back_shiny',
    'front_shiny_female',
    'back_shiny_female',
  ];

  const { t } = useTranslation();

  useEffect(() => {
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="content pokemon-info">
      <h3>
        {pokemon.name} <span>#{pokemon.id}</span>
      </h3>
      <p>
        {pokemon.types &&
          pokemon.types.map((type, index) => {
            return (
              <span
                key={index}
                className="type type-chosen"
                style={{
                  background: `linear-gradient(to bottom, ${
                    typeColors[type.type.name][0]
                  } 0%, ${typeColors[type.type.name][0]} 50%, ${
                    typeColors[type.type.name][1] ||
                    typeColors[type.type.name][0]
                  } 50%, ${
                    typeColors[type.type.name][1] ||
                    typeColors[type.type.name][0]
                  } 100%)`,
                }}
              >
                {t(type.type.name)}{' '}
                <img
                  src={require(`./assets/images/typer/${type.type.name}.png`)}
                  alt=""
                  className="type-sprite"
                />
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
            .sort((a, b) => {
              console.log(a);
              return (
                spriteSortOrder.indexOf(a[0]) - spriteSortOrder.indexOf(b[0])
              );
            })
            .map(([key, value]) => {
              console.log(key);
              return (
                <div className="sprite" key={key}>
                  <img src={value} alt={pokemon.name} />
                </div>
              );
            })}
      </div>
      <div className="stats">
        {pokemon.stats &&
          pokemon.stats.map((stat, index) => {
            return (
              <div className="stat" key={index}>
                {t(stat.stat.name)}: {stat.base_stat}
              </div>
            );
          })}
      </div>
      <div className="evolution-line">
        
      </div>
    </div>
  );
};

export default Pokemon;
