import React from 'react';

const Security = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Security</h1>
      </div>

      <div className="security-content">
        <div className="security-section">
          <h2>How We Protect Your Data</h2>
          <p>At CipherSoul, we take security seriously. Here's how we ensure your journal entries remain private:</p>
          
          <div className="security-features">
            <div className="security-feature">
              <h3>End-to-End Encryption</h3>
              <p>Your data is encrypted on your device before it ever reaches our servers using AES-256 encryption, the same standard used by governments and security experts worldwide.</p>
            </div>
            
            <div className="security-feature">
              <h3>Zero-Knowledge Architecture</h3>
              <p>We never have access to your encryption keys or unencrypted data. This means we can't read your journal entries even if we wanted to.</p>
            </div>
            
            <div className="security-feature">
              <h3>Secure Key Management</h3>
              <p>Your encryption key is derived from your password using PBKDF2 with a high iteration count, making it extremely difficult to brute force.</p>
            </div>
            
            <div className="security-feature">
              <h3>Regular Security Audits</h3>
              <p>We undergo regular security audits by independent third parties to ensure our systems remain secure against emerging threats.</p>
            </div>
          </div>
        </div>

        <div className="security-section">
          <h2>Privacy Commitment</h2>
          <p>We believe privacy is a fundamental human right. That's why:</p>
          <ul>
            <li>We don't sell your data to third parties</li>
            <li>We don't use your data for advertising</li>
            <li>We minimize data collection to only what's necessary</li>
            <li>We're transparent about our practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Security;