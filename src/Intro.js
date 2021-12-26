import React, { useState } from 'react';
import rotomFront from './assets/images/rotom_framsida_vertikal.png';
import rotomBack from './assets/images/rotom_baksida_vertikal.png';

const Intro = () => {
  const [phoneStarted, setPhoneStarted] = useState(false);
  return (
    <div
      onClick={() => {
        setPhoneStarted(true);
      }}
    >
      <img src={phoneStarted ? rotomFront : rotomBack} alt="Rotom Baksida" />
    </div>
  );
};

export default Intro;
