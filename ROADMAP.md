# Project Management System - Development Roadmap

## 6-7 Hour MVP Implementation Guide

### ✅ Phase 1: Setup & Configuration (45 minutes)

**Backend Setup (20 min)**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your MongoDB URI and JWT secret
```

**Frontend Setup (20 min)**
```bash
cd frontend
npm install
```

**Database Setup (5 min)**
- Start MongoDB locally or setup MongoDB Atlas
- No manual collection creation needed (Mongoose will handle it)

---

### ✅ Phase 2: Backend Development (2.5 hours)

**Step 1: Database Models (30 min)** ✅ DONE
- [x] User model with role-based access
- [x] Project model with manager and team members
- [x] Task model with status and priority

**Step 2: Authentication (45 min)** ✅ DONE
- [x] JWT token generation
- [x] Password hashing with bcrypt
- [x] Auth middleware for protected routes
- [x] Register endpoint
- [x] Login endpoint

**Step 3: Project APIs (45 min)** ✅ DONE
- [x] GET all projects (filtered by user role)
- [x] GET single project
- [x] POST create project (admin only)
- [x] PUT update project (admin only)
- [x] DELETE project (admin only)

**Step 4: Task APIs (30 min)** ✅ DONE
- [x] GET tasks by project
- [x] POST create task (admin only)
- [x] PUT update task (members can update status only)
- [x] DELETE task (admin only)

---

### ✅ Phase 3: Frontend Development (2.5 hours)

**Step 1: Authentication UI (45 min)** ✅ DONE
- [x] Login page with form validation
- [x] Register page with role selection
- [x] AuthContext for state management
- [x] Private route wrapper
- [x] Token storage in localStorage

**Step 2: Layout & Navigation (20 min)** ✅ DONE
- [x] Navbar component with user info
- [x] Logout functionality
- [x] Responsive design

**Step 3: Dashboard & Projects (45 min)** ✅ DONE
- [x] Project list view with grid layout
- [x] Create project modal (admin only)
- [x] Delete project functionality
- [x] Project card with status badges
- [x] Navigation to project details

**Step 4: Project Detail & Tasks (40 min)** ✅ DONE
- [x] Project detail page
- [x] Task table with all columns
- [x] Create task modal
- [x] Status update dropdown (role-based)
- [x] Delete task functionality
- [x] Priority and due date display

---

### ⚡ Phase 4: Testing & Polish (1 hour)

**Manual Testing Checklist**

1. **Authentication Flow (15 min)**
   - [ ] Register new admin user
   - [ ] Register new member user
   - [ ] Login with valid credentials
   - [ ] Login with invalid credentials (should fail)
   - [ ] Access protected routes without login (should redirect)

2. **Project Management (15 min)**
   - [ ] Create project as admin
   - [ ] View all projects
   - [ ] Open project detail page
   - [ ] Update project (admin only)
   - [ ] Delete project (admin only)
   - [ ] Try project operations as member (should be restricted)

3. **Task Management (20 min)**
   - [ ] Create task as admin
   - [ ] Assign task to member
   - [ ] View tasks in project
   - [ ] Update task status as member
   - [ ] Try to edit other fields as member (should fail)
   - [ ] Delete task as admin

4. **UI/UX Polish (10 min)**
   - [ ] Check responsive design on mobile
   - [ ] Verify all badges display correctly
   - [ ] Test modal open/close
   - [ ] Check error messages display
   - [ ] Verify loading states work

---

## 🚀 Quick Start Commands

### Terminal 1: Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env: Add MongoDB URI and JWT_SECRET
npm run dev
```

### Terminal 2: Frontend
```bash
cd frontend
npm install
npm run dev
```

### Access Application
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API Health: http://localhost:5000/api/health

---

## 📝 Testing Credentials

After registration, use these test accounts:

**Admin Account**
- Email: admin@example.com
- Password: admin123
- Role: admin

**Member Account**
- Email: member@example.com
- Password: member123
- Role: member

---

## 🔍 Common Issues & Solutions

### Issue: Backend won't start
**Solution:**
- Check MongoDB is running: `sudo systemctl status mongod`
- Verify .env file exists and has correct values
- Check port 5000 is available: `lsof -i :5000`

### Issue: CORS errors
**Solution:**
- Verify CLIENT_URL in backend .env matches frontend URL
- Check CORS middleware in server.js

### Issue: Authentication not working
**Solution:**
- Check JWT_SECRET is set in .env
- Verify token is saved in localStorage
- Check Authorization header format: "Bearer {token}"

### Issue: Can't create/delete (403 error)
**Solution:**
- Verify user role is 'admin'
- Check admin middleware is applied to route
- Confirm token is valid and not expired

---

## 📊 Database Collections

After running the app, you'll have 3 collections:

**users**
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "role": "admin",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

**projects**
```json
{
  "_id": "ObjectId",
  "title": "Website Redesign",
  "description": "Complete redesign of company website",
  "status": "in-progress",
  "managerId": "ObjectId (ref: User)",
  "teamMembers": ["ObjectId", "ObjectId"],
  "startDate": "2025-01-01",
  "endDate": "2025-03-01",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

**tasks**
```json
{
  "_id": "ObjectId",
  "title": "Design homepage mockup",
  "description": "Create initial design concepts",
  "projectId": "ObjectId (ref: Project)",
  "assignedTo": "ObjectId (ref: User)",
  "createdBy": "ObjectId (ref: User)",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2025-01-15",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

---

## 🎯 Development Time Breakdown

| Phase | Duration | Status |
|-------|----------|--------|
| Setup & Install | 45 min | ✅ Files Created |
| Backend Models & Auth | 1.25 hrs | ✅ Complete |
| Backend APIs | 1.25 hrs | ✅ Complete |
| Frontend Auth & Context | 1 hr | ✅ Complete |
| Frontend UI Components | 1.5 hrs | ✅ Complete |
| Testing & Debugging | 1 hr | ⏳ Next Step |
| **Total** | **6-7 hrs** | **Ready to Run** |

---

## 🚢 Deployment Checklist

### Backend (Railway/Render)
- [ ] Push code to GitHub
- [ ] Create new service on Railway/Render
- [ ] Add environment variables (MONGODB_URI, JWT_SECRET, CLIENT_URL)
- [ ] Deploy and get backend URL

### Frontend (Vercel)
- [ ] Update VITE_API_URL in frontend to backend URL
- [ ] Push code to GitHub
- [ ] Import project in Vercel
- [ ] Add environment variable: VITE_API_URL
- [ ] Deploy

### MongoDB (Atlas)
- [ ] Create cluster on MongoDB Atlas
- [ ] Whitelist IP addresses (0.0.0.0/0 for all)
- [ ] Get connection string
- [ ] Update backend MONGODB_URI

---

## 📈 Next Steps (Post-MVP)

1. **Add User Management UI** - List all users, assign to teams
2. **File Uploads** - Add attachments to tasks
3. **Activity Logs** - Track all changes
4. **Email Notifications** - Notify on task assignments
5. **Kanban Board** - Drag-and-drop task management
6. **Search & Filters** - Find projects/tasks quickly
7. **Reports & Analytics** - Project completion metrics

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Mongoose](https://mongoosejs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JWT.io](https://jwt.io/)

---

**Ready to start? Open two terminals and run the Quick Start Commands above!**
