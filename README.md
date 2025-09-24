# CipherSoul - Secure Journaling Application

![CipherSoul Logo](https://img.icons8.com/color/96/000000/private2.png)

A privacy-first, encrypted journaling application built with the MERN stack that ensures your personal thoughts remain truly private.

## 🚀 Features

### 🔒 Security Features
- **Military-Grade Encryption**: AES-256 encryption for all notes
- **Zero-Knowledge Architecture**: We never access your encryption keys
- **End-to-End Encryption**: Notes encrypted before leaving your device
- **Biometric Authentication**: Fingerprint/Face ID support (future scope)

### 📝 Journaling Features
- **Rich Text Notes**: Create and organize personal journal entries
- **Custom Tags**: Categorize notes with personalized tags
- **Cross-Platform Sync**: Access your journal from any device
- **Real-time Analytics**: Visualize your writing habits and patterns

### 📊 Analytics & Insights
- **User Growth Tracking**: Monitor your journaling journey over time
- **Tag Distribution**: See how you categorize your thoughts
- **Activity Patterns**: Identify your most productive times
- **Real-time Updates**: Analytics update instantly as you write

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI framework
- **Chart.js** - Data visualization
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Security
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **AES-256** - Note encryption

## 📋 Prerequisites

Before running this application, ensure you have installed:
- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ciphersoul.git
cd ciphersoul
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo "MONGODB_URI=mongodb://localhost:27017/ciphersoul" > .env
echo "JWT_SECRET=your-super-secret-jwt-key-here" >> .env
echo "PORT=5000" >> .env

# Start MongoDB service (varies by OS)
# Windows: mongod
# macOS: brew services start mongodb-community
# Ubuntu: sudo systemctl start mongodb

# Start the backend server
npm run dev
```

### 3. Frontend Setup
```bash
# Open new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the React application
npm start
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **MongoDB**: mongodb://localhost:27017

## 🏗️ Project Structure

```
ciphersoul/
├── backend/
│   ├── models/          # MongoDB models (User, Note, Share)
│   ├── routes/          # API routes (auth, notes, analytics)
│   ├── middleware/      # Authentication middleware
│   ├── server.js        # Express server setup
│   └── package.json
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── Auth/    # Login/Register
│   │   │   ├── Notes/   # Vault and Note management
│   │   │   ├── Analytics/ # Data visualization
│   │   │   └── Common/  # Shared components
│   │   ├── services/    # API services
│   │   ├── utils/       # Utilities (encryption, helpers)
│   │   └── App.js       # Main App component
│   └── package.json
└── README.md
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification

### Notes Management
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

### Analytics
- `GET /api/analytics/stats` - Get user analytics
- `GET /api/analytics/trend` - Get notes trend data

### User Management
- `GET /api/profile/me` - Get user profile
- `PUT /api/profile/me` - Update profile

## 🔒 Security Implementation

### Data Encryption
```javascript
// All notes are encrypted before storage
const encryptedContent = AES.encrypt(noteContent, userKey);
```

### Authentication Flow
1. User registers with email and password
2. Password is hashed using bcryptjs
3. JWT token issued upon successful authentication
4. Token validated for protected routes

### Zero-Knowledge Architecture
- Encryption keys never leave user's device
- Server only stores encrypted data
- Even administrators cannot access user content

## 📊 Analytics Features

### Real-time Data Visualization
- **User Growth Charts**: Track note creation over time
- **Tag Distribution**: Visualize note categorization
- **Activity Patterns**: Identify writing habits
- **Productivity Insights**: Weekly/monthly statistics

### Sample Analytics Output
```json
{
  "totalNotes": 47,
  "recentNotes": 12,
  "taggedNotes": 35,
  "uniqueTags": 8,
  "userGrowth": [...],
  "resourceDistribution": [...]
}
```

## 🚀 Usage Guide

### Getting Started
1. **Register** a new account or **Login** with existing credentials
2. **Create your first note** in the Vault section
3. **Add tags** to categorize your notes (e.g., "Personal", "Work", "Ideas")
4. **Explore analytics** to see your writing patterns
5. **Manage your profile** and security settings

### Note Management
- Click "New Note" to create journal entries
- Use tags for better organization
- Edit or delete notes as needed
- All changes sync in real-time

### Analytics Interpretation
- **User Growth Chart**: Shows your journaling journey timeline
- **Tag Distribution**: Reveals your thought categories
- **Activity Patterns**: Helps identify productive periods

## 🔮 Future Enhancements

### Planned Features
- [ ] **Mobile Applications** (iOS & Android)
- [ ] **Biometric Authentication** integration
- [ ] **Advanced Encryption** with user-controlled keys
- [ ] **Note Sharing** with permission controls
- [ ] **Export Functionality** (PDF, text formats)
- [ ] **AI-powered Insights** (sentiment analysis)
- [ ] **Offline Mode** with sync capabilities

### Technical Improvements
- [ ] **Microservices Architecture**
- [ ] **Redis Caching** for performance
- [ ] **Docker Containerization**
- [ ] **CI/CD Pipeline** implementation
- [ ] **Unit & Integration Testing**

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```bash
# Ensure MongoDB is running
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # macOS
net start MongoDB  # Windows
```

**Port Already in Use**
```bash
# Kill processes using ports 3000 or 5000
npx kill-port 3000
npx kill-port 5000
```

**Dependency Issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Debug Mode
Enable detailed logging by setting environment variables:
```bash
# Backend debug
DEBUG=app:* npm run dev

# Frontend debug
REACT_APP_DEBUG=true npm start
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Team

**Group 19 - K.J. Somaiya Institute of Technology**
- Bhumit Nagda (31/A)
- Eshant Palkar (37/A) 
- Taher Saterdawala (24/B)
- Gautham Seshapalli (26/B)

**Guide**: Mrs. Nasim Shah

## 🙏 Acknowledgments

- **K.J. Somaiya Institute of Technology** for academic support
- **MongoDB University** for database guidance
- **Chart.js** team for excellent visualization library
- **React.js** community for comprehensive documentation

## 📞 Support

For support, email support@ciphersoul.com or join our Slack channel.

---

<div align="center">

**Built with ❤️ for secure and private journaling**

*"Your thoughts deserve the highest level of privacy"*

</div>
