import React, { Suspense } from 'react';
import { useGlobalContext } from './context';
import { useTranslation } from 'react-i18next';
import typeColors from './typeColors.json';

const Typer = () => {
  const { listOfTypes, typeClickHandler, chosenTypes } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <div className="types">
      {listOfTypes
        .filter((type) => {
          return type.name !== 'unknown' && type.name !== 'shadow';
        })
        .map((type, index) => {
          console.log(type.name);
          return (
            <div
              key={index}
              onClick={() => typeClickHandler(type.name)}
              style={{
                cursor: 'pointer',
                background: `linear-gradient(to bottom, ${
                  typeColors[type.name][0]
                } 0%, ${typeColors[type.name][0]} 50%, ${
                  typeColors[type.name][1] || typeColors[type.name][0]
                } 50%, ${
                  typeColors[type.name][1] || typeColors[type.name][0]
                } 100%)`,
              }}
              className={`${
                chosenTypes.includes(type.name) ? 'type type-chosen' : 'type'
              }`}
            >
              <p className="">
                {t(type.name)}{' '}
                <img
                  src={require(`./assets/images/typer/${type.name}.png`)}
                  alt=""
                  className="type-sprite"
                />
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Typer;
