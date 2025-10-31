import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/websitelogo.png';

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
          </div>
          <div className="secondhalf">
            {/* optional image or content */}
          </div>
        
      </section>

      <footer className="footer">
        <p className="text-footer">footer?</p>
      </footer>
    </>
  );
}

export default Home;