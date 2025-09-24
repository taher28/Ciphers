// components/SecurityDashboard.js
import React, { useState } from 'react';

const SecurityDashboard = () => {
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [activityLog] = useState([
    {
      id: 1,
      type: 'login',
      description: 'Successful login from new device',
      date: '2023-10-15T14:30:00',
      location: 'Mumbai, India'
    },
    {
      id: 2,
      type: 'note_created',
      description: 'New note created: "Project Ideas"',
      date: '2023-10-14T09:15:00',
      location: 'Mumbai, India'
    },
    {
      id: 3,
      type: 'backup',
      description: 'Encrypted backup completed successfully',
      date: '2023-10-12T16:45:00',
      location: 'Mumbai, India'
    },
    {
      id: 4,
      type: 'failed_attempt',
      description: 'Failed login attempt',
      date: '2023-10-10T22:10:00',
      location: 'Unknown location'
    }
  ]);

  return (
    <div>
      <div className="page-header">
        <h1>Security Dashboard</h1>
      </div>

      <div className="security-cards">
        <div className="security-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Encryption Status
          </h3>
          <p>All your notes are encrypted using AES-256 encryption. Your data remains secure both at rest and in transit.</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71'}}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>All notes encrypted</span>
          </div>
        </div>

        <div className="security-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3 19.2 15.5 19.2 15.8C19.2 16.2 19.4 16.6 19.7 16.9C20 17.2 20.4 17.4 20.8 17.4C21.2 17.4 21.6 17.2 21.9 16.9C22.2 16.6 22.4 16.2 22.4 15.8C22.4 15.4 22.2 15 21.9 14.7C21.6 14.4 21.2 14.2 20.8 14.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.1001 9.3C2.4001 9 2.8001 8.8 3.2001 8.8C3.6001 8.8 4.0001 9 4.3001 9.3C4.6001 9.6 4.8001 10 4.8001 10.4C4.8001 10.8 4.6001 11.2 4.3001 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Session Settings
          </h3>
          <p>Automatically lock the app after a period of inactivity.</p>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px'}}>
            <span>Timeout after:</span>
            <select 
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(parseInt(e.target.value))}
              style={{padding: '6px 12px', borderRadius: '4px', border: '1px solid #e0e0e0'}}
            >
              <option value={5}>5 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
            </select>
          </div>
        </div>

        <div className="security-card">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 9C5 5 7 2 12 2C17 2 19 5 19 9C19 13 17 16 12 16C7 16 5 13 5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 22H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Recent Backups
          </h3>
          <p>Your data is regularly backed up in encrypted format. Last backup was completed 2 days ago.</p>
          <button className="btn btn-outline" style={{marginTop: '12px'}}>
            Create Backup Now
          </button>
        </div>
      </div>

      <div className="activity-log">
        <h3>Recent Activity</h3>
        {activityLog.map(activity => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">
              {activity.type === 'login' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {activity.type === 'note_created' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {activity.type === 'backup' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 13H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {activity.type === 'failed_attempt' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div className="activity-details">
              <h4>{activity.description}</h4>
              <p>
                {new Date(activity.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} • {activity.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityDashboard;