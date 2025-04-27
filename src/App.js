import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import AboutSection from './components/AboutSection';
import StudentProfiles from './components/StudentProfiles';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutSection />
      <StudentProfiles />
      <Footer />
    </div>
  );
}

export default App;
