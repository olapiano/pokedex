import React from 'react';
import i18n from './i18n';
import { resources } from './i18n';
import { useTranslation } from 'react-i18next';
import ChooseLanguage from './ChooseLanguage';

import 'flag-icon-css/css/flag-icons.min.css';
import { FaGlobe, FaCaretDown } from 'react-icons/fa';

const Settings = () => {
  const { t } = useTranslation();
  const setLanguage = (lng) => i18n.changeLanguage(lng);
  const language = i18n.language;

  return (
    <div className="content">
      <p>{t('choose language')}</p>
      <ChooseLanguage />
    </div>
  );
};

export default Settings;
