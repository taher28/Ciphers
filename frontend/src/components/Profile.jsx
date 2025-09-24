// src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    avatar: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/profile/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/profile/me', profile, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Profile updated successfully!');
      setIsEditing(false);
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error updating profile');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1>Profile Management</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {message && (
        <div style={{
          padding: '10px',
          backgroundColor: message.includes('Error') ? '#fee' : '#efe',
          border: `1px solid ${message.includes('Error') ? '#fcc' : '#cfc'}`,
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {message}
        </div>
      )}

      <div className="settings-section">
        <div className="setting-item">
          <div className="setting-info">
            <h4>Name</h4>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            ) : (
              <p>{profile.name}</p>
            )}
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h4>Email</h4>
            <p>{profile.email}</p>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h4>Bio</h4>
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p>{profile.bio || 'No bio provided'}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;