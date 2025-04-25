import React from 'react';
import '../App.css';

const Navbar = () => {
  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/assets/brochure.pdf';
    link.download = 'Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/assets/CHRIST_WHITE.png'} alt="University Logo" />
        

      </div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#student-profiles">Student Profiles</a></li>
        <li><a href="#recruiters">Persistent Recruiters</a></li>
        <li><a href="#contact-details">Contact Us</a></li>
      </ul>

      <div className="actions">
        <button
          onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfauKOD_OG6dGXZl8W0ibNs0Xl5YplXIrIheyMHmPIgHLomCA/viewform?usp=sf_link'}>
          Recruit Students
        </button>
        <button onClick={downloadBrochure}>Download Brochure</button>
      </div>
    </nav>
  );
};

export default Navbar;