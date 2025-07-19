const express = require('express');
const router = express.Router();

let tasks = [];
let currentId = 1;

// GET /tasks - fetch all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /tasks - add new task
router.post('/', (req, res) => {
  const { title, completed = false } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
  }

  const newTask = {
    id: currentId++,
    title: title.trim(),
    completed: Boolean(completed),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - update task status
router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { completed } = req.body;

  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  task.completed = Boolean(completed);
  res.json(task);
});

// DELETE /tasks/:id - delete a task
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  tasks.splice(index, 1);
  res.json({ message: 'Task deleted successfully.' });
});

module.exports = router;
