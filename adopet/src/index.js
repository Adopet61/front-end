import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import configureStore from "./redux/reducers/configureStore"
const store = configureStore();


ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
=======
  
    <App />
 ,
>>>>>>> abd063fb0025115c7fed7d44cfa7f1bb7e434c0b
  document.getElementById('root')
);


