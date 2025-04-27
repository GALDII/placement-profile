import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../App.css';

const StudentProfiles = () => {
  // State to hold the search query and filtered profiles
  const [searchQuery, setSearchQuery] = useState('');
  
  // All the profiles (You can fetch these from your backend, but for now, it's hardcoded)
  const profiles = [
    {
      name: 'Swetha S',
      specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)',
      skills: 'Python, SQL, Problem solving',
      github: 'https://github.com/GALDII',
      linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
      photo: '/assets/swetha_ps.jpg',
    },
    {
      name: 'Gladis Sam Prakash S',
      specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)',
      skills: 'Python, SQL, Problem solving',
      github: 'https://github.com/GALDII',
      linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
      portfolio: 'https://galdii.github.io/portfolio/gladis_profile.html',
      photo: '/assets/gladis_ps.jpeg',
    },
    {
      name: 'Jaisree M.K',
      specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)',
      skills: 'Python, SQL, Problem solving',
      github: 'https://github.com/GALDII',
      linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
      photo: '/assets/jaisree_ps.jpeg',
    },
    {
      name: 'Madhumitha P',
      specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)',
      skills: 'Python, SQL, Problem solving',
      github: 'https://github.com/GALDII',
      linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
      photo: '/assets/madhu_ps.jpg',
    },
    {
      name: 'Kiran Guruv',
      specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML)',
      skills: 'Python, SQL, Problem solving',
      github: 'https://github.com/GALDII',
      linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
      photo: '/assets/kiran_ps.jpeg',
    },
    {
      name: 'Sidharth',
      specialization: 'Data Science,  Statistics, Machine Learning(ML)',
      skills: 'Python, SQL, Problem solving',
      github: 'https://github.com/GALDII',
      linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
      photo: '/assets/sidharth_ps.jpeg',
    },
    
  ];

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter(profile => {
    const query = searchQuery.toLowerCase();
    return (
      profile.name.toLowerCase().includes(query) ||
      profile.specialization.toLowerCase().includes(query) ||
      profile.skills.toLowerCase().includes(query)
    );
  });

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div id="student-profiles">
      <h1>Student Profiles</h1>
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search by name, specialization, skills..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button id="search-button"><i className="fas fa-search"></i></button>
      </div>
      <div id="profiles-container" className="profiles-container">
        {filteredProfiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <img src={process.env.PUBLIC_URL + profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.specialization}</p>
            <p className="skills">Skills: {profile.skills}</p>
            <div className="social-media">
              <a href={profile.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              {profile.portfolio && (
                <a href={profile.portfolio} target="_blank" rel="noreferrer"><i className="fas fa-user"></i></a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProfiles;
