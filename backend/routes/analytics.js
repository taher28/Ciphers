// backend/routes/analytics.js
const express = require('express');
const auth = require('../middleware/auth');
const Note = require('../models/Note');
const User = require('../models/User');
const mongoose = require('mongoose');
const router = express.Router();

// Get comprehensive analytics
router.get('/stats', auth, async (req, res) => {
  try {
    const { range = 'monthly' } = req.query;
    
    const totalNotes = await Note.countDocuments({ user: req.user.userId });
    const totalUsers = await User.countDocuments();
    
    // Calculate recent notes based on time range
    let dateFilter = new Date();
    switch (range) {
      case 'daily':
        dateFilter.setDate(dateFilter.getDate() - 1);
        break;
      case 'weekly':
        dateFilter.setDate(dateFilter.getDate() - 7);
        break;
      case 'monthly':
        dateFilter.setMonth(dateFilter.getMonth() - 1);
        break;
    }
    
    const recentNotes = await Note.countDocuments({ 
      user: req.user.userId,
      createdAt: { $gte: dateFilter }
    });

    // User growth data (mock for now - enhance with real data)
    const userGrowth = [
      { period: 'Jan', users: 2, notes: 15 },
      { period: 'Feb', users: 3, notes: 22 },
      { period: 'Mar', users: 4, notes: 35 },
      { period: 'Apr', users: 5, notes: totalNotes }
    ];

    // Resource distribution by tags/categories
    const notesByCategory = await Note.aggregate([
      { $match: { user: mongoose.Types.ObjectId(req.user.userId) } },
      { $unwind: { path: '$tags', preserveNullAndEmptyArrays: true } },
      { 
        $group: { 
          _id: '$tags' || 'Uncategorized',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const resourceDistribution = notesByCategory.map((item, index) => ({
      category: item._id,
      notes: item.count,
      color: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'][index] || '#C9CBCF'
    }));

    // Daily activity pattern (mock data - enhance with real usage patterns)
    const dailyActivity = [12, 19, 8, 15, 12, 17, 14, 16];

    res.json({
      totalNotes,
      totalUsers,
      recentNotes,
      averageNotesPerWeek: Math.round(totalNotes / 4), // Assuming 4 weeks
      userGrowth,
      resourceDistribution,
      dailyActivity
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Error fetching analytics' });
  }
});

module.exports = router;