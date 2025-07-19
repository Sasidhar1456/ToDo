export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className="flex justify-center items-center mt-5 accent-forth">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
        className="h-5 w-5 checked:bg-forth checked:border-transparent focus:outline-none mt-1 "
      />
      <div className="ml-3 w-40">
        <span
          className={`text-secondary text-xl font-love font-semibold max-w-[200px] ${
            task.completed ? 'line-through' : ''
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        className="bg-forth rounded-md px-1 ml-3"
        onClick={() => onDelete(task.id)}
      >
        <span className="text-third font-love">Delete</span>
      </button>
    </div>
  );
}
