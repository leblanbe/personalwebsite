import React from 'react';
import Navbar from '../components/Navbar';
import './Portfolio.css';
import '../App.css'
import CoreCommerceLogo from '../assets/corecommerce-logo.png';
import IronGalaxyLogo from '../assets/IGLogo.png';
import VanderbiltLogo from '../assets/Vanderbilt-logo.png';
import logo from '../assets/websitelogo.png';

function Portfolio() {
  return (
    <>
      <Navbar />
      <section className="center-text">
          <h1 className="text-big-portfolio">Experience and Projects</h1>
      </section>

      {/* --- CoreCommerce Experience --- */}
      <section className="experience-section">
        <div className="firsthalf">
          <img src={CoreCommerceLogo} alt="Core Commerce Logo" className="cc-logo" />
        </div>
        <div className="secondhalf">
          <h2 className="experience-title">Frontend Design & Development Intern</h2>
          <p className="experience-description">
            During my internship at CoreCommerce, I had the opportunity to shape the look 
            and feel of a growing e-commerce platform. I designed responsive web interfaces 
            and interactive prototypes in Figma, translating stakeholder requirements into clear, 
            user-centered layouts. Much of my work focused on creating a scalable design system that 
            could adapt across new features and client needs. To ensure those designs worked in practice, 
            I ran A/B usability tests and analyzed clickstream data to understand where users encountered 
            friction. Those insights guided several key redesigns that streamlined the client onboarding 
            process and simplified dashboard navigation, ultimately making the platform easier and more 
            intuitive to use.
          </p>
        </div>
      </section>

      {/* --- Iron Galaxy Experience --- */}
      <section className="experience-section">
        <div className="firsthalf">
          <img src={IronGalaxyLogo} alt="Iron Galaxy Logo" className="cc-logo" />
        </div>
        <div className="secondhalf">
          <h2 className="experience-title">Game Development Intern</h2>
          <p className="experience-description">
            At Iron Galaxy Studios, I worked on a mix of gameplay systems and UI 
            design that deepened my understanding of how creative ideas become 
            interactive experiences. I scoped, designed, and implemented gameplay 
            mechanics and UI systems in Unreal Engine 4 (C++), building features like 
            dynamic entity spawning, player interaction logic, and real-time HUD updates 
            driven by in-game events. I also developed AI-driven NPC behavior trees and 
            adaptive map logic, allowing enemies and environments to respond dynamically 
            to player actions.Outside Unreal, I challenged myself by engineering a custom 
            2D side-scroller entirely in assembly language—writing everything from the game 
            loop and sprite rendering to collision detection and hardware-level debugging. 
            Throughout these projects, I collaborated with artists and engineers using Perforce 
            for version control and Confluence for documentation, ensuring that assets and code 
            integrated seamlessly within each agile sprint.
          </p>
        </div>
      </section>

      {/* --- Vanderbilt Experience --- */}
      <section className="experience-section">
        <div className="firsthalf">
          <img src={VanderbiltLogo} alt="Vanderbilt Logo" className="cc-logo" />
        </div>
        <div className="secondhalf">
          <h2 className="experience-title">Housing Portal Redesign Project</h2>
          <p className="experience-description">
            When I first started working on my senior year project class, I noticed students who experienced the same
             frustration with the housing portal that I felt — that the roommate matching system didn’t reflect their preferences,
             and the process of choosing a room felt blind. People wanted to see what their space would actually
              be like before committing. So my team and I decided to redesign the housing portal from the ground up using
               HTML, CSS, and JavaScript, to give it a cleaner, more intuitive interface with accessible features. On
              the backend, I rebuilt the roommate-matching algorithm innPython, using historical data and user preferences
               to make matches that felt more personal and accurate. To make the experience more transparent, I also integrated 
               sample 3D room models from dorms across campus that were created with Polycam, so students could explore
                layouts in detail. We also added an in-platform messaging system that allowed them to connect directly 
                with potential roommates. By the end, the platform didn’t just look better — it felt more human and
                 gave students a sense of agency in one of the most important parts of campus life.
          </p>
        </div>
      </section>
      <section className="experience-section">
        <div className="firsthalf">
          <img src={VanderbiltLogo} alt="Vanderbilt Logo" className="cc-logo" />
        </div>
        <div className="secondhalf">
          <h2 className="experience-title">Virtual Reality Project</h2>
          <p className="experience-description">
            The project began in a Virtual Reality course I took during my junior year at Vanderbilt.
             What started as a simple cat and mouse game idea quickly evolved into a fully immersive
              VR chase experience built in Unity, designed to capture the tension and excitement of 
              pursuit. As our concept grew in complexity, I stepped into the role of Scrum Master, 
              coordinating our development cycles, assigning tasks, and running sprint reviews to keep
               the team on track. On the technical side, I implemented dynamic player tracking, spatial
                audio, and motion-based input controls that responded to subtle headset tilts, creating
                 a sense of presence and urgency within the game. I also developed physics-based object
                  interactions and optimized rendering pipelines to ensure smooth performance across multiple
                   VR devices. The result was a polished, high-performance experience that felt both responsive
                    and immersive. When we presented the final build at the Vanderbilt 40 AU Immersion Showcase,
                     our project earned first place, a recognition that reflected both the technical depth and
                      creative collaboration that defined the process from start to finish.

          </p>
        </div>
      </section>
      <section className="experience-section">
        <div className="firsthalf">
          <img src={logo} alt="Website Logo" className="cc-logo" />
        </div>
        <div className="secondhalf">
          <h2 className="experience-title">Personal Website</h2>
          <p className="experience-description">
            The idea to create my own website began as a project to help me stand out during
             my job search, but it quickly became something I genuinely enjoyed building and
              refining. While I’d previously designed sites for other purposes, this was my
               first personal portfolio, so I spent time defining the site’s visual identity
                and overall user experience. From a technical standpoint, the site is built
                 with React to handle component-based rendering, JavaScript for interactivity
                  and logic, and CSS for responsive layout and design consistency. I focused
                   on building clean, reusable components and ensuring accessibility across
                    different screen sizes. You can view the complete source code on my github:
                     https://github.com/leblanbe

          </p>
        </div>
      </section>




    </>
  );
}

export default Portfolio;