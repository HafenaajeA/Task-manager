const Task = require('../models/Task');

// POST/api/tasks - Create a new task
exports.createTask = async (req, res) => {
    const task = await Task.create({ ...req.body, owner: req.user.id });
    res.json(task);
};

// GET/api/tasks/me -  Get one user's tasks
exports.getMyTasks = async (req, res) => {
    const tasks = await Task.find({ owner: req.user.id });
    res.json(tasks);
}   

// GET/api/tasks/ all - Get all tasks
exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find().populate('owner', 'email');
    res.json(tasks);
}

// PATCH/api/tasks/:id - Update a task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user.id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Server error during task update' });
    }
};

// DELETE/api/tasks/:id - Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user.id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error during task deletion' });
    }
};