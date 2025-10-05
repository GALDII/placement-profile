import React, { useState } from 'react';
import '../App.css';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: process.env.PUBLIC_URL + '/assets/IEE_grp_pht.jpeg',
      alt: 'IEE Conference',
      text: 'IEE CONFERENCE: Volunters of the conference',
    },
    {
      src: process.env.PUBLIC_URL + '/assets/workshop2.jpeg',
      alt: 'Net-set Exam Awerness',
      text: 'Net-Set Exam: Awerness of net and Set exam ',
    },
    {
      src: process.env.PUBLIC_URL + '/assets/Workshop1.jpeg',
      alt: 'Net-set Exam Awerness',
      text: 'Net-Set Exam: Awerness of net and Set exam',
    },
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <section id="about">
      <h1>About the Program</h1>
      
      <div className="about-section">
        <div className="about-item">
          <div className="icon"><i className="fas fa-university"></i></div>
          <h2>About CHRIST University</h2>
          <p><strong>Vision:</strong> Excellence and Service</p>
          <p><strong>Mission:</strong> CHRIST (Deemed to be University) is a nurturing ground for an individual's holistic development to make effective contribution to the society in a dynamic environment.</p>
          <p><strong>Core Values:</strong></p>
          <ul>
            <li>Faith in God</li>
            <li>Moral Uprightness</li>
            <li>Love of Fellow Beings</li>
            <li>Social Responsibility</li>
            <li>Pursuit of Excellence</li>
          </ul>
        </div>

        <div className="about-item">
          <div className="icon"><i className="fas fa-school"></i></div>
          <h2>About the Bangalore Yeshwanthpur Campus</h2>
          <p>CHRIST Yeshwanthpur Campus is next to Dasrahalli/Nagasandra Metro Stations on Tumkur Road, 5 kms from Yeswanthpur Railway station, upholding the Vision, Excellence and Service Core Values, with innovative and contemporary curricula and pedagogy.</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-item">
          <div className="icon"><i className="fas fa-laptop-code"></i></div>
          <h2>About MSc Data Science Programme of 2024-26</h2>
          <p>The Master of Data Science (MDS) is a postgraduate program that combines computer science and statistics to foster proficiency in data-driven decision-making. It is a two-year course comprising six trimesters.</p>
          <p>This programme aims to provide opportunity to all candidates to master the skill sets specific to data science with research bent. The curriculum supports the students to obtain adequate knowledge in theory of data science with hands-on experience in relevant domains and tools. Candidates gain exposure to research models and industry standard applications in data science through guest lectures, seminars, projects, internships, etc.</p>
        </div>

        <div className="about-item">
          <div className="icon"><i className="fas fa-briefcase"></i></div>
          <h2>Industry Connect</h2>
          <div className="industry-slider">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`industry-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.src} alt={slide.alt} />
                <div className="slide-description">
                  <h3>{slide.text.split(":")[0]}</h3>
                  <p>{slide.text.split(":")[1]}</p>
                </div>
              </div>
            ))}
            <div className="industry-slider-controls">
              <span className="prev" onClick={() => changeSlide(-1)}>&#10094;</span>
              <span className="next" onClick={() => changeSlide(1)}>&#10095;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
