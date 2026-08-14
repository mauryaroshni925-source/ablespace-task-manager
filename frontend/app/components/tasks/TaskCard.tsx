import Link from "next/link";
import { Task } from "../../lib/dummyTasks";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <Link href={`/tasks/${task.id}`}>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 mb-2 hover:shadow-sm transition-shadow cursor-pointer">
        <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">{task.title}</p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-purple-400" />
            <span className="text-xs text-gray-500 dark:text-gray-400">{task.assignee}</span>
          </div>
          <span className="text-xs text-red-500 bg-red-50 dark:bg-red-950 px-1.5 py-0.5 rounded">
            {task.dueDate}
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}