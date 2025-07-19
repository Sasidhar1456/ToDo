import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { getTasks, addTask, deleteTask, toggleTask } from './api';

export default function App() {

  // use state variable to store the tasks
  const [tasks, setTasks] = useState([]);

  // fetech task function which will be used in useEffect
  const fetchTasks = async () => {
    const allTasks = await getTasks();
    setTasks(allTasks);
  };

  // handle add function which will be passed as props to TaskInput component
  const handleAdd = async (title) => {
    const newTask = await addTask(title);
    setTasks((prev) => [...prev, newTask]);
  };


  // handle Delete function which will be passed as props to TaskList component
  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // handle Toggle function which will be passed as props to TaskList component
  const handleToggle = async (id, completed) => {
    const updated = await toggleTask(id, completed);
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: updated.completed } : t))
    );
  };

  // fecthing tasks every time reload happens
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


