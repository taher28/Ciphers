// src/components/NoteModal.jsx - UPDATED
import React, { useState, useEffect } from 'react';

const NoteModal = ({ note, onSave, onDelete, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [tagSuggestions] = useState(['Personal', 'Work', 'Ideas', 'Learning', 'Projects', 'Journal', 'Tasks']);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setTags(note.tags ? note.tags.join(', ') : '');
    } else {
      setTitle('');
      setContent('');
      setTags('');
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert tags string to array
    const tagsArray = tags.split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
    
    onSave({
      id: note?._id,
      title,
      content,
      tags: tagsArray
    });
  };

  const addTagSuggestion = (tag) => {
    const currentTags = tags.split(',').map(t => t.trim()).filter(t => t);
    if (!currentTags.includes(tag)) {
      setTags([...currentTags, tag].join(', '));
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '700px' }}>
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
              <label htmlFor="note-tags">Tags (comma separated)</label>
              <input
                type="text"
                id="note-tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g., Personal, Work, Ideas"
              />
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Suggestions: </span>
                {tagSuggestions.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => addTagSuggestion(tag)}
                    style={{
                      padding: '2px 8px',
                      background: '#f0f0f0',
                      border: '1px solid #ddd',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
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
                onClick={() => onDelete(note._id)}
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