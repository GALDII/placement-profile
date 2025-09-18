import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../App.css';

const StudentProfiles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const profiles = [
  {
    name: 'Aishwary Singh Rathour',
    specialization: 'Generative AI',
    skills: 'Python, R, Transformers, Langchain, LangGraph, SQL, Problem-Solving, Explainable AI',
    github: 'https://github.com/Aishwary0402',
    linkedin: 'https://www.linkedin.com/in/aishwary-singh-rathour-4a9219256/',
  },
  {
    name: 'Annesha Naskar',
    specialization: 'Data Science, Machine Learning, Deep Learning',
    skills: 'Python, Java, SQL, Tableau, Problem-Solving, Analytical Skills, Teamwork',
    github: 'https://github.com/ann-works',
    linkedin: 'https://www.linkedin.com/in/annesha-n-00aa63319',
  },
  {
    name: 'Anusha P K',
    specialization: 'Data Science, Machine Learning, Artificial Intelligence, Data Analytics',
    skills: 'Python, SQL, PowerBI, R programming',
    github: 'https://github.com/Anusha-O',
    linkedin: 'https://www.linkedin.com/in/anusha-p-k-808baa1b7',
  },
  {
    name: 'Anwesa Bharasa',
    specialization: 'Data Science, Machine Learning (ML), Deep Learning (DL), Artificial Intelligence (AI)',
    skills: 'Python, SQL, R Programming, Excel, Power BI, Tableau, Mathematics and Statistical Analysis, Problem-Solving',
    github: 'https://github.com/AnwesaBharasa',
    linkedin: 'https://www.linkedin.com/in/anwesa-bharasa-5949672a8/',
  },
  {
    name: 'Bhavya Sree S',
    specialization: 'Natural Language Processing (NLP), Machine Learning (ML), Deep Learning, Data Analytics',
    skills: 'Python, SQL, Transformer Models, Java, Flask, HTML/CSS, Problem Solving',
    github: 'https://github.com/Bhavya-11-sree',
    linkedin: 'https://www.linkedin.com/in/bhavya-sree-s-7a453832b/',
  },
  {
    name: 'Bobade Kishor Sudarshan',
    specialization: 'Machine learning, Deep learning, Python developer',
    skills: 'Python, Java, C, Database Management System',
    github: 'https://github.com/KishorBobade',
    linkedin: 'https://www.linkedin.com/in/kishor-patil-9514ab26a/',
  },
  {
    name: 'Chittesh K',
    specialization: 'Data Analytics, Machine Learning, Geo Spatial Analysis, IoT',
    skills: 'Python, SQL, Data Analysis & Visualization tools, R, Tableau, Power BI, Problem-Solving',
    github: 'https://github.com/Chittesh2324',
    linkedin: 'https://www.linkedin.com/in/chittesh-karthikeyan-6aba4023b/',
  },
  {
    name: 'Ciya K J',
    specialization: 'Data Science, Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (DL)',
    skills: 'Python, R, SQL, Data Visualization',
    github: 'https://github.com/Ciyakj',
    linkedin: 'https://www.linkedin.com/in/ciya-k-j-411224264',
  },
  {
    name: 'Febin T Nabeel',
    specialization: 'Data analytics',
    skills: 'Python, SQL, Problem Solving',
    github: 'https://github.com/Febin1004',
    linkedin: 'https://www.linkedin.com/in/febin-t-nabeel-a50222274/',
  },
  {
    name: 'George Jose',
    specialization: 'Machine learning, Deep learning, NLP, Computer vision, IoT, Data analysis',
    skills: 'Python, JavaScript, HTML, CSS, SQL, DBMS',
    github: 'https://github.com/georgejose055',
    linkedin: 'http://www.linkedin.com/in/george-jose-114077235',
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
    name: 'Harsha K',
    specialization: 'Web Development and Data-Driven Applications',
    skills: 'Python, JavaScript, Flask, HTML, SQL',
    github: 'https://github.com/Harsha-k04',
    linkedin: 'https://www.linkedin.com/in/harsha-k-98a6222ba/',
  },
  {
    name: 'J Mannavan',
    specialization: 'Data Science, Deep Learning, Reinforcement Learning',
    skills: 'Management, Critical Thinking, Python',
    github: 'https://github.com/Mann-04',
    linkedin: 'https://www.linkedin.com/in/mannavan-j-63821b220/',
  },
  {
    name: 'Jaisree M K',
    specialization: 'Machine Learning, Deep Learning, Gen AI, Data Analytics',
    skills: 'Python, SQL, R, Excel, Power BI, Tableau, Logical Thinking and Problem Solving',
    github: 'https://github.com/JaisreeMK-15',
    linkedin: 'https://www.linkedin.com/in/jaisree-m-k-405687270',
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
    name: 'Jaya Mary Jennifer D',
    specialization: 'Data Analytics, AI, ML, Digital Marketing, Web Development & SEO',
    skills: 'Python, HTML/CSS, JavaScript, MySQL, Power BI, Data Cleaning, Wrangling, Visualization, A/B Testing, Campaign Analysis',
    github: 'https://github.com/JENNIFERJD',
    linkedin: 'https://www.linkedin.com/in/jaya-mary-jennifer-d',
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
    name: 'Madhumitha P',
    specialization: 'Machine Learning, Deep Learning, Data Science, Generative AI, Large Language Models, Data Analytics',
    skills: 'Python, Problem solving, Mathematics, Statistics, Scikit-learn, TensorFlow, Deep learning, EDA',
    github: 'https://github.com/MadhuP18',
    linkedin: 'https://www.linkedin.com/in/madhumitha-p1811/',
  },
  {
    name: 'Mohammed Hanees M',
    specialization: 'Data Analytics, AI, ML, Deep Learning & Computer Vision, NLP',
    skills: 'Python, SQL, TensorFlow/PyTorch, Big Data (Spark/Hadoop), Problem Solving',
    github: 'https://github.com/Mohammed-Hanees-M?tab=followers',
    linkedin: 'https://www.linkedin.com/in/mohammed-hanees-m-696040277/',
  },
  {
    name: 'Priangshu Paul',
    specialization: 'Computer Vision, Generative AI, Graph Neural Networks',
    skills: 'Python, PyTorch, HF Transformers',
    github: 'https://github.com/priangshu17',
    linkedin: 'https://www.linkedin.com/in/priangshu-paul/',
  },
  {
    name: 'Priyanka K',
    specialization: 'Datascience, Data Analytics, Artificial Intelligence (AI)',
    skills: 'Python, R, SQL, Machine Learning, Deep Learning (CNN, RNN, Transfer Learning), Data Visualization, NLP, Big Data',
    github: 'https://github.com/priyankakadirvel',
    linkedin: 'https://www.linkedin.com/in/priyanka-k-02a602317',
  },
  {
    name: 'Saranya M',
    specialization: 'Data Analytics, Mathematics, Statistics',
    skills: 'Machine Learning, Problem Solving, Deep Learning, Python, SQL, Flask',
    github: 'https://github.com/saranya-myrepository',
    linkedin: 'https://www.linkedin.com/in/saranya-m-431967223/',
  },
  {
    name: 'Shrutika Gupta',
    specialization: 'Data Science, Machine Learning (ML), Deep Learning (DL), Generative AI (GenAI)',
    skills: 'Python, R, SQL, ML/DL, GenAI, Statistical Analysis, Data Visualization',
    github: 'https://github.com/Shrutika217',
    linkedin: 'https://www.linkedin.com/in/shrutika-gupta-687b55243/',
  },
  {
    name: 'Sidharth',
    specialization: 'Data Science,  Statistics, Machine Learning(ML)',
    skills: 'Python, SQL, Problem solving',
    github: 'https://github.com/GALDII',
    linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
    photo: '/assets/sidharth_ps.jpeg',
  },
  {
    name: 'Sineha Manjary R.',
    specialization: 'Data Science, Machine learning, Deep learning, Web Developer',
    skills: 'Python, SQL, Problem solving, Data Structure',
    github: 'https://github.com/SinehaManjary28',
    linkedin: 'https://www.linkedin.com/in/sineha-manjary',
  },
  {
    name: 'Shoaib',
    specialization: 'Data Scientist, Artificial Intelligence, Machine Learning',
    skills: 'Python, SQL, R, Tableau, Power BI',
    github: 'https://github.com/Shoaib-1302',
    linkedin: 'https://www.linkedin.com/in/shoaib-461136222',
  },
  {
    name: 'S Swetha',
    specialization: 'AI, ML, DL, NLP, GenAI, Data Mining',
    skills: 'Python, Java, Communication, SQL',
    github: 'https://github.com/GALDII',
    linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
    photo: '/assets/swetha_ps.jpg',
  },
  {
    name: 'Swapnil Roy',
    specialization: 'Artificial Intelligence, Explainable AI, Machine Learning',
    skills: 'Python, R, TensorFlow, SQL, PySpark',
    github: 'https://github.com/S-T-R-A-N-G-E-R',
    linkedin: 'https://www.linkedin.com/in/swapnilroy001/',
  }
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
