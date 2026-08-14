import Link from "next/link";
import { Task } from "../../lib/dummyTasks";

const priorityColors: Record<string, string> = {
  High: "text-red-500",
  Medium: "text-orange-500",
  Low: "text-gray-400",
};

export default function TaskListRow({ task }: { task: Task }) {
  return (
    <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
      <td className="py-2.5 px-3 text-sm text-gray-800 dark:text-white">
        <Link href={`/tasks/${task.id}`} className="hover:underline">
          {task.title}
        </Link>
      </td>
      <td className={`py-2.5 px-3 text-sm ${priorityColors[task.priority] || "text-gray-400"}`}>
        {task.priority}
      </td>
      <td className="py-2.5 px-3">
        <div className="w-6 h-6 rounded-full bg-purple-400" />
      </td>
      <td className="py-2.5 px-3 text-sm text-gray-500 dark:text-gray-400">{task.dueDate}</td>
      <td className="py-2.5 px-3 text-sm text-gray-400 cursor-pointer">•••</td>
    </tr>
  );
}