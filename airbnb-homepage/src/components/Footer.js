import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#support">Support</a>
        <a href="#community">Community</a>
        <a href="#hosting">Hosting</a>
        <a href="#about">About</a>
      </div>
      <p>&copy; 2024 Airbnb Clone</p>
    </footer>
  );
};

export default Footer;