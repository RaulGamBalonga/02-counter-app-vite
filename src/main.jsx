import React from 'react'
import ReactDOM from 'react-dom/client';

// import  App  from './HelloWorlApp';
// import { FirstApp } from './FirstApp';

import './styles.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot(  document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp title='Hola, soy un Gnomo!' /> */}
        <CounterApp value={ 20 }  />
    </React.StrictMode>
)
