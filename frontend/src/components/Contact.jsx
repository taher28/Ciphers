import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit the form data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>We'd Love to Hear From You</h2>
          <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>support@cipher-soul.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.52 21.53 20.99 20.94 21.03C20.56 21.05 20.18 21.06 19.8 21.06C10.21 21.06 2.94 13.79 2.94 4.2C2.94 3.82 2.95 3.44 2.97 3.06C3.01 2.47 3.48 2 4.08 2H7.08C7.63 2 8.09 2.39 8.13 2.94C8.16 3.46 8.18 3.98 8.2 4.5C8.35 7.94 9.42 11.25 11.34 14.19C11.65 14.69 11.65 15.32 11.34 15.82L9.92 18.1C11.19 19.97 12.94 21.72 14.81 22.99L17.18 21.57C17.68 21.26 18.31 21.26 18.81 21.57C21.75 23.49 25.06 24.56 28.5 24.71C29.02 24.73 29.54 24.75 30.06 24.78C30.61 24.82 31 25.28 31 25.83V28.83C31 29.43 30.53 29.9 29.94 29.94C29.56 29.96 29.18 29.97 28.8 29.97C22.1 29.97 15.8 27.5 10.8 22.5C5.8 17.5 3.33 11.2 3.33 4.5C3.33 4.12 3.34 3.74 3.36 3.36C3.4 2.77 3.87 2.3 4.47 2.3H7.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 91378-96707</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>K. J. Somaiya Institute of Technology, Sion, <br /> Mumbai - 400022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;