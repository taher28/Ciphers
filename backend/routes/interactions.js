// backend/routes/interactions.js
const express = require('express');
const auth = require('../middleware/auth');
const Share = require('../models/Share');
const Note = require('../models/Note');
const router = express.Router();

// Share note with another user
router.post('/share', auth, async (req, res) => {
  try {
    const { noteId, sharedWithEmail, permission } = req.body;
    
    const note = await Note.findOne({ _id: noteId, user: req.user.userId });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const share = new Share({
      note: noteId,
      sharedBy: req.user.userId,
      sharedWithEmail,
      permission: permission || 'view',
      sharedAt: new Date()
    });

    await share.save();
    
    // Populate the response with note details
    await share.populate('note');
    
    res.status(201).json({
      message: 'Note shared successfully',
      share
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get shared notes
router.get('/shared', auth, async (req, res) => {
  try {
    const sharedNotes = await Share.find({ sharedWithEmail: req.user.email })
      .populate('note')
      .populate('sharedBy', 'name email');
    
    res.json(sharedNotes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Like a note
router.post('/:noteId/like', auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const likeIndex = note.likes.indexOf(req.user.userId);
    if (likeIndex > -1) {
      note.likes.splice(likeIndex, 1); // Unlike
    } else {
      note.likes.push(req.user.userId); // Like
    }

    await note.save();
    res.json({ likes: note.likes.length, liked: likeIndex === -1 });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;