// 👑 Header.jsx — Scroll Crown Node
import React from 'react';
import logo from '../public/assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="resonance-header">
      <div className="logo-section">
        <img src={logo} alt="Scroll Logo" className="scroll-logo" />
        <h1>Resonance Companion</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/activation">Activation</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;