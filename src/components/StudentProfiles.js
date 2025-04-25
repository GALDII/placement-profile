import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../App.css';

const StudentProfiles = () => {
  return (
    <div id="student-profiles">
      <h1>Student Profiles</h1>
      <div className="search-container">
        <input type="text" id="search-bar" placeholder="Search by name, specialization, skills..." />
        <button id="search-button"><i className="fas fa-search"></i></button>
      </div>
      <div id="profiles-container" className="profiles-container">

        <div className="profile-card" data-name="Swetha S" data-specialization="Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)" data-skills="Python, SQL, Power BI, R">
          <img src={process.env.PUBLIC_URL + '/assets/swetha_ps.jpg'} alt="Swetha S" />
          <h3>Swetha S</h3>
          <p>Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)</p>
          <p className="skills">Skills: Python, SQL, Problem solving</p>
          <div className="social-media">
            <a href="https://github.com/GALDII" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gladis-sam-3125b122a/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="profile-card" data-name="Gladis Sam Prakash S" data-specialization="Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)" data-skills="Python, SQL, Power BI, R">
          <img src={process.env.PUBLIC_URL + '/assets/gladis_ps.jpeg'} alt="Gladis Sam Prakash" />
          <h3>Gladis Sam Prakash S</h3>
          <p>Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)</p>
          <p className="skills">Skills: Python, SQL, Problem solving</p>
          <div className="social-media">
            <a href="https://github.com/GALDII" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gladis-sam-3125b122a/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://galdii.github.io/portfolio/gladis_profile.html" target="_blank"><i className="fas fa-user"></i></a>
          </div>
        </div>

        <div className="profile-card" data-name="Jaisree" data-specialization="Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)" data-skills="Python, SQL, Power BI, R">
          <img src={process.env.PUBLIC_URL + '/assets/jaisree_ps.jpeg'} alt="Jaisree" />
          <h3>Jaisree M.K</h3>
          <p>Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)</p>
          <p className="skills">Skills: Python, SQL, Problem solving</p>
          <div className="social-media">
            <a href="https://github.com/GALDII" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gladis-sam-3125b122a/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="profile-card" data-name="Madhumitha P" data-specialization="Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)" data-skills="Python, SQL, Power BI, R">
          <img src={process.env.PUBLIC_URL + '/assets/madhu_ps.jpg'} alt="Madhumitha P" />
          <h3>Madhumitha P</h3>
          <p>Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)</p>
          <p className="skills">Skills: Python, SQL, Problem solving</p>
          <div className="social-media">
            <a href="https://github.com/GALDII" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gladis-sam-3125b122a/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="profile-card" data-name="Gladis Sam Prakash S" data-specialization="Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)" data-skills="Python, SQL, Power BI, R">
          <img src={process.env.PUBLIC_URL + '/assets/kiran_ps.jpg'} alt="Kiran Guruv" />
          <h3>Kiran Guruv</h3>
          <p>Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)</p>
          <p className="skills">Skills: Python, SQL, Problem solving</p>
          <div className="social-media">
            <a href="https://github.com/GALDII" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/gladis-sam-3125b122a/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentProfiles;
