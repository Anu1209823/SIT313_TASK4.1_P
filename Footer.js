import React from 'react';
import './Footer.css'; // Import the CSS file for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
      <div className="footer-column explore"> 
        <h3>Explore</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQ's</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <img src="https://history-computer.com/wp-content/uploads/2021/01/shutterstock_278925056-scaled.jpg" alt="Facebook" />
            <img src="https://i.blogs.es/c04a74/instagram/840_560.jpg" alt="Instagram" />
            <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" alt="Twitter" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="dev-deakin">DEV@Deakin 2022</p>
        <div className="footer-info">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
