import React from 'react';
import i18n from './i18n';
import { resources } from './i18n';
import { useTranslation } from 'react-i18next';

import 'flag-icon-css/css/flag-icons.min.css';
import { FaGlobe, FaCaretDown } from 'react-icons/fa';

const ChooseLanguage = () => {
  const { t } = useTranslation();
  const setLanguage = (lng) => i18n.changeLanguage(lng);
  const language = i18n.language;
  return (
    <div className="dropdown">
      <FaGlobe />
      <FaCaretDown />
      <div className="dropdown-content">
        <p className="dropdown-item" onClick={() => setLanguage('en')}>
          <span className="flag-icon flag-icon-gb"></span> English
        </p>
        <p className="dropdown-item" onClick={() => setLanguage('sv')}>
          <span className="flag-icon flag-icon-se"></span> Svenska
        </p>
        <p className="dropdown-item" onClick={() => setLanguage('es')}>
          <span className="flag-icon flag-icon-es"></span> Español
        </p>
      </div>
    </div>
  );
};

export default ChooseLanguage;
