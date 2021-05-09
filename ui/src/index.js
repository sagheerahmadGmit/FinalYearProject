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
  apiKey: "AIzaSyDTCcoZw3bXV2ODLVuEKWQTfSP1iOVda2c",
  authDomain: "hubstudent-ab740.firebaseapp.com",
  projectId: "hubstudent-ab740",
  storageBucket: "hubstudent-ab740.appspot.com",
  messagingSenderId: "1065432832319",
  appId: "1:1065432832319:web:007c51d7842f69d4a05b8a",
  measurementId: "G-LCQ5EKZ5YB"
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