// backend/routes/notes.js
const express = require('express');
const auth = require('../middleware/auth');
const Note = require('../models/Note');
const router = express.Router();

// Get all notes for user
router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single note
router.get('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user.userId });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create note
router.post('/', auth, async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    
    const note = new Note({
      title,
      content,
      tags: tags || [],
      user: req.user.userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update note
router.put('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user.userId });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    Object.assign(note, req.body);
    note.updatedAt = new Date();
    await note.save();
    
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete note
router.delete('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.user.userId 
    });
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;