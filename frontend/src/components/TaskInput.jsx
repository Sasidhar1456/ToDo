import { useState } from 'react';

export default function TaskInput({ onAdd }) {
  const [task, setTask] = useState('');

  
  const handleSubmit = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
    } else {
      alert('Please type your task');
    }
  };

  return (
    <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-center items-center">
      <input
        type="text"
        placeholder="add a task ..."
        className="h-12 w-85 md:w-100 px-3 rounded-md text-md text-secondary border-2 border-secondary focus:outline-none"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-forth rounded-md px-5 py-2 mt-4 md:mt-0 md:ml-3"
        onClick={handleSubmit}
      >
        <span className="text-third font-love">Add Task</span>
      </button>
    </div>
  );
}
