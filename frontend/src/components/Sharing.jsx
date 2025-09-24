// src/components/Sharing.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Sharing = ({ note }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleShare = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/interactions/share', {
        noteId: note._id,
        sharedWithEmail: email
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMessage('Note shared successfully!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error sharing note');
    }
  };

  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
      <h4>Share this note</h4>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button className="btn btn-primary" onClick={handleShare}>
          Share
        </button>
      </div>
      {message && <p style={{ color: message.includes('Error') ? 'red' : 'green', marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default Sharing;