// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="bg-primary text-white p-3">
    <img src={logo} alt="School Logo" className="logo" />
    <h1>Springdale Public School</h1>
    <nav>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
