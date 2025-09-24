// backend/models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  encrypted: { type: Boolean, default: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);