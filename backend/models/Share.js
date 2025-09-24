// backend/models/Share.js
const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
  note: { type: mongoose.Schema.Types.ObjectId, ref: 'Note', required: true },
  sharedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sharedWithEmail: { type: String, required: true },
  permission: { type: String, enum: ['view', 'edit'], default: 'view' },
  sharedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Share', shareSchema);