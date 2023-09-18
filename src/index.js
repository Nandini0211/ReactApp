import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router } from "react-router-dom";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from './Store';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
let persistor =persistStore(store);








const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);




//const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Router>
      <Provider store={store}>
        <PersistGate persistor ={persistor}>
      <React.StrictMode>
    <App/>
    </React.StrictMode>
    </PersistGate>
    </Provider>
    
    </Router>
   
  </React.StrictMode>
);



