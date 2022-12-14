import React from 'react';
import ReactDom from 'react-dom/client';
import { CounterApp } from './components/CounterApp';
import { FirstApp } from './components/FirstApp';
// import { App } from './App';




ReactDom.createRoot( document.getElementById('root') ).render( 
    <React.StrictMode>
    {/* <App /> */}
        {/* <FirstApp  */}
        {/* title: hola mundox */}
        {/* // /> */}
        <CounterApp 
            value={1}
        />
    </React.StrictMode>
);