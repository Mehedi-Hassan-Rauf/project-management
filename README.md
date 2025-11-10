# Project Management System - MVP

A streamlined project management system built with the MERN stack (MongoDB, Express, React, Node.js) featuring authentication, project/task management, and role-based access control.

## 🚀 Quick Start Guide (6-7 Hours Development Time)

### Features
- ✅ User Authentication (Login/Register with JWT)
- ✅ Role-based Access Control (Admin/Member)
- ✅ Project Management (CRUD operations)
- ✅ Task Management (Create, Update Status, Delete)
- ✅ Responsive UI with Tailwind CSS
- ✅ Context API for State Management

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository
```bash
cd /home/nasemul1/Documents/Web\ Development/Projects/project-management
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your configuration
# For local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/project_management

# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/project_management

# Generate a secure JWT secret
# JWT_SECRET=your_super_secure_random_string_here

# Start the server
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📊 Database Setup

### Local MongoDB
```bash
# Start MongoDB service
sudo systemctl start mongod

# Or using brew on macOS
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string and update `.env`
4. Whitelist your IP address

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Projects
- `GET /api/projects` - Get all projects (Protected)
- `POST /api/projects` - Create project (Admin only)
- `GET /api/projects/:id` - Get project by ID (Protected)
- `PUT /api/projects/:id` - Update project (Admin only)
- `DELETE /api/projects/:id` - Delete project (Admin only)

### Tasks
- `GET /api/tasks/project/:projectId` - Get tasks by project (Protected)
- `POST /api/tasks` - Create task (Admin only)
- `GET /api/tasks/:id` - Get task by ID (Protected)
- `PUT /api/tasks/:id` - Update task (Protected - Members can update their own task status)
- `DELETE /api/tasks/:id` - Delete task (Admin only)

## 👥 User Roles

### Admin
- Create, update, and delete projects
- Create, update, and delete tasks
- Assign tasks to team members
- View all projects and tasks

### Member
- View assigned projects
- View tasks
- Update status of their own assigned tasks

## 🎨 Tech Stack

### Backend
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- bcryptjs - Password hashing

### Frontend
- React 18 - UI library
- React Router - Routing
- Context API - State management
- Axios - HTTP client
- Tailwind CSS - Styling
- Vite - Build tool

## 📱 Usage

### 1. Register an Account
- Navigate to `http://localhost:5173/register`
- Choose role (Admin or Member)
- Create account

### 2. Login
- Navigate to `http://localhost:5173/login`
- Enter credentials

### 3. Create Project (Admin only)
- Click "New Project" button
- Fill in project details
- Submit

### 4. Create Tasks (Admin only)
- Open project detail page
- Click "Add Task"
- Assign to team members
- Set priority and due date

### 5. Update Task Status (Members)
- Open project detail page
- Change task status dropdown (To Do, In Progress, Done)

## 🚢 Deployment

### Backend Deployment (Railway/Render)

#### Using Railway:
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Add environment variables in Railway dashboard
# Deploy
railway up
```

#### Using Render:
1. Create account at [Render](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables
7. Deploy

### Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Set environment variable
# VITE_API_URL=your_backend_url

# Production deployment
vercel --prod
```

Or use Vercel Dashboard:
1. Import repository
2. Select frontend folder
3. Add environment variable: `VITE_API_URL`
4. Deploy

## 📁 Project Structure

```
project-management/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Modal.jsx
    │   │   ├── Navbar.jsx
    │   │   └── PrivateRoute.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── Login.jsx
    │   │   ├── ProjectDetail.jsx
    │   │   └── Register.jsx
    │   ├── services/
    │   │   ├── api.js
    │   │   ├── authService.js
    │   │   ├── projectService.js
    │   │   └── taskService.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

## 🐛 Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify `.env` file exists and has correct values
- Check port 5000 is not in use

### Frontend won't start
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check port 5173 is not in use

### CORS errors
- Ensure backend `CLIENT_URL` in `.env` matches frontend URL
- Check CORS configuration in `server.js`

### Authentication errors
- Verify JWT_SECRET is set in backend `.env`
- Check token is being sent in Authorization header

## 📈 Future Enhancements

- [ ] File upload functionality
- [ ] Real-time notifications
- [ ] Activity logs
- [ ] Team member management UI
- [ ] Advanced analytics dashboard
- [ ] Email notifications
- [ ] Drag-and-drop Kanban board
- [ ] Comment system
- [ ] Search and filter functionality

## 📄 License

MIT

## 👨‍💻 Author

Built following the MVP roadmap for rapid development
