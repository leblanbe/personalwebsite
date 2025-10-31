import React from 'react';
import '../App.css'; // or wherever your CSS is
import logo from '../assets/websitelogo.png';

function Navbar() {
  return (
    <nav className="navbar background">
      <ul className="nav-list">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;