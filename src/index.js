import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './modules/auth/context/auth.context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from './modules/auth/components/LandingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Land/>} />
      <Route path='/Property' element={<App/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode></AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
