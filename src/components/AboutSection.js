import React from 'react';
import '../App.css';

const AboutSection = () => {
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
          <h2>About MSc Data Science Programme of 2023-25</h2>
          <p>The Master of Data Science (MDS) is a postgraduate program that combines computer science and statistics to foster proficiency in data-driven decision-making. It is a two-year course comprising six trimesters.</p>
          <p>This programme aims to provide opportunity to all candidates to master the skill sets specific to data science with research bent. The curriculum supports the students to obtain adequate knowledge in theory of data science with hands on experience in relevant domains and tools. Candidate gains exposure to research models and industry standard applications in data science through guest lectures, seminars, projects, internships, etc.</p>
        </div>

        <div className="about-item">
          <div className="icon"><i className="fas fa-briefcase"></i></div>
          <h2>Industry Connect</h2>
          <div className="industry-slider">
            <div className="industry-slide">
              <img src="assets/inheritance1.jpg" alt="Industry Image 1" />
              <div className="slide-description">
                <h3>Inheritance</h3>
                <p>A mentorship scheme aimed at fostering students to imbibe exposure to the industry and for bridging the gap between corporate and academia.</p>
              </div>
            </div>

            <div className="industry-slide">
              <img src="assets/Pragati1.jpg" alt="Industry Image 2" />
              <div className="slide-description">
                <h3>Pragati Path to future</h3>
                <p>An exclusive program designed especially for women for career development.</p>
              </div>
            </div>

            <div className="industry-slide">
              <img src="assets/Workshop.jpeg" alt="Industry Image 3" />
              <div className="slide-description">
                <h3>Workshops</h3>
                <p>We invite industry professionals to conduct workshops on various tools and technologies that are widely used in the industries.</p>
              </div>
            </div>

            <div className="industry-slider-controls">
              <span className="prev">&#10094;</span>
              <span className="next">&#10095;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
