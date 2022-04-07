import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store/index.js";
import { PersistGate } from "redux-persist/integration/react"
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";
import axios from 'axios';

axios.defaults.baseURL = `https://proyect-ecommerce.herokuapp.com`

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Auth0Provider
    domain="dev-h82j56dy.us.auth0.com"
    clientId="HveXMvaTPEVLJXw2gznwxR0rPnj09Rzn"
    redirectUri={window.location.origin}
    >
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store/index.js";
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();