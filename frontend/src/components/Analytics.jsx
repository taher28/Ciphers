// src/components/Analytics.jsx - UPDATED WITH REAL DATA
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('monthly');

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/analytics/stats?range=${timeRange}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  // Refresh analytics when new notes are added
  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnalytics();
    }, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Analytics Dashboard</h1>
        </div>
        <div className="security-card" style={{ textAlign: 'center', padding: '40px' }}>
          <div>Loading real-time analytics...</div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Analytics Dashboard</h1>
        </div>
        <div className="security-card" style={{ textAlign: 'center', padding: '40px' }}>
          <div>No data available. Create some notes with tags to see analytics!</div>
        </div>
      </div>
    );
  }

  // User Growth Chart - Real Data
  const userGrowthData = {
    labels: stats.userGrowth?.map(item => item.period) || [],
    datasets: [
      {
        label: 'Notes Created',
        data: stats.userGrowth?.map(item => item.notes) || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const userGrowthOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Your Notes Growth Over Time'
      },
      legend: {
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Notes'
        }
      }
    }
  };

  // Resource Distribution - Real Tags Data
  const resourceDistributionData = {
    labels: stats.resourceDistribution?.map(item => item.category) || [],
    datasets: [
      {
        label: 'Number of Notes',
        data: stats.resourceDistribution?.map(item => item.count) || [],
        backgroundColor: stats.resourceDistribution?.map(item => item.color) || [],
        borderColor: stats.resourceDistribution?.map(item => item.color) || [],
        borderWidth: 2,
      },
    ],
  };

  const resourceDistributionOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Notes Distribution by Tags'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} notes (${percentage}%)`;
          }
        }
      }
    },
  };

  // Daily Activity - Real Data
  const dailyActivityData = {
    labels: stats.dailyActivity?.labels || [],
    datasets: [
      {
        label: 'Notes Created',
        data: stats.dailyActivity?.data || [],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  const dailyActivityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Recent Activity'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Notes'
        }
      }
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Analytics Dashboard</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label>Time Range: </label>
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #e0e0e0' }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="all">All Time</option>
          </select>
          <button 
            onClick={fetchAnalytics}
            style={{ 
              padding: '8px 12px', 
              background: '#2d2d2d', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="security-cards">
        <div className="security-card">
          <h3>📊 Total Notes</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.totalNotes}
          </p>
          <p>Your total notes</p>
        </div>
        
        <div className="security-card">
          <h3>🏷️ Tagged Notes</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.taggedNotes}
          </p>
          <p>Notes with tags</p>
        </div>
        
        <div className="security-card">
          <h3>📈 Recent Activity</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.recentNotes}
          </p>
          <p>notes this {timeRange}</p>
        </div>
        
        <div className="security-card">
          <h3>🔖 Unique Tags</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.uniqueTags}
          </p>
          <p>different tags used</p>
        </div>
      </div>

      {/* Real-time Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '30px' }}>
        <div className="security-card">
          <Line data={userGrowthData} options={userGrowthOptions} />
        </div>

        <div className="security-card">
          <Doughnut data={resourceDistributionData} options={resourceDistributionOptions} />
        </div>

        <div className="security-card" style={{ gridColumn: 'span 2' }}>
          <Bar data={dailyActivityData} options={dailyActivityOptions} />
        </div>
      </div>

      {/* Tag Statistics */}
      {stats.resourceDistribution && stats.resourceDistribution.length > 0 && (
        <div className="security-card" style={{ marginTop: '24px' }}>
          <h3>📋 Tag Statistics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
            {stats.resourceDistribution.slice(0, 6).map((tag, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  background: tag.color, 
                  borderRadius: '50%', 
                  margin: '0 auto 10px' 
                }}></div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2d2d2d' }}>{tag.count}</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>{tag.category}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;