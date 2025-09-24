import React from 'react';

const Features = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Features</h1>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Military-Grade Encryption</h3>
          <p>All your notes are encrypted with AES-256 encryption, ensuring your private thoughts remain private.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Zero-Knowledge Architecture</h3>
          <p>We never have access to your encryption keys or unencrypted data. Only you can read your journal.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Cross-Platform Sync</h3>
          <p>Access your encrypted journal from any device, with all changes synchronized securely.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3 19.2 15.5 19.2 15.8C19.2 16.2 19.4 16.6 19.7 16.9C20 17.2 20.4 17.4 20.8 17.4C21.2 17.4 21.6 17.2 21.9 16.9C22.2 16.6 22.4 16.2 22.4 15.8C22.4 15.4 22.2 15 21.9 14.7C21.6 14.4 21.2 14.2 20.8 14.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Biometric Authentication</h3>
          <p>Use your fingerprint or face ID for quick and secure access to your journal.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C5 5 3 7 3 12C3 17 5 19 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19 19C19 19 21 17 21 12C21 7 19 5 19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Secure Backups</h3>
          <p>Automatically backup your encrypted journal to prevent data loss.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3H8C9.10457 3 10 3.89543 10 5V21C10 19.8954 9.10457 19 8 19H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 3H16C14.8954 3 14 3.89543 14 5V21C14 19.8954 14.8954 19 16 19H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Rich Text Editor</h3>
          <p>Format your journal entries with bold, italics, lists, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;