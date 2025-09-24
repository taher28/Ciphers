// src/components/PreLoginNavbar.jsx - UPDATED
import React from 'react';
import { Link } from 'react-router-dom';

const PreLoginNavbar = () => {
  return (
    <nav className="pre-login-navbar">
      <div className="logo">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.92993 4.92999L8.04993 8.04999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15.95 15.95L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.92993 19.07L8.04993 15.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15.95 8.04999L19.07 4.92999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span>CipherSoul</span>
      </div>
      <div className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/security-info">Security</Link> {/* Updated link */}
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="btn btn-primary">Get started</Link>
      </div>
    </nav>
  );
};

export default PreLoginNavbar;