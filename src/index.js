import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import global_en from "./translation/en/global.json"
import global_es from "./translation/es/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';



i18next.init({
  interpolation: {escapeValue:false},
  lng: "en",
  resources:{
        en: {
          global: global_en,
        },
        he:{
          global: global_es,
        }
        // he:{
        //   global: global_he,
        // },
  },
})




ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider  i18n={i18next}>
            <App />
    </I18nextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
