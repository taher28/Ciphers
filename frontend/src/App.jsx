// src/App.jsx - UPDATED VERSION
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Vault from './components/Vault';
import SecurityDashboard from './components/SecurityDashboard';
import Settings from './components/Settings';
import PreLoginNavbar from './components/PreLoginNavbar';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Security from './components/Security';
import Pricing from './components/Pricing';
import Profile from './components/Profile';
import Analytics from './components/Analytics';
import TestConnection from './components/TestConnection';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        {!isAuthenticated ? (
          <>
            <PreLoginNavbar />
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/features" element={<Features />} />
              <Route path="/security-info" element={<Security />} /> {/* Changed route */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </>
        ) : (
          <Dashboard user={user} onLogout={handleLogout}>
            <Routes>
              {/* Private Routes */}
              <Route path="/vault" element={<><TestConnection /><Vault /></>} />
              <Route path="/security" element={<SecurityDashboard />} /> {/* This is the sidebar security */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/" element={<Navigate to="/vault" />} />
              <Route path="*" element={<Navigate to="/vault" />} />
            </Routes>
          </Dashboard>
        )}
      </div>
    </Router>
  );
}

export default App;