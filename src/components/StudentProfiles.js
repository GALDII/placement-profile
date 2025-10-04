import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../App.css';

const StudentProfiles = () => {
  const [searchQuery, setSearchQuery] = useState('');
const profiles = [
  {
    name: 'Aishwary Singh Rathour',
    specialization: 'Generative AI',
    skills: 'Python, R, Transformers, Langchain, LangGraph, SQL, Problem-Solving, Explanable AI (XAI)',
    github: 'https://github.com/Aishwary0402',
    linkedin: 'https://www.linkedin.com/in/aishwary-singh-rathour-4a9219256/',
    photo: '/assets/aishwary-singh-rathour.jpg'
  },
  {
    name: 'Amruthavarshini Sumanohar',
    specialization: 'Data Analytics, Machine Learning(ML)',
    skills: 'Python, PowerBI, Data Visualization, Data Storytelling, Problem Solving',
    github: 'https://github.com/revelation3',
    linkedin: 'https://www.linkedin.com/in/amruthavarshini-sumanohar-b0922b27a/',
    photo: '/assets/amruthavarshini-sumanohar.jpg'
  },
  {
    name: 'Anna Vinod',
    specialization: 'MSc Data Science',
    skills: 'Python, R programming, MySql, HTML, CSS, JavaScript, Java, DBMS, Analytical and Logical Reasoning, Problem Solving, ML, DL',
    github: 'https://github.com/annavinod',
    linkedin: 'https://www.linkedin.com/in/anna-vinod-9141b5255',
    photo: '/assets/anna-vinod.JPG'
  },
  {
    name: 'Annesha Naskar',
    specialization: 'Data Science, Machine Learning, Deep Learning',
    skills: 'Python, Java, SQL, Tableau, Problem-Solving, Analytical Skills, Teamwork',
    github: 'https://github.com/ann-works',
    linkedin: 'https://www.linkedin.com/in/annesha-n-00aa63319',
    photo: '/assets/annesha-naskar.jpg'
  },
  {
    name: 'Anshul Joshi',
    specialization: 'Data Science',
    skills: 'Data Science, Machine Learning, Deep Learning, AI, SQL, TensorFlow, Streamlit, QGis, Git, RAG, Transformers, LLM',
    github: 'https://github.com/anshul009-18',
    linkedin: 'https://www.linkedin.com/in/anshul-joshi-767739199/',
    photo: '/assets/Anshul-Joshi.jpg'
  },
  {
    name: 'Anusha P K',
    specialization: 'Data Science, Machine Learning, Artificial Intelligence, Data Analytics',
    skills: 'Python, SQL, PowerBI, R programming',
    github: 'https://github.com/Anusha-O',
    linkedin: 'https://www.linkedin.com/in/anusha-p-k-808baa1b7',
    photo: '/assets/anusha-pk.jpg'
  },
  {
    name: 'Anwesa Bharasa',
    specialization: 'Data Science, Machine Learning(ML), Deep Learning(DL), Artificial Intelligence(AI)',
    skills: 'Python, SQL, R Programming, Excel, Power BI, Tableau, Mathematics and Statistical Analysis, Problem-Solving, Critical Thinking, Time Management',
    github: 'https://github.com/AnwesaBharasa',
    linkedin: 'https://www.linkedin.com/in/anwesa-bharasa-5949672a8/',
    photo: '/assets/anwesa-bharasa.jpg'
  },
  {
    name: 'Aparna Mathew',
    specialization: 'ML, DL, Web Development',
    skills: 'Python, HTML, SQL, Critical Thinking, Problem Solving',
    github: 'https://github.com/Aparna-26-02',
    linkedin: 'https://www.linkedin.com/in/aparna-mathew/',
    photo: '/assets/aparna-mathew.jpg'
  },
  {
    name: 'Bhargav Reddy K',
    specialization: 'MSC DATA SCIENCE',
    skills: 'Python, SQL, Tableau, R, SQL, ML(Model building), AI',
    github: 'https://github.com/Bull9016',
    linkedin: 'https://www.linkedin.com/in/bhargav-reddy-k-71829121b',
    photo: '/assets/bhargav-reddy.jpg'
  },
  {
    name: 'Bhavya Sree S',
    specialization: 'Natural Language Processing(NLP), Machine Learning(ML), Deep Learning, Data Analytics',
    skills: 'Python, SQL, Transformer Models, Java, Flask, HTML/CSS, Problem Solving',
    github: 'https://github.com/Bhavya-11-sree',
    linkedin: 'https://www.linkedin.com/in/bhavya-sree-s-7a453832b/',
    photo: '/assets/bhavya-sree.jpg'
  },
  {
    name: 'Bobade Kishor Sudarshan',
    specialization: 'Machine learning, Deep learning, Python developer',
    skills: 'Python, Java, C, Database Management System',
    github: 'https://github.com/KishorBobade',
    linkedin: 'https://www.linkedin.com/in/kishor-patil-9514ab26a/',
    photo: '/assets/bobade-kishor.jpg'
  },
  {
    name: 'Chilakapati Yashwanth',
    specialization: 'Data Analytics, Machine Learning, Deep Learning, Natural Language Processing',
    skills: 'Python, R, SQL, NoSQL, Excel, Data Visualization, Data Cleaning, Problem Solving, Communication',
    github: 'https://github.com/chilakapatiyashwanth03-max',
    linkedin: 'https://www.linkedin.com/in/yashwanth-chilakapati-bb40ba242/',
    photo: '/assets/chilakapati-yashwanth.JPG'
  },
  {
    name: 'Chittesh K',
    specialization: 'Data Analytics, Machine Learning, Geo Spatial Analysis, IOT',
    skills: 'Python, SQL, Data Analysis & Visualization tools, R, Tableau, Power BI, Problem-Solving',
    github: 'https://github.com/Chittesh2324',
    linkedin: 'https://www.linkedin.com/in/chittesh-karthikeyan-6aba4023b/',
    photo: '/assets/chittesh-k.jpg'
  },
  {
    name: 'Ciya K J',
    specialization: 'Data Science, Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (DL)',
    skills: 'Python, R, SQL, Data Visualization, Java, CSS, Problem Solving',
    github: 'https://github.com/Ciyakj',
    linkedin: 'https://www.linkedin.com/in/ciya-k-j-411224264',
    photo: '/assets/ciya-kj.jpg'
  },
  {
    name: 'Febin T Nabeel',
    specialization: 'Data Analytics',
    skills: 'Python, SQL, Problem Solving',
    github: 'https://github.com/Febin1004',
    linkedin: 'https://www.linkedin.com/in/febin-t-nabeel-a50222274/',
    photo: '/assets/febin-nabeel.jpg'
  },
  {
    name: 'Gaayathri M',
    specialization: 'Artificial Intelligence (AI), Deep Learning (DL)',
    skills: 'SQL, Python, Data Visualisation',
    github: 'https://github.com/Gaayathri03',
    linkedin: 'https://www.linkedin.com/in/gaayathri-murugesan',
    photo: '/assets/gaayathri-m.jpg'
  },
  {
    name: 'George Jose',
    specialization: 'Machine learning, Deep learning, NLP, Computer vision, IoT, Data analysis',
    skills: 'Python, JavaScript, HTML, CSS, SQL, DBMS',
    github: 'https://github.com/georgejose055',
    linkedin: 'http://www.linkedin.com/in/george-jose-114077235',
    photo: '/assets/george-jose.jpg'
  },
  {
    name: 'Harsha K',
    specialization: 'Web Development and Data-Driven Applications',
    skills: 'Python, JavaScript, Flask, HTML, SQL',
    github: 'https://github.com/Harsha-k04',
    linkedin: 'https://www.linkedin.com/in/harsha-k-98a6222ba/',
    photo: '/assets/harsha-k.jpg'
  },
  {
    name: 'Harshitha S',
    specialization: 'Data Science, Machine Learning, Artificial Intelligence',
    skills: 'Python, SQL, Power BI, Tableau',
    github: 'https://github.com/Harshitha-Shekar',
    linkedin: 'https://www.linkedin.com/in/harshitha-s25/',
    photo: '/assets/harshitha-s.JPG'
  },
  {
    name: 'J Mannavan',
    specialization: 'Data Science, Deep Learning, Reinforcement Learning',
    skills: 'Management, Critical Thinking, Python',
    github: 'https://github.com/Mann-04',
    linkedin: 'https://www.linkedin.com/in/mannavan-j-63821b220/',
    photo: '/assets/j-mannavan.JPG'
  },
  {
    name: 'Jaisree M K',
    specialization: 'Machine Learning, Deep Learning, Gen AI, Data Analytics',
    skills: 'Python, SQL, R, Excel, Power BI, Tableau, Logical Thinking and Problem Solving',
    github: 'https://github.com/JaisreeMK-15',
    linkedin: 'www.linkedin.com/in/jaisree-m-k-405687270',
    photo: '/assets/jaisree-mk.jpg'
  },
  {
    name: 'Jenet Shirely J',
    specialization: 'Machine Learning (ML),Deep Learning (DL)',
    skills: 'Python, SQL, JAVA',
    github: 'https://github.com/Jenet-Shirely',
    linkedin: 'www.linkedin.com/in/jenetshirelyj',
    photo: '/assets/jenet-shirely.JPG'
  },
  {
    name: 'Jaya Mary Jennifer D',
    specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML), Digital Marketing, Web Development & SEO Enthusiast, Creative Campaign Strategist & Content Manager',
    skills: 'Python, HTML/CSS, JavaScript, MySQL, Power BI, Data Cleaning, Data Wrangling, Data Visualization, A/B Testing, Campaign Performance Analysis, Meta Ads Reporting, ROI Optimization, Insight Generation',
    github: 'https://github.com/JENNIFERJD',
    linkedin: 'https://www.linkedin.com/in/jaya-mary-jennifer-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    photo: '/assets/jaya-mary-jennifer.JPG'
  },
  {
    name: 'Jestin Thomas',
    specialization: 'Data Analytics, Deep Learning(DL), Machine Learning(ML)',
    skills: 'Python, SQL, Java, R, C++, Cyber security, problem solving, Critical thinking, HTML, CSS',
    github: 'https://github.com/Jestin1507',
    linkedin: 'http://www.linkedin.com/in/jestin-thomas-90a109317',
    photo: '/assets/jestin-thomas.JPG'
  },
  {
    name: 'Karthik P',
    specialization: 'Machine Learning, Deep Learning, Data Analytics and Visualization, Artificial Intelligence',
    skills: 'Python, SQL and NoSQL, MERN Stack Development, JavaScript, Java',
    github: 'https://github.com/karper8',
    linkedin: 'http://linkedin.com/in/karper8',
    photo: '/assets/karthik-p.jpg'
  },
  {
    name: 'Karyamsetty Prajwala',
    specialization: 'ML, Web Technology, Data Science',
    skills: 'Python, HTML, CSS, Data Structures',
    github: 'https://github.com/Karyamsetty-Prajwala',
    linkedin: 'https://www.linkedin.com/in/karyamsetty-prajwala-7944252a0/',
    photo: '/assets/karyamsetty-prajwala.jpg'
  },
  {
    name: 'Lena Merin Viju',
    specialization: 'Data Science',
    skills: 'Python, SQL',
    github: 'https://github.com/LenaM2003',
    linkedin: 'https://www.linkedin.com/in/lena-merin-viju-a1544031a/',
    photo: '/assets/lena-merin-viju.jpg'
  },
  {
    name: 'Maansi Tomer',
    specialization: 'Data Science',
    skills: 'Pandas, SQL, Data Cleaning, Modeling & Analytics, Machine Learning, Power BI, Deep Learning',
    github: 'https://github.com/Maansitomer',
    linkedin: 'https://www.linkedin.com/in/maansi-tomer-52b262229/',
    photo: '/assets/maansi-tomer.png'
  },
  {
    name: 'Madhumitha P',
    specialization: 'Machine Learning, Deep Learning, Data Science, Generative AI, Large Language Models, Data Analytics',
    skills: 'Python, Problem solving, Mathematics, Statistics, Scikit-learn, TensorFlow, Machine Learning, Deep learning, EDA',
    github: 'https://github.com/MadhuP18',
    linkedin: 'https://www.linkedin.com/in/madhumitha-p1811/',
    photo: '/assets/madhumitha-p.jpg'
  },
  {
    name: 'Madhupa Vinod',
    specialization: 'ML, DL, Web Development, Data Analysis',
    skills: 'Python, SQL, HTML, Critical Thinking, Problem Solving, Communication',
    github: 'https://github.com/madhupa2000',
    linkedin: 'https://www.linkedin.com/in/madhupa-vinod-64b467210/',
    photo: '/assets/madhupa-vinod.jpg'
  },
  {
    name: 'Mohammed Hanees M',
    specialization: 'Data Analytics, Artificial Intelligence (AI), Machine Learning (ML), Deep Learning & Computer Vision, Natural Language Processing (NLP)',
    skills: 'Python, SQL, TensorFlow/PyTorch, Big Data (Spark/Hadoop), Problem Solving',
    github: 'https://github.com/Mohammed-Hanees-M?tab=followers',
    linkedin: 'https://www.linkedin.com/in/mohammed-hanees-m-696040277/',
    photo: '/assets/mohammed-hanees.jpg'
  },
  {
    name: 'Nayanaa Ajith',
    specialization: 'Web Development, Data Analysis, Machine Learning',
    skills: 'Python, HTML, Java, MySQL, Flask, Communication, Problem-Solving',
    github: 'https://github.com/Nayanaa-Ajith',
    linkedin: 'www.linkedin.com/in/nayanaa-ajith-482969313',
    photo: '/assets/nayanaa-ajith.jpg'
  },
  {
    name: 'Parameswaran A',
    specialization: 'Machine Learning, Deep Learning, Computer Vision, Generative AI, Data Analytics',
    skills: 'Python, R, SQL, JavaScript, ML/DL (Scikit-learn, PyTorch, TensorFlow, Keras, Hugging Face, YOLO), Data Analytics (Pandas, Numpy, Matplotlib, Seaborn, EDA), Web Development (Node.js, Express.js, Flask, MongoDB, REST APIs), Git/GitHub',
    github: 'https://github.com/Paramesh21',
    linkedin: 'https://www.linkedin.com/in/parameswaran-a-39691b227',
    photo: '/assets/parameswaran-a.jpg'
  },
  {
    name: 'Prathana Sharma',
    specialization: 'Machine Learning, Deep Learning, Data Analysis',
    skills: 'Python, SQL, Java, GenAI',
    github: 'https://github.com/prathana-192',
    linkedin: 'https://www.linkedin.com/in/prathana-sharma-1622721b5/',
    photo: '/assets/prathana-sharma.JPG'
  },
  {
    name: 'Priangshu Paul',
    specialization: 'Computer Vision, Generative AI, Graph Neural Networks',
    skills: 'Python, PyTorch, HF Transformers',
    github: 'https://github.com/priangshu17',
    linkedin: 'https://www.linkedin.com/in/priangshu-paul/',
    photo: '/assets/priangshu-paul.jpg'
  },
  {
    name: 'Priyanka K',
    specialization: 'Data Science, Data Analytics, Artificial Intelligence (AI)',
    skills: 'Python, R, SQL, Machine Learning, Deep Learning (CNN, RNN, Transfer Learning), Data Visualization (Power BI, Matplotlib, Seaborn), NLP, Big Data (Hadoop, Spark), Problem Solving, Research & Analysis',
    github: 'https://github.com/priyankakadirvel',
    linkedin: 'https://www.linkedin.com/in/priyanka-k-02a602317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    photo: '/assets/priyanka-k.jpg'
  },
  {
    name: 'Rupsha Das',
    specialization: 'Data Science, Machine Learning, Artificial Intelligence, Statistics, Data Analysis',
    skills: 'Python, SQL, R',
    github: 'https://github.com/Rupsha2003',
    linkedin: 'https://www.linkedin.com/in/rupsha-das-52101b2a6/',
    photo: '/assets/rupsha-das.jpg'
  },
  {
    name: 'S GLADIS SAM PRAKASH',
    specialization: 'Data Science',
    skills: 'React JS, Node JS, Full Stack Development',
    github: 'https://github.com/GALDII',
    linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
    photo: '/assets/gladis-sam.jpg'
  },
  {
    name: 'Saikat Maity',
    specialization: 'Statistics, Machine Learning, UI-UX Design',
    skills: 'Python, SQL, Analytical Thinking',
    github: 'https://github.com/saikatmaity13',
    linkedin: 'https://www.linkedin.com/in/saikat-maity/',
    photo: '/assets/saikat-maity.jpg'
  },
  {
    name: 'Samiksha Sandeep Zokande',
    specialization: 'Machine Learning, Deep Learning, Data Structures & Algorithms',
    skills: 'Python, SQL, PowerBI, Generative AI, Inferential Statistics, Time Series Forecasting, Predictive Modeling, TensorFlow, PyTorch, OpenCV, Problem Solving, Critical Thinking, Adaptability',
    github: 'https://github.com/Samiksha29-git',
    linkedin: 'https://www.linkedin.com/in/samiksha-zokande/',
    photo: '/assets/samiksha-zokande.JPG'
  },
  {
    name: 'Saranya M',
    specialization: 'Data Analytics, Mathematics, Statistics',
    skills: 'Machine Learning, Problem Solving, Deep Learning, Python, SQL, Flask',
    github: 'https://github.com/saranya-myrepository',
    linkedin: 'https://www.linkedin.com/in/saranya-m-431967223/',
    photo: '/assets/saranya-m.jpg'
  },
  {
    name: 'Satvika S S',
    specialization: 'Data Analytics, Machine Learning, Database Management, Computer Vision',
    skills: 'Python, SQL, Power BI, Streamlit, OpenCV',
    github: 'https://github.com/SatvikaSS',
    linkedin: 'www.linkedin.com/in/satvika-s-s-766821249',
    photo: '/assets/satvika-ss.JPG'
  },
  {
    name: 'U Sidharth',
    specialization: 'Data Science, Machine Learning, Deep Learning, Natural Language Processing',
    skills: 'Python, R, SQL, Power BI, Problem Solving, Gen AI',
    github: 'https://github.com/sidharth131102',
    linkedin: 'https://www.linkedin.com/in/sidharthunnikrishnan13',
    photo: '/assets/u-sidharth.png'

  }
,
  {
    name: 'Shoaib',
    specialization: 'Data Science',
    skills: 'Python, SQL, R, Tableau, Power BI, MATLAB',
    github: 'https://github.com/Shoaib-1302',
    linkedin: 'https://www.linkedin.com/in/shoaib-461136222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    photo: '/assets/shoaib.JPG'
  },
  {
    name: 'Shristy Das',
    specialization: 'IOT Analytics, Graph Analytics',
    skills: 'Java, Python, SQL, PowerBI, Software Development, Problem Solving',
    github: 'https://github.com/shristydas',
    linkedin: 'https://www.linkedin.com/in/shristy-das-80627223b/',
    photo: '/assets/shristy-das.JPG'
  },
  {
    name: 'Shrutika Gupta',
    specialization: 'Data Science, Machine Learning (ML), Deep Learning (DL), Generative AI (GenAI)',
    skills: 'Python, R, SQL, ML/DL, GenAI, Statistical Analysis, Data Visualization',
    github: 'https://github.com/Shrutika217',
    linkedin: 'https://www.linkedin.com/in/shrutika-gupta-687b55243/',
    photo: '/assets/shrutika-gupta.jpg'
  },
  {
    name: 'Sineha Manjary R.',
    specialization: 'Data Science, Machine Learning, Deep Learning, Web Developer',
    skills: 'Python, SQL, Problem Solving, Data Structure',
    github: 'https://github.com/SinehaManjary28',
    linkedin: 'www.linkedin.com/in/sineha-manjary',
    photo: '/assets/sineha-manjary.jpg'
  },
  {
    name: 'Sumesh CS',
    specialization: 'Data Science, Machine Learning and Neural Networks',
    skills: 'Python, Java, SQL',
    github: 'https://github.com/sumesh-12',
    linkedin: 'https://www.linkedin.com/in/sumesh-siva-0988b5219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    photo: '/assets/sumesh-cs.jpg'
  },
  {
    name: 'Swapnil Roy',
    specialization: 'Artificial Intelligence, Explainable AI, Machine Learning',
    skills: 'Python, R, TensorFlow, SQL, PySpark',
    github: 'https://github.com/S-T-R-A-N-G-E-R',
    linkedin: 'https://www.linkedin.com/in/swapnilroy001/',
    photo: '/assets/swapnil-roy.jpg'
  },
  {
    name: 'Swetha S',
    specialization: 'Data Science, Computer Science, Mathematics, Statistics, Machine Learning, Artificial Intelligence',
    skills: 'Python, R, SQL, Machine Learning, Project Management, Presentations, Retail, Business Intelligence',
    github: 'https://github.com/swetha-s-2',
    linkedin: 'www.linkedin.com/in/swetha-s-0301a717a',
    photo: '/assets/swetha-s.jpg'
  },
  {
    name: 'Tavidisetty Sri Aishwarya',
    specialization: 'Data Science',
    skills: 'Python, SQL, Java, Data Analytics, Machine Learning, Deep Learning, Natural Language Processing',
    github: 'https://github.com/Aishwaryatavidisetty',
    linkedin: 'https://www.linkedin.com/in/aishwarya-tavidisetty-683a5a210/',
    photo: '/assets/tavidisetty-sri-aishwarya.JPG'
  },
  {
    name: 'Tharik Grishan S',
    specialization: 'Data Scientist, Data Analyst, Business Analyst, AI/ML Engineer',
    skills: 'Python, SQL, Excel, Machine Learning, Critical Thinking, Communication',
    github: 'https://github.com/TharikGrishan',
    linkedin: 'www.linkedin.com/in/tharik-grishan-s-39892a293',
    photo: '/assets/tharik-grishan.JPG'
  },
  {
    name: 'Theresa Abel',
    specialization: 'Data Science, Data Analytics, Data Visualization, Data Engineering',
    skills: 'Python, Power BI, SQL, Excel, Tableau, Problem Solving, Leadership Qualities, Time Management, Critical Thinking, Teamwork',
    github: 'https://github.com/Theresa52106',
    linkedin: 'www.linkedin.com/in/theresa-abel06',
    photo: '/assets/theresa-abel.JPG'
  },
  {
    name: 'Utkarsh Misra',
    specialization: 'Mathematics & Statistics, Data Analysis & ML, Time Series & Regression, Optimization & Graph Theory, Applications in Insurance, Healthcare, Sustainability',
    skills: 'Python, R, Streamlit, MySQL, Java, Power BI, Excel',
    github: 'https://github.com/UHM1912',
    linkedin: 'https://www.linkedin.com/in/utkarsh-misra-161538269/',
    photo: '/assets/utkarsh-misra.JPG'
  },
  {
    name: 'Venmugil Sruthi',
    specialization: 'Data Science, Artificial Intelligence (AI), Machine Learning',
    skills: 'Python, SQL, Data Analysis & Visualization tools (R, Tableau, Power BI), Problem-Solving',
    github: 'https://github.com/VenmugilSruthi',
    linkedin: 'https://www.linkedin.com/in/venmugil-sruthi-a747b0249/',
    photo: '/assets/venmugil-sruthi.jpg'
  },
  {
    name: 'Vinal Sharma',
    specialization: 'Data Science, Machine Learning, Artificial Intelligence',
    skills: 'Python, R, SQL',
    github: 'https://github.com/Vinal-Sharma',
    linkedin: 'https://www.linkedin.com/in/vinal-sharma-42556a314',
    photo: '/assets/vinal-sharma.jpg'
  },

  {
    name: 'Ashisha Sharma',
    specialization: 'Data Science, Deep Learning , Machine Learning',
    skills: 'Python, PyTorch, MySQL, Statistics, Tensor flow, Transformers, GANs, RAG Models',
    github: 'https://github.com/ashisha2601',
    linkedin: 'https://www.linkedin.com/in/ashisha-sharma/',
    photo: '/assets/ashisha-sharma.JPG'    
  }
];

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
            <div className="profile-image-container">
              <img src={process.env.PUBLIC_URL + profile.photo} alt={profile.name} className="profile-image" />
            </div>
            <div className="profile-content">
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-specialization">{profile.specialization}</p>
              <p className="profile-skills"><strong>Skills:</strong> {profile.skills}</p>
            </div>
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
