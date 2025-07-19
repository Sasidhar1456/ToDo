import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div className="mt-10 w-85 max-h-96 overflow-y-auto mx-auto">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
