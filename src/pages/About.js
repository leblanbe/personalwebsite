import React, { useState, useEffect } from 'react';
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
import PythonIcon from '../assets/PythonIcon.png';
import ClimbingIcon from '../assets/climbingIcon.png';
import BooksIcon from '../assets/CoffeeBooksIcon.png';
import CatIcon from '../assets/kittenIcon.png';
import TravelIcon from '../assets/travelIcon.png';
import GamesIcon from '../assets/videogamesIcon.png';
import HikingIcon from '../assets/hikingIcon.png';

import '../App.css';

function About() {
  const hobbies = [
    {
      icon: BooksIcon,
      title: 'Books & Stories',
      description: 'In my opinion, reading is escapism. No matter how I am feeling, I can grab a book and be in a totally different universe. My favorite genres are fanatsy and science fiction; I love anything by Brandon Sanderson and I cannot get enough of Sara J Maas.',
    },
    {
      icon: TravelIcon,
      title: 'Travel',
      description: 'I have to give credit for my love of traveling to my family, who always took me on adventures ever since I was little. I love visiting new countries, discovering new cities, trying new foods, and meeting people with different perspectives — every trip shapes how I see the world.',
    },
    {
      icon: ClimbingIcon,
      title: 'Climbing',
      description: 'I first got into climbing in college, and quickly found the gym to be my favorite place on earth. Between top-roping, leading, and outdoor climbing, my problem-solving skills and physical limits are constantly being tested — every route feels like debugging with gravity.',
    },
    {
      icon: HikingIcon,
      title: 'Hiking',
      description: 'Hiking helps me reset — I find calm in long trails, mountain air, and the sense of discovery that comes with each new view. Despite that, hiking also brings me excitement and a good thrill. I recently adventured to backpack the West Highland Way in Scotland, this may have been one of the most exciting hikes of my life. My favorite hikes are in Acadia National Park and Grand Teton National Park.',
    },
    {
      icon: GamesIcon,
      title: 'Video Games',
      description: 'From narrative-driven adventures to strategy games, I love how interactive worlds combine design, storytelling, and technology. My favorite games right now are Overwatch and Counter Strike 2, but these are almost always changing.',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hobbies.length);
    }, 4000); // rotates every 4 seconds
    return () => clearInterval(interval);
  }, [hobbies.length]);

  const nextSlide = () => setIndex((index + 1) % hobbies.length);
  const prevSlide = () => setIndex((index - 1 + hobbies.length) % hobbies.length);

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

        <section className="center-text">
          <h1 className="text-big">What I do</h1>
        </section>

        <section className="skills-section">
          <div className="skills-grid">
            <div className="skill-item">
              <img src={HtmlIcon} alt="HTML" className="skill-icon" />
              <h3 className="skill-title">HTML</h3>
              <p className="skill-description">Semantic and accessible web page structure.</p>
            </div>
            <div className="skill-item">
              <img src={CssIcon} alt="CSS" className="skill-icon" />
              <h3 className="skill-title">CSS</h3>
              <p className="skill-description">Styling, layouts, Flexbox, Grid, and responsive design.</p>
            </div>
            <div className="skill-item">
              <img src={JSIcon} alt="JavaScript" className="skill-icon" />
              <h3 className="skill-title">JavaScript</h3>
              <p className="skill-description">Dynamic functionality, ES6+, DOM manipulation, and async programming.</p>
            </div>
            <div className="skill-item">
              <img src={ReactIcon} alt="React" className="skill-icon" />
              <h3 className="skill-title">React</h3>
              <p className="skill-description">Reusable components and building interactive user interfaces.</p>
            </div>
            <div className="skill-item">
              <img src={CIcon} alt="C++" className="skill-icon" />
              <h3 className="skill-title">C++</h3>
              <p className="skill-description">Object-oriented programming and high-performance applications.</p>
            </div>
            <div className="skill-item">
              <img src={JavaIcon} alt="Java" className="skill-icon" />
              <h3 className="skill-title">Java</h3>
              <p className="skill-description">Cross-platform applications and backend development.</p>
            </div>
            <div className="skill-item">
              <img src={FigmaIcon} alt="Figma" className="skill-icon" />
              <h3 className="skill-title">Figma</h3>
              <p className="skill-description">UI/UX design, prototyping, and collaborative design tools.</p>
            </div>
            <div className="skill-item">
              <img src={CanvaIcon} alt="Canva" className="skill-icon" />
              <h3 className="skill-title">Canva</h3>
              <p className="skill-description">Quick graphics, presentations, and marketing materials.</p>
            </div>
            <div className="skill-item">
              <img src={WordpressIcon} alt="Wordpress" className="skill-icon" />
              <h3 className="skill-title">Wordpress</h3>
              <p className="skill-description">Website development, CMS management, and themes/plugins.</p>
            </div>
            <div className="skill-item">
              <img src={UnityIcon} alt="Unity" className="skill-icon" />
              <h3 className="skill-title">Unity</h3>
              <p className="skill-description">Game development, 3D simulations, and interactive experiences.</p>
            </div>
            <div className="skill-item">
              <img src={UEIcon} alt="Unreal Engine" className="skill-icon" />
              <h3 className="skill-title">Unreal Engine</h3>
              <p className="skill-description">High-fidelity 3D environments and immersive games.</p>
            </div>
            <div className="skill-item">
              <img src={PythonIcon} alt="Python" className="skill-icon" />
              <h3 className="skill-title">Python</h3>
              <p className="skill-description">Scripting, automation, data analysis, and backend development.</p>
            </div>
          </div>
        </section>

        <section className="center-text">
          <h1 className="text-big">Who I am</h1>
        </section>
         {/* Revolving Door Section */}
      <section className="revolving-door">
        <button className="arrow left" onClick={prevSlide}>&lt;</button>
        <div className="hobby-card">
          <img src={hobbies[index].icon} alt={hobbies[index].title} className="hobby-icon" />
          <h2>{hobbies[index].title}</h2>
          <p>{hobbies[index].description}</p>
        </div>
        <button className="arrow right" onClick={nextSlide}>&gt;</button>
      </section>
    </>
  );
}

export default About;