// src/components/Vault.jsx (Updated)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteModal from './NoteModal';

const Vault = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/notes', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNote = async (noteData) => {
    try {
      const token = localStorage.getItem('token');
      
      if (noteData.id) {
        // Update existing note
        await axios.put(`http://localhost:5000/api/notes/${noteData.id}`, noteData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        // Create new note
        await axios.post('http://localhost:5000/api/notes', noteData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      
      fetchNotes(); // Refresh the list
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchNotes(); // Refresh the list
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  if (loading) {
    return <div>Loading your notes...</div>;
  }

  return (
    <div>
      <div className="page-header">
        <h1>My Vaults ({notes.length} notes)</h1>
        <button className="btn btn-primary" onClick={() => {
          setSelectedNote(null);
          setIsModalOpen(true);
        }}>
          New Note
        </button>
      </div>

      <div className="notes-grid">
        <div className="note-card add-note-card" onClick={() => {
          setSelectedNote(null);
          setIsModalOpen(true);
        }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Add new note</span>
        </div>

        {notes.map(note => (
          <div key={note._id} className="note-card" onClick={() => {
            setSelectedNote(note);
            setIsModalOpen(true);
          }}>
            <h3>{note.title}</h3>
            <div className="note-date">
              {new Date(note.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            <div className="note-content">
              {note.content}
            </div>
            {note.tags && note.tags.length > 0 && (
              <div className="note-tags">
                {note.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <NoteModal
          note={selectedNote}
          onSave={handleSaveNote}
          onDelete={handleDeleteNote}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Vault;