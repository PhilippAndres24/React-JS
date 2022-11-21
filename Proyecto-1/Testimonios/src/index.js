import React from 'react'; //nos permite crear componentes
import ReactDOM from 'react-dom/client';  //nos permite interactuar con el dom, con la estructura de la pagina 
import './index.css';  //se importa el estilo css.
import App from './App'; // se importa la aplicacion principal es escencial.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

