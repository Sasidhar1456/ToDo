const express = require('express');
const cors = require('cors');
const tasksRouter = require('./tasks');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow CORS from all origins
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/tasks', tasksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
