import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { getTasks, addTask, deleteTask, toggleTask } from './api';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const allTasks = await getTasks();
    setTasks(allTasks);
  };

  const handleAdd = async (title) => {
    const newTask = await addTask(title);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggle = async (id, completed) => {
    const updated = await toggleTask(id, completed);
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: updated.completed } : t))
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <TaskInput onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};


