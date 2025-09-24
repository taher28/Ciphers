// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ciphersoul', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Test route for Experiment 01
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'MERN Stack Communication Successful!',
    timestamp: new Date().toISOString(),
    status: 'Active'
  });
});

// Import routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/interactions', require('./routes/interactions'));
app.use('/api/analytics', require('./routes/analytics'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});