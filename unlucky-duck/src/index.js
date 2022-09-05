import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './home';

import TowerDropperHome from './tower-dropper/home';
import TowerDropperPrivacyPolicy from './tower-dropper/privacy-policy';

import DriftoHome from './drifto/home';
import DriftoPrivacyPolicy from './drifto/privacy-policy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/unlucky-duck/" element={<Home />} />
      <Route path="/unlucky-duck/tower-dropper/" element={<TowerDropperHome />} />
      <Route path="/unlucky-duck/tower-dropper/privacy-policy" element={<TowerDropperPrivacyPolicy />} />
      <Route path="/unlucky-duck/drifto/" element={<DriftoHome />} />
      <Route path="/unlucky-duck/drifto/privacy-policy" element={<DriftoPrivacyPolicy />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
