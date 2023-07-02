import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n.use(initReactI18next).init({
//   lng: 'en',
//   resources: {
//     en: {
//       translation: require('./locales/en.json')
//     },
//     ar: {
//       translation: require('./locales/ar.json')
//     }
//   },
//   interpolation: {
//     escapeValue: false
//   }
// });

// ReactDOM.render(<App />, document.getElementById('root'));

