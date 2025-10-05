import React, { useState } from 'react';
import '../App.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: process.env.PUBLIC_URL + '/assets/MDS_group_pic.jpeg',
      alt: 'Slide 1',
      text: 'Class of M.Sc. (Data Science) 2024-26',
    },
    {
      src:  process.env.PUBLIC_URL + '/assets/Campus_Main_Entrance.jpg',
      alt: 'Slide 2',
      text: 'CHRIST (Deemed to be University) - Bangalore Yeshwanthpur Campus',
    },
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <section id="home" className="slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide.src} alt={slide.alt} />
          <div className="text-overlay">
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <span className="prev" onClick={() => changeSlide(-1)}>&#10094;</span>
        <span className="next" onClick={() => changeSlide(1)}>&#10095;</span>
      </div>
    </section>
  );
};

export default Slider;
