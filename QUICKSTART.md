# 🚀 QUICK START - Project Management System MVP

## Complete in 6-7 Hours with AI Assistance

---

## 📖 What You're Building

A functional project management system with:
- ✅ User authentication (Login/Register)
- ✅ Two roles: Admin (full control) & Member (limited access)
- ✅ Project CRUD operations
- ✅ Task management with status tracking
- ✅ Clean, responsive UI with Tailwind CSS

---

## ⚡ Step-by-Step Setup (15 minutes)

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Configure Environment Variables

**Backend `.env` file:**
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/project_management
JWT_SECRET=your_super_secret_key_change_this_in_production
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
```

**Frontend `.env` file:**
```bash
cd frontend
cp .env.example .env
```

Edit `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start MongoDB

**Option A: Local MongoDB**
```bash
# Linux
sudo systemctl start mongod

# macOS
brew services start mongodb-community

# Windows
net start MongoDB
```

**Option B: MongoDB Atlas (Cloud - Free)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account and cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`

### Step 4: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
✅ Frontend running on http://localhost:5173

---

## 🎯 Testing Your Application (30 minutes)

### Test 1: User Registration & Authentication

1. **Open browser:** http://localhost:5173
2. **Click "Sign up"**
3. **Create Admin account:**
   - Name: Admin User
   - Email: admin@test.com
   - Role: Admin
   - Password: admin123
4. **You'll be redirected to Dashboard** ✅

### Test 2: Create a Project (Admin)

1. **Click "New Project"** button
2. **Fill in details:**
   - Title: Website Redesign
   - Description: Complete overhaul of company website
   - Status: In Progress
   - End Date: (pick a future date)
3. **Click "Create Project"** ✅

### Test 3: Add Tasks to Project

1. **Click "View Details"** on your project
2. **Click "Add Task"** button
3. **Create task:**
   - Title: Design Homepage
   - Description: Create mockup for new homepage
   - Priority: High
   - Due Date: (pick a date)
   - Assign To: (leave empty for now)
4. **Click "Create Task"** ✅
5. **Create 2-3 more tasks** to populate the board

### Test 4: Member User Access

1. **Logout** (top right)
2. **Register new Member account:**
   - Name: Team Member
   - Email: member@test.com
   - Role: Member
   - Password: member123
3. **Notice:** No "New Project" button (members can't create)
4. **Open a project** and notice limited task controls ✅

### Test 5: Update Task Status

1. **As Member**, open a project
2. **Change task status** from dropdown (To Do → In Progress → Done)
3. **Try to delete task** - you can't (admin only) ✅

---

## 📊 Understanding the System

### User Roles & Permissions

| Action | Admin | Member |
|--------|-------|--------|
| View Projects | ✅ All | ✅ Assigned Only |
| Create Project | ✅ | ❌ |
| Update Project | ✅ | ❌ |
| Delete Project | ✅ | ❌ |
| Create Task | ✅ | ❌ |
| Update Task Status | ✅ | ✅ (Own tasks) |
| Delete Task | ✅ | ❌ |

### Task Workflow

```
┌─────────┐    ┌──────────────┐    ┌──────┐
│ To Do   │ -> │ In Progress  │ -> │ Done │
└─────────┘    └──────────────┘    └──────┘
```

### Priority Levels
- 🔴 **High** - Urgent tasks
- 🟡 **Medium** - Normal tasks
- 🟢 **Low** - Can wait

---

## 🔧 Customization Guide

### Change Colors

Edit `frontend/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9', // Change this to your brand color
        600: '#0284c7',
        700: '#0369a1',
      }
    }
  }
}
```

### Add New Task Status

**Backend** - Edit `backend/models/Task.js`:
```javascript
status: {
  type: String,
  enum: ['todo', 'in-progress', 'done', 'blocked'], // Add 'blocked'
  default: 'todo'
}
```

**Frontend** - Edit `frontend/src/pages/ProjectDetail.jsx`:
```javascript
<option value="todo">To Do</option>
<option value="in-progress">In Progress</option>
<option value="done">Done</option>
<option value="blocked">Blocked</option> // Add this
```

### Add More Project Statuses

Edit `backend/models/Project.js`:
```javascript
status: {
  type: String,
  enum: ['planning', 'in-progress', 'completed', 'on-hold', 'cancelled'],
  default: 'planning'
}
```

---

## 🚢 Deployment Guide (1 hour)

### Deploy Backend to Railway

1. **Install Railway CLI:**
```bash
npm i -g @railway/cli
```

2. **Login and deploy:**
```bash
cd backend
railway login
railway init
railway up
```

3. **Add environment variables** in Railway dashboard:
   - `MONGODB_URI` (from MongoDB Atlas)
   - `JWT_SECRET`
   - `CLIENT_URL` (will be your Vercel URL)

4. **Get backend URL** from Railway dashboard

### Deploy Frontend to Vercel

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
cd frontend
vercel
```

3. **Add environment variable:**
   - `VITE_API_URL` = your Railway backend URL + `/api`

4. **Production deploy:**
```bash
vercel --prod
```

### Update CORS

After deployment, update `backend/.env` on Railway:
```env
CLIENT_URL=https://your-vercel-app.vercel.app
```

---

## 🐛 Troubleshooting

### Problem: "Cannot connect to MongoDB"
**Solution:**
```bash
# Check MongoDB is running
sudo systemctl status mongod

# Start MongoDB
sudo systemctl start mongod
```

### Problem: "Port 5000 already in use"
**Solution:**
```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 <PID>

# Or change port in backend/.env
PORT=5001
```

### Problem: "CORS error in browser"
**Solution:**
- Check `CLIENT_URL` in backend `.env` matches frontend URL
- Restart backend server after .env changes

### Problem: "Token expired" or login issues
**Solution:**
```bash
# Clear browser localStorage
# In browser console:
localStorage.clear()

# Then login again
```

### Problem: Frontend won't start
**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📈 What to Build Next (Post-MVP)

### Week 1-2: Enhanced Features
- [ ] User profile page with avatar upload
- [ ] Bulk task operations (assign multiple, delete multiple)
- [ ] Project search and filtering
- [ ] Task comments and discussion threads

### Week 3-4: Collaboration
- [ ] Real-time notifications with Socket.io
- [ ] Email notifications for task assignments
- [ ] Team member invitation system
- [ ] Activity feed showing recent changes

### Week 5-6: Advanced Features
- [ ] Drag-and-drop Kanban board
- [ ] File attachments for tasks
- [ ] Time tracking per task
- [ ] Gantt chart timeline view

### Week 7-8: Analytics & Reporting
- [ ] Dashboard with charts (Chart.js)
- [ ] Project progress reports (PDF export)
- [ ] Team productivity metrics
- [ ] Due date reminders and alerts

---

## 💡 AI Assistance Tips

Use AI tools (ChatGPT, Copilot, etc.) to:

1. **Generate components faster:**
   ```
   "Create a React component for displaying task statistics with 
   completed, in-progress, and pending counts using Tailwind CSS"
   ```

2. **Debug errors:**
   ```
   "I'm getting this error: [paste error]. Here's my code: [paste code]. 
   What's wrong?"
   ```

3. **Add features:**
   ```
   "Add a feature to filter projects by status in Dashboard.jsx. 
   Here's my current code: [paste]"
   ```

4. **Optimize queries:**
   ```
   "Optimize this MongoDB query to include task counts: [paste query]"
   ```

---

## 📚 Helpful Resources

- **React:** https://react.dev/learn
- **Express:** https://expressjs.com/en/guide/routing.html
- **MongoDB:** https://www.mongodb.com/docs/manual/
- **Tailwind:** https://tailwindcss.com/docs
- **JWT:** https://jwt.io/introduction

---

## ✅ Final Checklist

- [ ] Backend running without errors
- [ ] Frontend running without errors
- [ ] Can register admin user
- [ ] Can register member user
- [ ] Can create project (admin)
- [ ] Can create tasks (admin)
- [ ] Can update task status (member)
- [ ] Role restrictions work correctly
- [ ] Responsive design on mobile
- [ ] All API endpoints tested

---

**🎉 Congratulations! You've built a full-stack project management system in 6-7 hours!**

**Next Steps:**
1. Push code to GitHub
2. Deploy to production (Railway + Vercel)
3. Share with team for feedback
4. Start building additional features from the roadmap

**Need help?** Check `ROADMAP.md` for detailed phase-by-phase breakdown.
