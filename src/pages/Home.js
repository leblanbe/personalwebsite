import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/websitelogo.png';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar /> {/* Render the navbar here */}

      <section className="section background">
          <div className="firsthalf">
            <h1 className="text-big">Hi, I'm Brynn LeBlanc</h1>
            <p className="text-small">
              A recent graduate of Vanderbilt University working in Software Development.
            </p>
            <Link to="/contact" className="btn-connect">
              Let’s Connect
            </Link>
          </div>
          <div className="secondhalf">
            {/* optional image or content */}
          </div>
      </section>
    </>
  );
}

export default Home;