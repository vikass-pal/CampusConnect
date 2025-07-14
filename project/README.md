# CampusConnect 🎓

A modern, full-stack social platform designed to enhance college student collaboration and resource sharing. Built with React.js and Node.js, CampusConnect enables students to share study materials, discover campus events, and connect with peers who share similar academic interests.

![CampusConnect](https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## ✨ Features

### 🔐 Authentication & User Management
- Secure JWT-based authentication
- User profiles with bio, skills, and academic year
- Profile picture support
- Password reset functionality

### 📚 Resource Sharing System
- Upload and share study resources (PDFs, links, notes)
- Advanced tagging system for easy categorization
- Like and comment functionality
- Search and filter by tags, subjects, and date
- Download tracking and analytics

### 📅 Event Management
- Create and post campus events (workshops, study groups, tech talks)
- RSVP system with attendee tracking
- Event categories and filtering
- Comments and discussions on events
- Capacity management with waitlists

### 🔍 Discovery & Search
- Advanced search functionality across resources and events
- Filter by multiple criteria (tags, categories, dates)
- Sort by popularity, date, or relevance
- User discovery and networking

### 👥 Social Features
- Like and comment on posts and events
- User profiles with activity tracking
- Follow system for staying updated
- Real-time notifications

### 🛡️ Admin & Moderation
- Admin panel for content moderation
- User management and analytics
- Content reporting system
- Activity monitoring dashboard

## 🚀 Tech Stack

### Frontend
- **React.js 18** with TypeScript for type safety
- **Tailwind CSS** for modern, responsive styling
- **React Router** for navigation
- **React Query** for efficient data fetching
- **React Hook Form** with Zod validation
- **Lucide React** for beautiful icons

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **JWT** for secure authentication
- **Multer** for file uploads
- **bcryptjs** for password hashing
- **Express Rate Limiting** for security

### Development & Deployment
- **Vite** for fast development and building
- **ESLint** and **Prettier** for code quality
- **Jest** and **Supertest** for testing
- **GitHub Actions** for CI/CD
- **Vercel** for frontend deployment
- **Render/Railway** for backend deployment

## 📁 Project Structure

```
campusconnect/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/           # Authentication components
│   │   │   ├── layout/         # Layout components
│   │   │   ├── resources/      # Resource-related components
│   │   │   ├── events/         # Event-related components
│   │   │   └── shared/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API services
│   │   ├── types/              # TypeScript type definitions
│   │   └── utils/              # Utility functions
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   ├── models/             # Database models
│   │   ├── routes/             # API routes
│   │   ├── middleware/         # Custom middleware
│   │   ├── utils/              # Utility functions
│   │   └── config/             # Configuration files
│   ├── tests/                  # Test files
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/campusconnect.git
cd campusconnect
```

### 2. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### 3. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

### 4. Environment Variables

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/campusconnect
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm run test
```

### Backend Tests
```bash
cd backend
npm run test
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables
3. Configure build and start commands
4. Deploy automatically on push

## 📊 Features Roadmap

### Phase 1 (Current) ✅
- [x] User authentication and profiles
- [x] Resource sharing with file uploads
- [x] Event creation and RSVP system
- [x] Search and filtering
- [x] Basic admin panel

### Phase 2 (Planned) 🔄
- [ ] Real-time chat system
- [ ] Study group formation
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Email notifications

### Phase 3 (Future) 📋
- [ ] AI-powered recommendations
- [ ] Integration with university LMS
- [ ] Gamification with badges
- [ ] Video conferencing integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) for the amazing frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [MongoDB](https://mongodb.com/) for the flexible database solution
- [Vercel](https://vercel.com/) for seamless deployment
- [Lucide](https://lucide.dev/) for beautiful icons

---

**⭐ Star this repository if you found it helpful!**

Built with ❤️ for the student community