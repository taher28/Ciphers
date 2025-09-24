// backend/routes/analytics.js - UPDATED WITH CORRECT ObjectId SYNTAX
const express = require('express');
const auth = require('../middleware/auth');
const Note = require('../models/Note');
const User = require('../models/User');
const mongoose = require('mongoose');
const router = express.Router();

// Get comprehensive real analytics
router.get('/stats', auth, async (req, res) => {
  try {
    const { range = 'monthly' } = req.query;
    const userId = req.user.userId;

    // Calculate date range
    let dateFilter = new Date();
    switch (range) {
      case 'weekly':
        dateFilter.setDate(dateFilter.getDate() - 7);
        break;
      case 'monthly':
        dateFilter.setMonth(dateFilter.getMonth() - 1);
        break;
      case 'all':
        dateFilter = new Date(0); // Beginning of time
        break;
    }

    // Total notes for user
    const totalNotes = await Note.countDocuments({ user: userId });

    // Recent notes based on time range
    const recentNotes = await Note.countDocuments({ 
      user: userId,
      createdAt: { $gte: dateFilter }
    });

    // Notes with tags
    const taggedNotes = await Note.countDocuments({ 
      user: userId,
      tags: { $exists: true, $ne: [] }
    });

    // Get all notes for the user with their creation dates
    const userNotes = await Note.find({ user: userId }).sort({ createdAt: 1 });

    // User growth data (based on note creation timeline)
    const userGrowth = generateUserGrowthData(userNotes, range);

    // Resource distribution by tags - FIXED ObjectId syntax
    const notesByTag = await Note.aggregate([
      { 
        $match: { 
          user: new mongoose.Types.ObjectId(userId) // FIXED: using new keyword
        } 
      },
      { 
        $unwind: { 
          path: '$tags', 
          preserveNullAndEmptyArrays: true 
        } 
      },
      { 
        $group: { 
          _id: '$tags' || 'Untagged',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $match: { _id: { $ne: null } } }
    ]);

    const colorPalette = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'];
    const resourceDistribution = notesByTag.map((item, index) => ({
      category: item._id,
      count: item.count,
      color: colorPalette[index % colorPalette.length]
    }));

    // Daily activity pattern (last 7 days) - FIXED ObjectId syntax
    const dailyActivity = await getDailyActivityData(userId, 7);

    // Unique tags count
    const uniqueTags = notesByTag.length;

    res.json({
      totalNotes,
      recentNotes,
      taggedNotes,
      uniqueTags,
      userGrowth,
      resourceDistribution,
      dailyActivity
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Error fetching analytics' });
  }
});

// Helper function to generate user growth data
function generateUserGrowthData(notes, range) {
  if (notes.length === 0) return [];

  const growthData = [];
  const now = new Date();
  let periods = [];

  if (range === 'weekly') {
    // Last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      periods.push({
        date: date,
        label: date.toLocaleDateString('en-US', { weekday: 'short' })
      });
    }
  } else {
    // Last 6 months
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now);
      date.setMonth(date.getMonth() - i);
      periods.push({
        date: date,
        label: date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
      });
    }
  }

  // Calculate cumulative notes for each period
  let cumulativeNotes = 0;
  periods.forEach(period => {
    const periodNotes = notes.filter(note => {
      const noteDate = new Date(note.createdAt);
      if (range === 'weekly') {
        return noteDate.toDateString() === period.date.toDateString();
      } else {
        return noteDate.getMonth() === period.date.getMonth() && 
               noteDate.getFullYear() === period.date.getFullYear();
      }
    }).length;

    cumulativeNotes += periodNotes;
    
    growthData.push({
      period: period.label,
      notes: cumulativeNotes
    });
  });

  return growthData;
}

// Helper function to get daily activity - FIXED ObjectId syntax
async function getDailyActivityData(userId, days = 7) {
  try {
    const dailyCounts = await Note.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId), // FIXED: using new keyword
          createdAt: { $gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000) }
        }
      },
      {
        $group: {
          _id: { 
            $dateToString: { 
              format: "%Y-%m-%d", 
              date: "$createdAt" 
            } 
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Generate labels for the last 'days' days
    const labels = [];
    const data = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
      
      const dayData = dailyCounts.find(d => d._id === dateStr);
      data.push(dayData ? dayData.count : 0);
    }

    return { labels, data };
  } catch (error) {
    console.error('Daily activity error:', error);
    return { labels: [], data: [] };
  }
}

// Simple fallback route for testing
router.get('/test', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    
    // Basic counts without complex aggregation
    const totalNotes = await Note.countDocuments({ user: userId });
    const notesWithTags = await Note.find({ user: userId, tags: { $exists: true, $ne: [] } });
    const taggedNotes = notesWithTags.length;
    
    // Simple tag distribution without aggregation
    const tagMap = {};
    notesWithTags.forEach(note => {
      if (note.tags && Array.isArray(note.tags)) {
        note.tags.forEach(tag => {
          tagMap[tag] = (tagMap[tag] || 0) + 1;
        });
      }
    });
    
    const resourceDistribution = Object.entries(tagMap).map(([category, count], index) => {
      const colorPalette = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
      return {
        category,
        count,
        color: colorPalette[index % colorPalette.length]
      };
    });

    res.json({
      totalNotes,
      recentNotes: totalNotes, // Simplified for demo
      taggedNotes,
      uniqueTags: Object.keys(tagMap).length,
      userGrowth: [
        { period: 'Start', notes: 0 },
        { period: 'Now', notes: totalNotes }
      ],
      resourceDistribution,
      dailyActivity: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [2, 5, 3, 7, 4, 2, 1] // Sample data
      }
    });
  } catch (error) {
    console.error('Test analytics error:', error);
    res.status(500).json({ message: 'Error in test analytics' });
  }
});

module.exports = router;