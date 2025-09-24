import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Us</h1>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>At CipherSoul, we believe that privacy is a fundamental human right. In a world where our personal data is constantly collected, analyzed, and monetized, we provide a sanctuary for your thoughts.</p>
          <p>Our mission is to create tools that empower individuals to protect their digital lives without compromising on usability. We believe that security shouldn't come at the expense of convenience.</p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>CipherSoul was founded in 2025 by a team of students who were security enthusiasts, and developers who were frustrated with the state of digital privacy. We noticed that even applications claiming to be "secure" often cut corners when it came to protecting user data.</p>
          <p>We set out to build a journaling application that would truly respect user privacy, one where even we couldn't access your data if we wanted to. The result is CipherSoul, a zero-knowledge platform that puts you in complete control of your digital thoughts.</p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Transparency</h3>
              <p>We're open about how our technology works and what data we collect (which is as little as possible).</p>
            </div>
            <div className="value-item">
              <h3>Security</h3>
              <p>We implement industry-best security practices and regularly audit our systems.</p>
            </div>
            <div className="value-item">
              <h3>Privacy</h3>
              <p>We believe your personal thoughts should remain personal, and we've built our system accordingly.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We continuously improve our product while maintaining our core commitment to privacy.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>CipherSoul is developed by a distributed team of students who are passionate about privacy. While we're spread across different time zones, we're united by our commitment to creating tools that protect digital rights.</p>
          <p>We're proud to be a fully remote company that values work-life balance and diversity in all its forms.</p>
        </div>
      </div>
    </div>
  );
};

export default About;