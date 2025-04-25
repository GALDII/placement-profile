import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import AboutSection from './components/AboutSection';
import StudentProfiles from './components/StudentProfiles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutSection />
      <StudentProfiles />
    </div>
  );
}

export default App;
