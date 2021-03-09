import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.js';
import AddForm from "../src/screens/AddForm/AddForm"

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { rootReducer } from "./ducks/reducers";
import { createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Favicon from 'react-favicon';
import FaviconImg from "./shared/img/formLogo.png";

const firebaseConfig = {
  apiKey: "AIzaSyBiy9WcagJZBqUlcpRPqKDGpDdpLp-kAe8",
  authDomain: "todo-723c0.firebaseapp.com",
  projectId: "todo-723c0",
  storageBucket: "todo-723c0.appspot.com",
  messagingSenderId: "716788120564",
  appId: "1:716788120564:web:906aba66cce2677dc557a1",
  measurementId: "G-LQG3J0EZ8R"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};


ReactDOM.render(
  
  <React.StrictMode>
    <Favicon url={FaviconImg} />
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <App  />
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
