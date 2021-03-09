import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'jquery';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
// window.jQuery = window.$ = global.jquery;
global.jQuery = require('jquery');
require('bootstrap');

//const firebase = require('firebase');
// require('firebase/firestore');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGHsbAqAmhfxX1ytzklglnmIzIFS2ZW7s",
  authDomain: "studentforum2.firebaseapp.com",
  projectId: "studentforum2",
  storageBucket: "studentforum2.appspot.com",
  messagingSenderId: "1012290718807",
  appId: "1:1012290718807:web:95d9c5b9cd8f5526a0e712",
  measurementId: "G-WBJJV5CWM9"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const firebaseDB = firebase.initializeApp(firebaseConfig);
const db = firebaseDB.firestore();
export default db;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();