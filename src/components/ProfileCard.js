import React, { useState, useEffect, useRef } from 'react';

// This component is responsible for rendering a single profile card.
// It contains the logic for lazy-loading its own image.
// This version uses React.createElement instead of JSX.
const ProfileCard = ({ profile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to detect when the card is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // When the card is intersecting (visible), update the state
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to prevent unnecessary checks
          observer.unobserve(cardRef.current);
        }
      },
      // The image will start loading when the card is 200px away from the viewport
      { rootMargin: '0px 0px 200px 0px' }
    );
    
    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // The return statement is now using React.createElement
  return React.createElement('div', { className: 'profile-card', ref: cardRef },
    React.createElement('div', { className: 'profile-image-container' },
      isVisible ? 
        React.createElement('img', {
          src: process.env.PUBLIC_URL + profile.photo,
          alt: profile.name,
          className: 'profile-image',
          onError: (e) => {
            // Fallback in case an image still fails to load
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/300x300/e2e8f0/4a5568?text=Image+Not+Found";
          }
        }) : 
        React.createElement('div', { className: 'profile-image-placeholder' })
    ),
    React.createElement('div', { className: 'profile-content' },
      React.createElement('h3', { className: 'profile-name' }, profile.name),
      React.createElement('p', { className: 'profile-specialization' }, profile.specialization),
      React.createElement('p', { className: 'profile-skills' }, 
        React.createElement('strong', null, 'Skills:'),
        ` ${profile.skills}`
      )
    ),
    React.createElement('div', { className: 'social-media' },
      React.createElement('a', { href: profile.github, target: '_blank', rel: 'noopener noreferrer' },
        React.createElement('i', { className: 'fab fa-github' })
      ),
      React.createElement('a', { href: profile.linkedin, target: '_blank', rel: 'noopener noreferrer' },
        React.createElement('i', { className: 'fab fa-linkedin' })
      )
    )
  );
};

export default ProfileCard;

