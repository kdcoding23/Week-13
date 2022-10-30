// I originally had a separate "App.js" file that wrapped the page layout/formatting inside a function. But, when I commented it out, it didn't change the layout of the page so I deleted the file and just kept this one.

import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Since I didn't use the "App.js" file, instead of rendering <App />, I rendered the two componenets' pages below.
    <>
    <NavBar />
    <LoginForm />
    </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
