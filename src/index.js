import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Pictures from './components/Pictures';
import Reviews from './components/Reviews';
import Team from './components/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/schedule-consultation" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-work" element={<Pictures />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/our-team" element={<Team />} />
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);

