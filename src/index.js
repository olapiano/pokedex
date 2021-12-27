import React from 'react';
import './i18n';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context';

import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
