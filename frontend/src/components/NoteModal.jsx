// components/NoteModal.js
import React, { useState, useEffect } from 'react';

const NoteModal = ({ note, onSave, onDelete, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: note?.id,
      title,
      content
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{note ? 'Edit Note' : 'New Note'}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="note-title">Title</label>
              <input
                type="text"
                id="note-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="note-content">Content</label>
              <textarea
                id="note-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="10"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                required
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            {note && (
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={() => onDelete(note.id)}
                style={{color: '#e74c3c', borderColor: '#e74c3c'}}
              >
                Delete
              </button>
            )}
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;