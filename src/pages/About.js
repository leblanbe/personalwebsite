import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import ProfilePicture from '../assets/ProfilePicture.jpg';
import ReactIcon from '../assets/ReactIcon.png';
import CIcon from '../assets/C++Icon.png';
import JavaIcon from '../assets/JavaIcon.png';
import FigmaIcon from '../assets/FigmaIcon.png';
import CanvaIcon from '../assets/CanvaIcon.png';
import WordpressIcon from '../assets/WordpressIcon.png';
import UnityIcon from '../assets/UnityIcon.png';
import UEIcon from '../assets/UEIcon.png';
import HtmlIcon from '../assets/HTML.png';
import CssIcon from '../assets/CssIcon.png';
import JSIcon from '../assets/JSIcon.png';

import '../App.css';

function About() {
  return (
    <>
      <Navbar />
      
        <div className="box-main">
          <div className="firsthalf">
            <h1 className="text-big">Hi, I'm Brynn LeBlanc</h1>
            <p className="text-small">
              In the spring of 2025, I graduated from Vanderbilt University with a double major in Computer Science and Human and Organizational Development. 
            </p>
          </div>
          <div className="secondhalf">
            <img
            src={ProfilePicture}
            alt="Brynn LeBlanc"
            className="profile-img"
          />
          </div>
        </div>
        <div className="section-divider"></div>

        <section className="what-i-do">
          <h1 className="text-big">What I do</h1>
        </section>

        <section className="skills-section">
          <div className="skills-grid">
            <div className="skill-item">
              <img src={HtmlIcon} alt="HTML" className="skill-icon" />
              <h3 className="skill-title">HTML</h3>
              <p className="skill-description">Semantic and responsive web pages.</p>
            </div>
            <div className="skill-item">
              <img src={CssIcon} alt="CSS" className="skill-icon" />
              <h3 className="skill-title">CSS</h3>
              <p className="skill-description">Layouts, Flexbox, Grid, and animations.</p>
            </div>
            <div className="skill-item">
              <img src={ReactIcon} alt="React" className="skill-icon" />
              <h3 className="skill-title">React</h3>
              <p className="skill-description">Reusable components and interactive apps.</p>
            </div>
            <div className="skill-item">
              <img src={JSIcon} alt="JavaScript" className="skill-icon" />
              <h3 className="skill-title">JavaScript</h3>
              <p className="skill-description">ES6+, DOM, async programming.</p>
            </div>
            <div className="skill-item">
              <img src={HtmlIcon} alt="HTML" className="skill-icon" />
              <h3 className="skill-title">HTML</h3>
              <p className="skill-description">Semantic and responsive web pages.</p>
            </div>
            <div className="skill-item">
              <img src={CIcon} alt="C++" className="skill-icon" />
              <h3 className="skill-title">C++</h3>
              <p className="skill-description">stuff</p>
            </div>
            <div className="skill-item">
              <img src={JavaIcon} alt="Java" className="skill-icon" />
              <h3 className="skill-title">Java</h3>
              <p className="skill-description">Stuff</p>
            </div>
            <div className="skill-item">
              <img src={FigmaIcon} alt="Figma" className="skill-icon" />
              <h3 className="skill-title">Figma</h3>
              <p className="skill-description">Stuff</p>
            </div>
            <div className="skill-item">
              <img src={CanvaIcon} alt="Canva" className="skill-icon" />
              <h3 className="skill-title">Canva</h3>
              <p className="skill-description">stuff</p>
            </div>
            <div className="skill-item">
              <img src={WordpressIcon} alt="Wordpress" className="skill-icon" />
              <h3 className="skill-title">Wordpress</h3>
              <p className="skill-description">Stuff</p>
            </div>
            <div className="skill-item">
              <img src={UnityIcon} alt="Unity" className="skill-icon" />
              <h3 className="skill-title">Unity</h3>
              <p className="skill-description">Stuff</p>
            </div>
            <div className="skill-item">
              <img src={UEIcon} alt="Unreal Engine" className="skill-icon" />
              <h3 className="skill-title">Unreal Engine</h3>
              <p className="skill-description">Stuff</p>
            </div>
          </div>
        </section>
    </>
  );
}

export default About;