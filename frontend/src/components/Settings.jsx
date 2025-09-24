// components/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    biometrics: true,
    autoLock: true,
    cloudSync: false,
    notifications: true
  });

  const handleSettingChange = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div>
      <div className="page-header">
        <h1>Settings</h1>
      </div>

      <div className="settings-section">
        <h3>Security</h3>
        <div className="setting-item">
          <div className="setting-info">
            <h4>Biometric Authentication</h4>
            <p>Use fingerprint or face recognition to unlock your vault</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.biometrics}
              onChange={() => handleSettingChange('biometrics')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <div className="setting-info">
            <h4>Auto Lock</h4>
            <p>Automatically lock the app after a period of inactivity</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.autoLock}
              onChange={() => handleSettingChange('autoLock')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Backup & Sync</h3>
        <div className="setting-item">
          <div className="setting-info">
            <h4>Cloud Sync</h4>
            <p>Sync your encrypted notes across your devices</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.cloudSync}
              onChange={() => handleSettingChange('cloudSync')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div style={{marginTop: '24px'}}>
          <h4 style={{marginBottom: '16px'}}>Export Your Data</h4>
          <div className="backup-options">
            <div className="backup-option">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4>Export as PDF</h4>
              <p>Download your notes as encrypted PDF files</p>
            </div>
            <div className="backup-option">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4>Export as Text</h4>
              <p>Download your notes as encrypted text files</p>
            </div>
            <div className="backup-option">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 13H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4>Backup All Data</h4>
              <p>Create a complete encrypted backup of your vault</p>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <div className="setting-item">
          <div className="setting-info">
            <h4>Dark Mode</h4>
            <p>Switch to a dark color scheme</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;