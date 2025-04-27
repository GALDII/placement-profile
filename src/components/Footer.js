import React from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer" id="contact-details">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Christ (Deemed to be University)</h3>
          <p><b>Department of Computer Science</b><br />
            School of Sciences<br />
            Bangalore Yeshwanthpur Campus
          </p>
          <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;
          <a
            href="https://goo.gl/maps/Ne8HnRegdWst9AeWA"
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Reach the Campus
          </a>
        </div>

        <div className="footer-contact">
          <div className="contact-person">
            <h4>Connect with us</h4>
            <p>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;&nbsp;&nbsp;
              <a 
                href="/" 
                className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                Interested in recruiting?
              </a>
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;
              <a
                href="mailto:cs.placements@christuniversity.in"
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                cs.placements@christuniversity.in
              </a>
            </p>
          </div>

          <div className="contact-person">
            <h4>Dr. Vinay M</h4>
            <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;+91 99863 88234</p>
            <p>
              <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;
              <a
                href="mailto:vinay.m@christuniversity.in"
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                vinay.m@christuniversity.in
              </a>
            </p>
          </div>

          <div className="contact-person">
            <h4>Dr. Gobinath R</h4>
            <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;+91 99946 22574</p>
            <p>
              <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;
              <a
                href="mailto:gobinath.r@christuniversity.in"
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                gobinath.r@christuniversity.in
              </a>
            </p>
          </div>

          <div className="contact-person">
            <h4>Dr. Balakrishnan C</h4>
            <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;+91 98657 82529</p>
            <p>
              <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;
              <a
                href="mailto:balakrishnan.c@christuniversity.in"
                className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                balakrishnan.c@christuniversity.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 CHRIST (Deemed to be University)
      </div>
    </footer>
  );
};

export default Footer;
