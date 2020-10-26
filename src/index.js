import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.css";
import { GlobalStyle } from "./components/atoms/base/global"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


