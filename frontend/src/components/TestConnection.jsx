// src/components/TestConnection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [status, setStatus] = useState('Testing...');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test');
        setStatus('Connected Successfully');
        setTimestamp(response.data.timestamp);
      } catch (error) {
        setStatus('Connection Failed');
        console.error('Connection test failed:', error);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="security-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: status === 'Connected Successfully' ? '#2ecc71' : '#e74c3c'
        }}></div>
        <span>Status: {status}</span>
      </div>
      {timestamp && <p>Last checked: {new Date(timestamp).toLocaleString()}</p>}
      <button 
        onClick={() => window.location.reload()}
        className="btn btn-outline"
        style={{ marginTop: '10px' }}
      >
        Test Again
      </button>
    </div>
  );
};

export default TestConnection;