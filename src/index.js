/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Pictures from './components/Pictures';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/schedule-consultation" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-work" element={<Pictures />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-hannah" element={<About />} />
        <Route path="/our-team" element={<Team />} />
      </Routes>  
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

