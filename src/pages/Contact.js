import React from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Navbar />
      <section className="section background">
        <div className="box-main">
          <div className="firsthalf">
            <h1 className="text-big">Contact Me</h1>
            <p className="text-small">
              Email: email@example.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;