import React, { Suspense } from 'react';
import { useGlobalContext } from './context';
import { useTranslation } from 'react-i18next';

const Typer = () => {
  const { listOfTypes, typeClickHandler, chosenTypes } = useGlobalContext();
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>Typer</h1>

      {listOfTypes.map((type, index) => {
        return (
          <div
            key={index}
            onClick={() => typeClickHandler(type.name)}
            style={{ cursor: 'pointer' }}
            className="mt-3"
          >
            <p
              className={`${chosenTypes.includes(type.name) && 'btn-warning'}`}
            >
              {t(type.name)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <Suspense fallback="loading">
      <Typer />
    </Suspense>
  );
}
//export default Typer;
