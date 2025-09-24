// src/components/Analytics.jsx
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

// Register ChartJS components
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
  const [timeRange, setTimeRange] = useState('monthly'); // daily, weekly, monthly

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
      // Mock data for demonstration
      setStats(getMockData());
    } finally {
      setLoading(false);
    }
  };

  const getMockData = () => {
    const baseData = {
      totalNotes: 47,
      totalUsers: 5,
      recentNotes: 12,
      averageNotesPerWeek: 8,
      userGrowth: [
        { period: 'Jan', users: 2, notes: 15 },
        { period: 'Feb', users: 3, notes: 22 },
        { period: 'Mar', users: 4, notes: 35 },
        { period: 'Apr', users: 5, notes: 47 }
      ],
      resourceDistribution: [
        { category: 'Personal', notes: 25, color: '#FF6384' },
        { category: 'Work', notes: 12, color: '#36A2EB' },
        { category: 'Ideas', notes: 6, color: '#FFCE56' },
        { category: 'Learning', notes: 4, color: '#4BC0C0' }
      ],
      dailyActivity: [12, 19, 8, 15, 12, 17, 14, 16, 11, 13, 15, 18]
    };

    return baseData;
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Analytics Dashboard</h1>
        </div>
        <div className="security-card" style={{ textAlign: 'center', padding: '40px' }}>
          <div>Loading analytics data...</div>
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
          <div>No data available</div>
        </div>
      </div>
    );
  }

  // User Growth Chart Data
  const userGrowthData = {
    labels: stats.userGrowth.map(item => item.period),
    datasets: [
      {
        label: 'Number of Users',
        data: stats.userGrowth.map(item => item.users),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y',
        tension: 0.4
      },
      {
        label: 'Total Notes',
        data: stats.userGrowth.map(item => item.notes),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y1',
        tension: 0.4
      }
    ]
  };

  const userGrowthOptions = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Number of Users'
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Total Notes'
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'User Growth & Notes Over Time'
      },
      legend: {
        position: 'top',
      }
    }
  };

  // Resource Distribution Chart Data
  const resourceDistributionData = {
    labels: stats.resourceDistribution.map(item => item.category),
    datasets: [
      {
        label: 'Number of Notes',
        data: stats.resourceDistribution.map(item => item.notes),
        backgroundColor: stats.resourceDistribution.map(item => item.color),
        borderColor: stats.resourceDistribution.map(item => item.color),
        borderWidth: 2,
      },
    ],
  };

  const resourceDistributionOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Notes Distribution by Category'
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

  // Daily Activity Chart Data
  const dailyActivityData = {
    labels: ['6am', '9am', '12pm', '3pm', '6pm', '9pm', '12am', '3am'],
    datasets: [
      {
        label: 'Notes Created',
        data: stats.dailyActivity,
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
        text: 'Daily Activity Pattern'
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
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="security-cards">
        <div className="security-card">
          <h3>📊 Total Notes</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.totalNotes}
          </p>
          <p>All time notes created</p>
        </div>
        
        <div className="security-card">
          <h3>👥 Total Users</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.totalUsers}
          </p>
          <p>Registered users</p>
        </div>
        
        <div className="security-card">
          <h3>📈 Recent Activity</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.recentNotes}
          </p>
          <p>notes this {timeRange}</p>
        </div>
        
        <div className="security-card">
          <h3>📅 Weekly Average</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', margin: '10px 0' }}>
            {stats.averageNotesPerWeek}
          </p>
          <p>notes per week</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '30px' }}>
        {/* User Growth Chart */}
        <div className="security-card">
          <Line data={userGrowthData} options={userGrowthOptions} />
        </div>

        {/* Resource Distribution Chart */}
        <div className="security-card">
          <Doughnut data={resourceDistributionData} options={resourceDistributionOptions} />
        </div>

        {/* Daily Activity Chart */}
        <div className="security-card" style={{ gridColumn: 'span 2' }}>
          <Bar data={dailyActivityData} options={dailyActivityOptions} />
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="security-card" style={{ marginTop: '24px' }}>
        <h3>📋 Detailed Statistics</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2d2d2d' }}>{stats.totalNotes}</div>
            <div style={{ color: '#666' }}>Total Notes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2d2d2d' }}>{stats.totalUsers}</div>
            <div style={{ color: '#666' }}>Active Users</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2d2d2d' }}>{stats.recentNotes}</div>
            <div style={{ color: '#666' }}>Recent Notes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2d2d2d' }}>
              {Math.round(stats.totalNotes / stats.totalUsers)}
            </div>
            <div style={{ color: '#666' }}>Avg per User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;