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
var firebaseConfig = {
  apiKey: "AIzaSyDEiiWJW8VdhtDIYl09Eh1xsftc9cuzG1E",
  authDomain: "studenthub3-92319.firebaseapp.com",
  projectId: "studenthub3-92319",
  storageBucket: "studenthub3-92319.appspot.com",
  messagingSenderId: "927205554956",
  appId: "1:927205554956:web:a2b2c1d64cfde1c3ada729",
  measurementId: "G-QML47SNVNK"
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