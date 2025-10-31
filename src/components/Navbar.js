import React from 'react';
import '../App.css';
import logo from '../assets/websitelogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar background">
      <ul className="nav-list">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;