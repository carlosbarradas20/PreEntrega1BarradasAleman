import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyC2xXPXXAb2Hh2dkTrOIBHBNZs8_1khbbI",
  authDomain: "react-proyecto-carlos.firebaseapp.com",
  projectId: "react-proyecto-carlos",
  storageBucket: "react-proyecto-carlos.appspot.com",
  messagingSenderId: "435312343050",
  appId: "1:435312343050:web:6a178b5d9e30d2fd80c7f3"
};


 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
