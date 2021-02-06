import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

//const firebase = require('firebase');
// require('firebase/firestore');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKMyh38w1OzPFwBfjOAX3SN_yfhlhxnHg",
    authDomain: "text-editor-8e086.firebaseapp.com",
    projectId: "text-editor-8e086",
    storageBucket: "text-editor-8e086.appspot.com",
    messagingSenderId: "753566145078",
    appId: "1:753566145078:web:b1b6c2fb5be0b885899697",
    measurementId: "G-7ZPZRKR4SR"
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