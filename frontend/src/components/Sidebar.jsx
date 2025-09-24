// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ user, onLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>
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
          CipherSoul
        </h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/vault" className={({ isActive }) => isActive ? 'active' : ''}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              My Vault
            </NavLink>
          </li>
          <li>
  <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Profile
  </NavLink>
</li>
<li>
  <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Analytics
  </NavLink>
</li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4 15C19.2669 15.3 19.2 15.5 19.2 15.8C19.2 16.2 19.4 16.6 19.7 16.9C20 17.2 20.4 17.4 20.8 17.4C21.2 17.4 21.6 17.2 21.9 16.9C22.2 16.6 22.4 16.2 22.4 15.8C22.4 15.4 22.2 15 21.9 14.7C21.6 14.4 21.2 14.2 20.8 14.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.1001 9.3C2.4001 9 2.8001 8.8 3.2001 8.8C3.6001 8.8 4.0001 9 4.3001 9.3C4.6001 9.6 4.8001 10 4.8001 10.4C4.8001 10.8 4.6001 11.2 4.3001 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.30005 4.3L5.80005 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.2 18.2L19.7 19.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.80005 18.2L4.30005 19.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.7 4.3L18.2 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Settings
            </NavLink>
          </li>
<li>
  <NavLink to="/security" className={({ isActive }) => isActive ? 'active' : ''}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Security Dashboard
  </NavLink>
</li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <div style={{fontWeight: '600'}}>{user?.name || 'User'}</div>
            <div style={{fontSize: '0.8rem', color: '#aaa'}}>{user?.email || 'user@example.com'}</div>
          </div>
        </div>
        <button 
          className="btn btn-outline" 
          onClick={onLogout}
          style={{width: '100%', marginTop: '12px', color: 'white', borderColor: '#404040'}}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;