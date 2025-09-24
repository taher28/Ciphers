// src/components/Login.jsx (Updated)
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        onLogin(response.data.user);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Your Private Thoughts, Secured</h1>
        <p>CipherSoul uses military-grade encryption to keep your journal entries private. Only you can access your thoughts and memories.</p>
        <ul className="feature-list">
          <li>✓ End-to-End Encryption</li>
          <li>✓ Zero-Knowledge Architecture</li>
          <li>✓ Cross-Platform Sync</li>
          <li>✓ Secure Authentication</li>
        </ul>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Welcome back' : 'Create your account'}</h2>
          <p>{isLogin ? 'Sign in to your secure journal' : 'Join us to start your encrypted journal'}</p>
          
          {error && (
            <div style={{
              padding: '10px',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '4px',
              marginBottom: '20px',
              color: '#c33'
            }}>
              {error}
            </div>
          )}

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {!isLogin && (
              <div className="password-strength">
                <div 
                  className="strength-meter" 
                  style={{
                    width: `${passwordStrength}%`,
                    backgroundColor: passwordStrength < 50 ? '#e74c3c' : passwordStrength < 75 ? '#f39c12' : '#2ecc71'
                  }}
                ></div>
              </div>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{width: '100%'}}
            disabled={loading}
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
          
          <p style={{textAlign: 'center', marginTop: '24px'}}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button" 
              className="btn btn-link" 
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;