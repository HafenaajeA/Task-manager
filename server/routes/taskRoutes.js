const express = require('express');
const { createTask, getMyTasks, getAllTasks } = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/auth');    

const router = express.Router();

// POST/api/tasks - Create a new task
router.post('/', protect, createTask);  
// GET/api/tasks/me - Get one user's tasks
router.get('/me', protect, getMyTasks);
// GET/api/tasks - Get all tasks
router.get('/all', protect, authorize(["admin"]), getAllTasks);

module.exports = router;