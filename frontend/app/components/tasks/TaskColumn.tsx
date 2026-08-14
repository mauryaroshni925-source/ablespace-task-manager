import { Task } from "../../lib/dummyTasks";
import TaskCard from "./TaskCard";

type TaskColumnProps = {
  title: string;
  tasks: Task[];
};

export default function TaskColumn({ title, tasks }: TaskColumnProps) {
  return (
    <div className="w-64 flex-shrink-0">
      
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-400">☰</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{title}</span>
          <span className="text-xs text-gray-400">{tasks.length}</span>
        </div>
        <span className="text-gray-400 cursor-pointer">+</span>
      </div>

      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <button className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 px-1 mt-1">
        + Add Task
      </button>
    </div>
  );
}