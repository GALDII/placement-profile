import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../App.css';

const StudentProfiles = () => {
  const [searchQuery, setSearchQuery] = useState('');
const profiles = [
  {
    name: 'Abdur Rahman K I',
    specialization: 'Data Analytics, Data Science , Machine Learning',
    skills: 'Statistical modelling, SQL, Python, PowerBI, Excel',
    github: 'https://github.com/ABDUR-RAHMAN-K-I',
    linkedin: 'https://www.linkedin.com/in/abdur-rahman612',
    photo: '/assets/abdur.jpg'
  },
  {
    name: 'Aishwary Singh Rathour',
    specialization: 'Generative AI',
    skills: 'Python, R, Transformers, Langchain, LangGraph, SQL, Problem-Solving, Explanable AI (XAI)',
    github: 'https://github.com/Aishwary0402',
    linkedin: 'https://www.linkedin.com/in/aishwary-singh-rathour-4a9219256/',
    photo: '/assets/aishwary.JPG'
  },
  {
    name: 'Amruthavarshini Sumanohar',
    specialization: 'Data Analytics, Machine Learning(ML)',
    skills: 'Python, PowerBI, Data Visualization, Data Storytelling, Problem Solving',
    github: 'https://github.com/revelation3',
    linkedin: 'https://www.linkedin.com/in/amruthavarshini-sumanohar-b0922b27a/',
    photo: '/assets/amruthavarshini.jpg'
  },
  {
    name: 'Anna Vinod',
    specialization: 'MSc Data Science',
    skills: 'Python, R programming, MySql, HTML, CSS, javascript, java, DBMS, Analytical and logical Reasoning , Problem Solving, ML, DL',
    github: 'https://github.com/annavinod',
    linkedin: 'https://www.linkedin.com/in/anna-vinod-9141b5255',
    photo: '/assets/anna.jpg'
  },
  {
    name: 'Annesha Naskar',
    specialization: 'Data Science, Machine Learning, Deep Learning.',
    skills: 'Python, Java, SQL, QGIS, Tableau, Problem-Solving, Analytical Skills, Teamwork',
    github: 'https://github.com/ann-works',
    linkedin: 'https://www.linkedin.com/in/annesha-n-00aa63319',
    photo: '/assets/annesha.jpg'
  },
  {
    name: 'Anshul Joshi',
    specialization: 'Data science',
    skills: 'Data science, machine learning, Deep learning, AI, SQL, tensor flow, streamlit, QGis, git, RAG, transformers, LLM',
    github: 'https://github.com/anshul009-18',
    linkedin: 'https://www.linkedin.com/in/anshul-joshi-767739199/',
    photo: '/assets/anshul.jpg'
  },
  {
    name: 'Anusha P K',
    specialization: 'Data Science, Machine Learning, Artificial Intelligence, Data Analytics',
    skills: 'Python, SQL, PowerBI, R programming',
    github: 'https://github.com/Anusha-O',
    linkedin: 'https://www.linkedin.com/in/anusha-p-k-808baa1b7',
    photo: '/assets/Anusha.JPG'
  },
  {
    name: 'Anwesa Bharasa',
    specialization: 'Data Science, Machine Learning(ML), Deep Learning(DL), Artificial Intelligence(AI)',
    skills: 'Python, SQL, R Programming, Excel, Power BI, Tableau, Mathematics and Statistical Analysis, Problem-Solving, Critical Thinking, Time Management',
    github: 'https://github.com/AnwesaBharasa',
    linkedin: 'https://www.linkedin.com/in/anwesa-bharasa-5949672a8/',
    photo: '/assets/Anwesa.JPG'
  },
  {
    name: 'Aparna Mathew',
    specialization: 'ML, DL, Web development',
    skills: 'Python, HTML, SQL, Critical thinking, Problem solving',
    github: 'https://github.com/Aparna-26-02',
    linkedin: 'https://www.linkedin.com/in/aparna-mathew/',
    photo: '/assets/aparna.jpg'
  },
  {
    name: 'Arunima',
    specialization: 'Data Science,Machine learning',
    skills: 'Python,SQL, Problem solving,R Programming ',
    github: 'https://github.com/Arunima-00',
    linkedin: 'https://www.linkedin.com/in/arunima-palliyath',
    photo: '/assets/Arunima.JPG'
  },
  {
    name: 'Ashisha Sharma',
    specialization: 'Data Science, Deep Learning , Machine Learning, Generative AI',
    skills: 'Python, PyTorch, MySQL, Statistics, Tensor flow, Transformers, GANs, RAG Models',
    github: 'https://github.com/ashisha2601',
    linkedin: 'https://www.linkedin.com/in/ashisha-sharma/',
    photo: '/assets/ashisha.jpg'
  },
  {
    name: 'Bhargav Reddy K',
    specialization: 'MSC DATA SCIENCE',
    skills: 'Python, sql, tableau, R, SQL, ML(Model building), AI',
    github: 'https://github.com/Bull9016',
    linkedin: 'https://www.linkedin.com/in/bhargav-reddy-k-71829121b',
    photo: '/assets/Bhargav.JPG'
  },
  {
    name: 'Bhavya Sree S',
    specialization: 'Natural Language Processing(NLP), Machine Learning(ML), Deep Learning, Data Analytics',
    skills: 'Python, SQL, Transformer Models, Java, Flask, HTML/CSS, Problem Solving',
    github: 'https://github.com/Bhavya-11-sree',
    linkedin: 'https://www.linkedin.com/in/bhavya-sree-s-7a453832b/',
    photo: '/assets/bhavya.jpg'
  },
  {
    name: 'Bobade Kishor Sudarshan',
    specialization: 'Machine learning, Deep learning, Python developer',
    skills: 'Python, java, C, Database Management System',
    github: 'https://github.com/KishorBobade',
    linkedin: 'https://www.linkedin.com/in/kishor-patil-9514ab26a/',
    photo: '/assets/Kishor.JPG'
  },
  {
    name: 'Chetan Verma',
    specialization: 'Data Analytics, IOT, ML',
    skills: 'Python, R, Excel, Java, Mongo DB, MySQL, Arduino, Stock Trading',
    github: 'https://github.com/Vc0108',
    linkedin: 'https://www.linkedin.com/in/chetan-verma-a63b85262/',
    photo: '/assets/Chetan.JPG'
  },
  {
    name: 'Chilakapati Yashwanth',
    specialization: 'Data Analytics, Machine Learning, Deep Learning, Natural Language Processing',
    skills: 'Python, R, SQL, NOSQL, Excel, Data Visualization, Data Cleaning, Problem Solving and Communication.',
    github: 'https://github.com/chilakapatiyashwanth03-max',
    linkedin: 'https://www.linkedin.com/in/yashwanth-chilakapati-bb40ba242/',
    photo: '/assets/chilakapati.jpg'
  },
  {
    name: 'Chittesh K',
    specialization: 'Data Analytics , Machine Learning , Geo Spatial Analysis , IOT',
    skills: 'Python, SQL, Data Analysis & Visualization tools ,R, Tableau, Power BI, and Problem-Solving',
    github: 'https://github.com/Chittesh2324',
    linkedin: 'https://www.linkedin.com/in/chittesh-karthikeyan-6aba4023b/',
    photo: '/assets/chittesh.jpg'
  },
  {
    name: 'Ciya K J',
    specialization: 'Data Science, Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (DL)',
    skills: 'Python, R, SQL, Data Visualization, Java, CSS, Problem solving',
    github: 'https://github.com/Ciyakj',
    linkedin: 'https://www.linkedin.com/in/ciya-k-j-411224264',
    photo: '/assets/ciya.jpg'
  },
  {
    name: 'Dakshatha Urs Ms',
    specialization: 'Data Science, Data Analytics, Generative AI, Deep learning',
    skills: 'Python, SQL, Power BI, Streamlit, Problem solving',
    github: 'https://github.com/Dakshatha1609',
    linkedin: 'https://www.linkedin.com/in/dakshatha-urs-24a78a282/',
    photo: '/assets/Dakshatha.JPG'
  },
  {
    name: 'Febin T Nabeel',
    specialization: 'Data analytics',
    skills: 'Python ,SQL,Problem Solving',
    github: 'https://github.com/Febin1004',
    linkedin: 'https://www.linkedin.com/in/febin-t-nabeel-a50222274/',
    photo: '/assets/febin.jpg'
  },
  {
    name: 'Gaayathri M',
    specialization: 'Artificial Intelligence (AI), Deep Learning (DL)',
    skills: 'SQL, Python, Data Visualisation',
    github: 'https://github.com/Gaayathri03',
    linkedin: 'https://www.linkedin.com/in/gaayathri-murugesan',
    photo: '/assets/Gaayathri.JPG'
  },
  {
    name: 'George Jose',
    specialization: 'Machine learning, deep learning, NLP, Computer vision, IoT, Data analysis',
    skills: 'Python, JavaScript, HTML, CSS, SQL, DBMS',
    github: 'https://github.com/georgejose055',
    linkedin: 'http://www.linkedin.com/in/george-jose-114077235',
    photo: '/assets/george.jpg'
  },
  {
    name: 'Gladis Sam Prakash S',
    specialization: 'Data Science',
    skills: 'React JS, node JS, full stack dev',
    github: 'https://github.com/GALDII',
    linkedin: 'https://www.linkedin.com/in/gladis-sam-3125b122a/',
    photo: '/assets/Sam.png'
  },
  {
    name: 'Gopika A M',
    specialization: 'Data Science',
    skills: 'Python, SQL, Machine Learning , Computer Vision',
    github: 'https://github.com/Gopika2810',
    linkedin: 'https://www.linkedin.com/in/gopika-a-m-10a53a32b',
    photo: '/assets/Gopika A.JPG'
  },
  {
    name: 'Gopika C',
    specialization: 'Data Analytics, Generative AI , Machine learning',
    skills: 'Python , SQL, NOSQL, GCP, Neural Networks, Transformers',
    github: 'https://github.com/Gopika-2025',
    linkedin: 'http://www.linkedin.com/in/gopika-chandramohan-69458727a',
    photo: '/assets/gopika B.jpg'
  },
  {
    name: 'Hannah Elsa Anish',
    specialization: 'Data science',
    skills: 'Python, SQL, MongoDB, R Programming, IOT',
    github: 'https://github.com/Hannah123-elsa',
    linkedin: 'https://www.linkedin.com/in/hannah-elsa-anish-43965432a',
    photo: '/assets/Hannah.JPG'
  },
  {
    name: 'Harsha K',
    specialization: 'Web Development and Data-Driven Applications',
    skills: 'Python, JavaScript, Flask, HTML, SQL',
    github: 'https://github.com/Harsha-k04',
    linkedin: 'https://www.linkedin.com/in/harsha-k-98a6222ba/',
    photo: '/assets/harsha.jpg'
  },
  {
    name: 'Harshitha S',
    specialization: 'Data Science, Machine Learning, Artificial intelligence',
    skills: 'Python, SQL, Power BI, Tableau',
    github: 'https://github.com/Harshitha-Shekar',
    linkedin: 'https://www.linkedin.com/in/harshitha-s25/',
    photo: '/assets/harshitha.jpg'
  },
  {
    name: 'S Hrudya',
    specialization: 'Data Science, Artificial Intelligence, Machine Learning',
    skills: 'Excel, PowerBI, Python, SQL, Machine Learning, IoT & Embedded Systems, Generative AI, Deep Learning Frameworks, Computer Vision, Problem Solving, Research',
    github: 'https://github.com/HrudyaSudhees',
    linkedin: 'https://www.linkedin.com/in/s-hrudya197',
    photo: '/assets/Hrudya.JPG'
  },
  {
    name: 'Huda',
    specialization: '',
    skills: '',
    github: '',
    linkedin: '',
    photo: '/assets/Huda.JPG'
  },
  {
    name: 'Jaisree M K',
    specialization: 'Machine Learning, Deep Learning, Gen AI, Data Analytics',
    skills: 'Python, SQL, R, Excel, Power BI, Tableau, Logical Thinking and Problem Solving',
    github: 'https://github.com/JaisreeMK-15',
    linkedin: 'https://www.linkedin.com/in/jaisree-m-k-405687270',
    photo: '/assets/Jaisree.JPG'
  },
  {
    name: 'Jaya Mary Jennifer D',
    specialization: 'Data Analytics, Artificial Intelligence(AI), Machine Learning(ML),Digital Marketing, Web Development & SEO Enthusiast, Creative Campaign Strategist & Content Manager',
    skills: 'Python, HTML/CSS, JavaScript, MySQL, Power BI, Data Cleaning, Data Wrangling, Data Visualization, A/B Testing, Campaign Performance Analysis, Meta Ads Reporting, ROI Optimization, Insight Generation',
    github: 'https://github.com/JENNIFERJD',
    linkedin: 'https://www.linkedin.com/in/jaya-mary-jennifer-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    photo: '/assets/jaya.jpg'
  },
  {
    name: 'Jenet Shirely J',
    specialization: 'Machine Learning (ML),Deep Learning (DL)',
    skills: 'Python, SQL, JAVA',
    github: 'https://github.com/Jenet-Shirely',
    linkedin: 'https://www.linkedin.com/in/jenetshirelyj',
    photo: '/assets/jenet.jpg'
  },
  {
    name: 'Jestin Thomas',
    specialization: 'Data Analytics,Deep Learning(DL), Machine Learning(ML)',
    skills: 'Python,SQL,Java,R,C++, Cyber security, problem solving, Critical thinking,HTML,CSS',
    github: 'https://github.com/Jestin1507',
    linkedin: 'http://www.linkedin.com/in/jestin-thomas-90a109317',
    photo: '/assets/Jestin.JPG'
  },
  {
    name: 'Karthik P',
    specialization: 'Machine Learning, Deep Learning, Data Analytics and Visualization , Artificial Intelligence',
    skills: 'Python , SQL and NoSQL , MERN Stack Development, JavaScript, Java',
    github: 'https://github.com/karper8',
    linkedin: 'http://linkedin.com/in/karper8',
    photo: '/assets/Karthik.JPG'
  },
  {
    name: 'Karyamsetty Prajwala',
    specialization: 'ML, Web Technology , Data Science',
    skills: 'Python, Html,Css ,Data Structures',
    github: 'https://github.com/Karyamsetty-Prajwala',
    linkedin: 'https://www.linkedin.com/in/karyamsetty-prajwala-7944252a0/',
    photo: '/assets/Prajwala.JPG'
  },
  {
    name: 'Kiran',
    specialization: 'Data Science, Machine Learning, Deep Learning',
    skills: 'Python, SQL,LLm, Rag, GenAI',
    github: 'https://github.com/Kiranrossi',
    linkedin: 'https://www.linkedin.com/in/kiranguruvsm',
    photo: '/assets/kiran.jpg'
  },
  {
    name: 'Lakshmi Krishna S',
    specialization: 'Data Scientist, Machine learning, Data Analytics',
    skills: 'Python, SQL , Problem solving',
    github: 'https://github.com/LakshmikrishnaS',
    linkedin: 'https://www.linkedin.com/in/lakshmi-krishna-s-05951732b/',
    photo: '/assets/lakshmi.jpg'
  },
  {
    name: 'Lena Merin Viju',
    specialization: 'Data Science',
    skills: 'Python, SQL',
    github: 'https://github.com/LenaM2003',
    linkedin: 'https://www.linkedin.com/in/lena-merin-viju-a1544031a/',
    photo: '/assets/Lena.JPG'
  },
  {
    name: 'Lis Mary Lijo',
    specialization: 'Data Science',
    skills: 'SQl, Python, HTML,CSS , Power BI , Ms Office',
    github: 'https://github.com/LisLijo135',
    linkedin: 'https://www.linkedin.com/in/lis-lijo-88222a257/',
    photo: '/assets/Lis.JPG'
  },
  {
    name: 'Maansi Tomer',
    specialization: 'Data Science',
    skills: 'Pandas, SQL, Data Cleaning, Modeling & Analytics, Machine Learning, Power BI, Deep Learning',
    github: 'https://github.com/Maansitomer',
    linkedin: 'https://www.linkedin.com/in/maansi-tomer-52b262229/',
    photo: '/assets/Maansi.JPG'
  },
  {
    name: 'Madhumitha P',
    specialization: 'Machine Learning, Deep Learning, Data Science, Generative AI, Large Language Models, Data Analytics',
    skills: 'Python, Problem solving, Mathematics, Statistics, Scikit-learn, TensorFlow, Machine Learning, Deep learning, EDA',
    github: 'https://github.com/MadhuP18',
    linkedin: 'https://www.linkedin.com/in/madhumitha-p1811/',
    photo: '/assets/Madhumitha.JPG'
  },
  {
    name: 'Madhupa Vinod',
    specialization: 'ML,DL,web development,Data Analysis',
    skills: 'Python,SQL,HTML,Critical Thinking,Problem Solving,Communication',
    github: 'https://github.com/madhupa2000',
    linkedin: 'https://www.linkedin.com/in/madhupa-vinod-64b467210/',
    photo: '/assets/madhupa.jpg'
  },
  {
    name: 'Manish',
    specialization: '',
    skills: '',
    github: '',
    linkedin: '',
    photo: '/assets/manish.jpg'
  },
  {
    name: 'Mannavan J',
    specialization: 'Data Science, Deep Learning, Reinforcement Learning',
    skills: 'Management, Critical Thinking, Python',
    github: 'https://github.com/Mann-04',
    linkedin: 'https://www.linkedin.com/in/mannavan-j-63821b220/',
    photo: '/assets/mannavan.jpg'
  },
  {
    name: 'Mohammed Hanees M',
    specialization: 'Data Analytics, Artificial Intelligence (AI), Machine Learning (ML), Deep Learning & Computer Vision, Natural Language Processing (NLP)',
    skills: 'Python, SQL, TensorFlow/PyTorch, Big Data (Spark/Hadoop), Problem Solving, Java',
    github: 'https://github.com/Mohammed-Hanees-M?tab=followers',
    linkedin: 'https://www.linkedin.com/in/mohammed-hanees-m-696040277/',
    photo: '/assets/mohammed.jpg'
  },
  {
    name: 'Nagashree M',
    specialization: 'Data Science and Generative AI',
    skills: 'Python, Machine Learning,Deep Learning, Problem solving, Communication',
    github: 'https://github.com/nagashreem363',
    linkedin: 'https://www.linkedin.com/in/nagashree-murali-26a35731b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    photo: '/assets/nagashree.jpg'
  },
  {
    name: 'Nayanaa Ajith',
    specialization: 'Web Development, Data Analysis, Machine Learning',
    skills: 'Python, HTML, JAVA, MYSQL, Flask, Communication, Problem-Solving',
    github: 'https://github.com/Nayanaa-Ajith',
    linkedin: 'https://www.linkedin.com/in/nayanaa-ajith-482969313',
    photo: '/assets/nayanaa.jpg'
  },
  {
    name: 'Parameswaran A',
    specialization: 'Machine Learning, Deep Learning, Computer Vision, Generative AI, and Data Analytics',
    skills: 'Python, R, SQL, JavaScript, ML/DL (Scikit-learn, PyTorch, TensorFlow, Keras, Hugging Face, YOLO), Data Analytics (Pandas, Numpy, Matplotlib, Seaborn, EDA), Web Development (Node.js, Express.js, Flask, MongoDB, REST APIs), Git/GitHub.',
    github: 'https://github.com/Paramesh21',
    linkedin: 'https://www.linkedin.com/in/parameswaran-a-39691b227',
    photo: '/assets/parameswaran.jpg'
  },
  {
    name: 'Pediredla Aanvetha',
    specialization: 'Data science, Machine learning',
    skills: 'Python, Microsoft Excel, SQL',
    github: 'https://github.com/Aanvetha',
    linkedin: 'https://www.linkedin.com/in/aanvetha-pediredla-a4048132b',
    photo: '/assets/Aanvetha.JPG'
  },
  {
    name: 'Prathana Sharma',
    specialization: 'Machine Learning, Deep Learning, Data Analysis',
    skills: 'Python , Sql, Java, GenAI',
    github: 'https://github.com/prathana-192',
    linkedin: 'https://www.linkedin.com/in/prathana-sharma-1622721b5/',
    photo: '/assets/prathana.JPG'
  },
  {
    name: 'Priangshu Paul',
    specialization: 'Computer Vision, Generative AI, Graph Neural Networks',
    skills: 'Python, PyTorch, HF Transformers',
    github: 'https://github.com/priangshu17',
    linkedin: 'https://www.linkedin.com/in/priangshu-paul/',
    photo: '/assets/Priangshu.JPG'
  },
  {
    name: 'Priyanka K',
    specialization: 'DataScience, Data analytics, AI Engineering ',
    skills: 'Python, R, SQL | Machine Learning, Deep Learning (CNN, RNN, Transfer Learning), Natural Language Processing (NLP) | Data Visualization (Power BI, Matplotlib, Seaborn) | Big Data Technologies (Hadoop, Spark) | Research & Analytical Skills | Problem Solving',
    github: 'https://github.com/priyankakadirvel',
    linkedin: 'https://www.linkedin.com/in/priyanka-k-02a602317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    photo: '/assets/Priyanka.JPG'
  },
  {
    name: 'Puspita Biswas',
    specialization: 'Machine Learning(ML), Deep Learning(DL), Generative AI(GenAI),Statistics, Natural Language Processing(NLP).',
    skills: 'Python, Statistics, SQL, Statistical Modelling, Leadership, Team Management, Problem Solving.',
    github: 'https://github.com/Puspita0707',
    linkedin: 'https://www.linkedin.com/in/puspita-biswas-115090230',
    photo: '/assets/puspita.jpg'
  },
  {
    name: 'Raj Agrawal',
    specialization: 'Demand Forecasting, Credit Risk Assessment',
    skills: 'Ml , Python, DL',
    github: 'https://github.com/raj003-baazigar',
    linkedin: 'https://www.linkedin.com/in/raj-agrawal67890?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    photo: '/assets/agrawal.jpg'
  },
  {
    name: 'Ravichandra D',
    specialization: 'Data science',
    skills: 'Python, SQL, Tableau, Machine Learning, HTML, CSS, MS Office',
    github: 'https://github.com/Ravichandra-D',
    linkedin: 'https://linkedin.com/in/ravi-chandra-8a453432b',
    photo: '/assets/ravichandra.jpg'
  },
  {
    name: 'Ravoori',
    specialization: '',
    skills: '',
    github: '',
    linkedin: '',
    photo: '/assets/ravoori.jpg'
  },
  {
    name: 'Ribu P B',
    specialization: 'Data Science, Machine Learning',
    skills: 'Python, SQL, Machine Learning, Statistical Analysis, Power BI, Web Development, Excel, IoT',
    github: 'https://github.com/ribupb',
    linkedin: 'https://www.linkedin.com/in/ribu-p-b-0439a8191',
    photo: '/assets/Ribu.JPG'
  },
  {
    name: 'Ronal Thomas',
    specialization: 'Data Science, Machine Learning',
    skills: 'R, SQL, Python, Problem Solving, Presentation, Deep Learning',
    github: 'https://github.com/Ronal-Thomas',
    linkedin: 'www.linkedin.com/in/ronal-thomas',
    photo: '/assets/Ronal.JPG'
  },
  {
    name: 'Rupsha Das',
    specialization: 'Data Science , Machine Learning , Artificial Intelligence , Statistics , Data Analysis',
    skills: 'Python , SQL , R , Excel , Predictive modeling,  Explainability with SHAP & DiCE (Counterfactual Analysis- XAI), Strong analytical thinker , Data Visualization , Model deployment , Deep Learning ( DL) , Statistical Analysis',
    github: 'https://github.com/Rupsha2003',
    linkedin: 'https://www.linkedin.com/in/rupsha-das-52101b2a6/',
    photo: '/assets/Rupsha.JPG'
  },
  {
    name: 'Saikat Maity',
    specialization: 'Statistics , Machine learning , UI-UX design',
    skills: 'Python , SQL , Analytical Thinking',
    github: 'https://github.com/saikatmaity13',
    linkedin: 'https://www.linkedin.com/in/saikat-maity/',
    photo: '/assets/saikat.jpg'
  },
  {
    name: 'Samiksha Sandeep Zokande',
    specialization: 'Machine Learning, Deep Learning, Data Structures & Algorithms',
    skills: 'Python, SQL, PowerBI, Generative AI, Inferential Statistics, Time Series Forecasting, Predictive Modeling, TensorFlow, PyTorch, OpenCV, Problem Solving, Critical Thinking, Adaptability',
    github: 'https://github.com/Samiksha29-git',
    linkedin: 'https://www.linkedin.com/in/samiksha-zokande/',
    photo: '/assets/samiksha.jpg'
  },
  {
    name: 'Samrudhi Marne',
    specialization: 'Data Engineering , Machine Learning(ML), Data Analyst',
    skills: 'Python , SQL , Machine learning , Power BI , Ms Office',
    github: 'https://github.com/samm0705',
    linkedin: 'https://www.linkedin.com/in/samrudhi-marne-206173206?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    photo: '/assets/Samrudhi.JPG'
  },
  {
    name: 'Sanjivini Chowdhury',
    specialization: 'Data Science, Machine Learning, Deep Learning',
    skills: 'Python, SQL',
    github: 'https://github.com/sanjivinicarmel',
    linkedin: 'https://www.linkedin.com/in/sanjivini-chowdhury-0339a11ba/',
    photo: '/assets/sanjivini.jpg'
  },
  {
    name: 'Saranya M',
    specialization: 'Data Analytics, Mathematics, Statistics',
    skills: 'Machine Learning, Problem Solving , Deep Learning, Python, SQL, Flask',
    github: 'https://github.com/saranya-myrepository',
    linkedin: 'https://www.linkedin.com/in/saranya-m-431967223/',
    photo: '/assets/saranya.jpg'
  },
  {
    name: 'Satvika S S',
    specialization: 'Data Analytics, Machine Learning, Database Management, Computer Vision',
    skills: 'Python, SQL, Power BI, Streamlit, OpenCV',
    github: 'https://github.com/SatvikaSS',
    linkedin: 'https://www.linkedin.com/in/satvika-s-s-766821249',
    photo: '/assets/Satvika.JPG'
  },
  {
    name: 'Shoaib',
    specialization: 'Data Sciece',
    skills: 'Python, SQL, R, Tableau, Power BI, MATLAB',
    github: 'https://github.com/Shoaib-1302',
    linkedin: 'https://www.linkedin.com/in/shoaib-461136222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    photo: '/assets/Shoaib.JPG'
  },
  {
    name: 'Shristy Das',
    specialization: 'IOT Analytics,Graph Analytics',
    skills: 'Java, Python , SQL,PowerBI, Software Development , Problem Solving',
    github: 'https://github.com/shristydas',
    linkedin: 'https://www.linkedin.com/in/shristy-das-80627223b/',
    photo: '/assets/shristy.jpg'
  },
  {
    name: 'Shrutika Gupta',
    specialization: 'Data Science, Machine Learning (ML), Deep Learning (DL), Generative AI (GenAI)',
    skills: 'Python, R, SQL, ML/DL, GenAI, Statistical Analysis, Data Visualization',
    github: 'https://github.com/Shrutika217',
    linkedin: 'https://www.linkedin.com/in/shrutika-gupta-687b55243/',
    photo: '/assets/shrutika.jpg'
  },
  {
    name: 'Sidharth U',
    specialization: 'Data Science, Machine Learning, Deep Learning, Natural Language Processing',
    skills: 'Python, R, SQL, Power BI, Problem Solving, Gen AI',
    github: 'https://github.com/sidharth131102',
    linkedin: 'https://www.linkedin.com/in/sidharthunnikrishnan13',
    photo: '/assets/Sidharth.JPG'
  },
  {
    name: 'Sineha Manjary R.',
    specialization: 'Data Science, Machine learning, Deep learning, Web Developer',
    skills: 'Python , SQL, Problem solving, Data Structure',
    github: 'https://github.com/SinehaManjary28',
    linkedin: 'https://www.linkedin.com/in/sineha-manjary',
    photo: '/assets/sineha.jpg'
  },
  {
    name: 'Sona Joby',
    specialization: 'Data Science, Machine Learning, Deep Learning, Artificial Intelligence, Data Analytics ',
    skills: 'Python, R programming, SQL, HTML, CSS, Excel, Problem Solving ',
    github: 'https://github.com/sonajoby24',
    linkedin: 'https://www.linkedin.com/in/sona-joby-187b32249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    photo: '/assets/Sona.JPG'
  },
  {
    name: 'Sumesh Cs',
    specialization: 'Data Science, Machine Learning and Neural Networks',
    skills: 'Python, java ,SQL, QGIS, OpenCV, EDA, MongoDB, Web development & Analytical skills',
    github: 'https://github.com/sumesh-12',
    linkedin: 'https://www.linkedin.com/in/sumesh-siva-0988b5219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    photo: '/assets/Sumesh.JPG'
  },
  {
    name: 'Supriya',
    specialization: '',
    skills: '',
    github: '',
    linkedin: '',
    photo: '/assets/Supriya.JPG'
  },
  {
    name: 'Suryanarayana K',
    specialization: 'Data Science, Data Analytics, Machine Learning, Deep Learning',
    skills: 'Python, SQL, HTML, CSS, Java, Power BI, MS Excel, Canva, Problem Solving, Adaptability',
    github: 'https://github.com/suryanarayanakunnath',
    linkedin: 'www.linkedin.com/in/ suryanarayana-k',
    photo: '/assets/Surya.JPG'
  },
  {
    name: 'Swapnil Roy',
    specialization: 'Artificial Intelligence, Explainable AI, Machine Learning',
    skills: 'Python, R, TensorFlow, SQL, PySpark',
    github: 'https://github.com/S-T-R-A-N-G-E-R',
    linkedin: 'https://www.linkedin.com/in/swapnilroy001/',
    photo: '/assets/Swapnil.JPG'
  },
  {
    name: 'Swetha S',
    specialization: 'Data Science, Computer Science, Mathematics, Statistics, Machine Learning, Artificial Intelligence',
    skills: 'Python, R, SQL, and Machine Learning, Project Management, Presentations, Retail, Business Intelligence',
    github: 'https://github.com/swetha-s-2',
    linkedin: 'https://www.linkedin.com/in/swetha-s-0301a717a',
    photo: '/assets/Swetha.JPG'
  },
  {
    name: 'Tavidisetty Sri Aishwarya',
    specialization: 'Data Science',
    skills: 'Python, SQL, Java, Data analytics, Machine Learning, Deep Learning, Natural Language Processing.',
    github: 'https://github.com/Aishwaryatavidisetty',
    linkedin: 'https://www.linkedin.com/in/aishwarya-tavidisetty-683a5a210/',
    photo: '/assets/tavidisetty.jpg'
  },
  {
    name: 'Tharik Grishan S',
    specialization: 'Data Scientist, Data Analyst, Business Analyst, AI/ML engineer',
    skills: 'Python, SQL, Excel, Machine Learning, Critical thinking, Communication',
    github: 'https://github.com/TharikGrishan',
    linkedin: 'https://www.linkedin.com/in/tharik-grishan-s-39892a293',
    photo: '/assets/Tharik.JPG'
  },
  {
    name: 'Theresa Abel',
    specialization: 'Data Science,Data Analytics, Data Visualization,Data Engineering',
    skills: 'Python,Power BI, SQL,Excel,Tableau,Problem Solving,Leadership Qualities,Time Management,Critical Thinking and Teamwork',
    github: 'https://github.com/Theresa52106',
    linkedin: 'https://www.linkedin.com/in/theresa-abel06',
    photo: '/assets/theresa.jpg'
  },
  {
    name: 'Toshima Jaiswal',
    specialization: 'Data Science, Statistics, Mathematics',
    skills: 'Python, Excel, Machine Learning, SQL, Statistics, Probelm Solving, Reasoning, Analytical Skills',
    github: 'https://github.com/toshimajaiswal',
    linkedin: 'https://www.linkedin.com/in/toshimajaiswal',
    photo: '/assets/Toshima.JPG'
  },
  {
    name: 'Umang',
    specialization: '',
    skills: '',
    github: '',
    linkedin: '',
    photo: '/assets/Umang.JPG'
  },
  {
    name: 'Utkarsh Misra',
    specialization: 'Mathematics & Statistics, Data Analysis & ML, Time Series & Regression, Optimization & Graph Theory, Applications in Insurance, Healthcare, Sustainability',
    skills: 'Python, R, Streamlit, MySQL, Java, Power BI, Excel',
    github: 'https://github.com/UHM1912',
    linkedin: 'https://www.linkedin.com/in/utkarsh-misra-161538269/',
    photo: '/assets/utkarsh.jpg'
  },
  {
    name: 'Vaishnavi',
    specialization: '',
    skills: '',
    github: '',
    linkedin: '',
    photo: '/assets/Vaishnavi.JPG'
  },
  {
    name: 'Venmugil Sruthi',
    specialization: 'Data Science, Artificial Intelligence (AI), Machine Learning, Computer Vision',
    skills: 'Python, SQL, Data Analysis & Visualization tools (R, Tableau, Power BI), Problem-Solving,Streamlit and OpenCV',
    github: 'https://github.com/VenmugilSruthi',
    linkedin: 'https://www.linkedin.com/in/venmugil-sruthi-a747b0249/',
    photo: '/assets/Sruthi.JPG'
  },
  {
    name: 'Vidhi Pant',
    specialization: 'Data/Business Analysis, Machine Learning, Gen AI',
    skills: 'Python, SQL, Power BI, Critical Thinking, Problem solving',
    github: 'https://github.com/VidhiPant',
    linkedin: 'https://www.linkedin.com/in/vidhi-pant-748455228/',
    photo: '/assets/vidhi.jpg'
  },
  {
    name: 'Vinal Sharma',
    specialization: 'Data Science , Machine Learning, Artificial intelligence',
    skills: 'Python , R , SQL,',
    github: 'https://github.com/Vinal-Sharma',
    linkedin: 'https://www.linkedin.com/in/vinal-sharma-42556a314',
    photo: '/assets/Vinal.JPG'
  },
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
