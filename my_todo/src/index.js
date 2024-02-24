import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AppMain from './AppMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> todo첫번째*/}
    <AppMain />
  </React.StrictMode>,
);
