import React from 'react';
import './Navbar.css'; // CSS to be created later

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Airbnb</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="navbar-user">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;