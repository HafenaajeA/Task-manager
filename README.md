# 📋 MERN Task Manager

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, role-based access control, and a modern UI.

## ✨ Features

### 🔐 Authentication & Security
- **User Registration & Login** - Secure authentication with JWT tokens
- **Password Hashing** - Passwords encrypted using bcryptjs
- **Protected Routes** - Frontend route protection for authenticated users
- **Role-Based Access** - Admin and developer roles with different permissions

### 📝 Task Management
- **Create Tasks** - Add new tasks with title and description
- **View Tasks** - Display all user's tasks in a responsive grid layout
- **Toggle Completion** - Mark tasks as completed or pending
- **Delete Tasks** - Remove unwanted tasks
- **Real-time Updates** - Instant UI updates after operations

### 🎨 Modern UI/UX
- **Dark/Light Theme** - Toggle between themes with persistent preference
- **Responsive Design** - Mobile-first responsive layout
- **Modern Components** - Built with Radix UI and shadcn/ui
- **Toast Notifications** - User feedback for actions
- **Glass Morphism** - Modern glassmorphism effects
- **Heroicons** - Beautiful SVG icons

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest version with modern features
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **shadcn/ui** - Beautiful pre-built components
- **Axios** - HTTP client for API calls
- **React Hook Form** - Form handling and validation
- **Sonner** - Toast notifications
- **next-themes** - Theme management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- pnpm (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task_manager
   ```

2. **Install server dependencies**
   ```bash
   cd server
   pnpm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   pnpm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_jwt_secret_key_here
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running on your system or use MongoDB Atlas.

6. **Run the application**
   
   Terminal 1 (Server):
   ```bash
   cd server
   pnpm run dev
   ```
   
   Terminal 2 (Client):
   ```bash
   cd client
   pnpm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 📁 Project Structure

```
task_manager/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskDialog.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── pages/        # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── services/     # API services
│   │   │   └── api.js
│   │   ├── utils/        # Utilities
│   │   │   └── ProtectedRoutes.jsx
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── package.json
│   └── vite.config.js
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   │   └── db.js
│   ├── controllers/      # Route controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/       # Custom middleware
│   │   └── auth.js
│   ├── models/          # Database models
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/          # API routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── server.js        # Entry point
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks/me` - Get user's tasks
- `GET /api/tasks/all` - Get all tasks (admin only)
- `POST /api/tasks` - Create new task
- `PATCH /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 👥 User Roles

### Developer (Default)
- Create, read, update, delete own tasks
- View personal task dashboard

### Admin
- All developer permissions
- View all users' tasks
- Access to admin-only endpoints

## 🎯 Usage

1. **Sign Up**: Create a new account with email and password
2. **Login**: Access your account with credentials
3. **Dashboard**: View your task overview
4. **Create Tasks**: Add new tasks using the "+" button
5. **Manage Tasks**: 
   - Click ✅ to toggle completion status
   - Click 🗑️ to delete tasks
6. **Theme**: Toggle between light and dark modes
7. **Logout**: Securely log out from the dropdown menu

## 🔒 Security Features

- **JWT Authentication** - Stateless authentication
- **Password Hashing** - Secure password storage
- **Route Protection** - Frontend and backend route guards
- **CORS Configuration** - Controlled cross-origin requests
- **Input Validation** - Server-side validation
- **Error Handling** - Comprehensive error management

## 🌟 Future Enhancements

- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] File attachments
- [ ] Real-time collaboration
- [ ] Email notifications
- [ ] Task search and filtering
- [ ] Mobile app (React Native)
- [ ] Data export functionality
- [ ] Task templates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## �‍💻 Developer

**Almando Hafenaaje** - Full Stack Developer

## �📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Primitive components
- [Heroicons](https://heroicons.com/) - Icon library

---

**Made with ❤️ using the MERN Stack**
