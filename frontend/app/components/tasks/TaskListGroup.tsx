import { Task } from "../../lib/dummyTasks";
import TaskListRow from "./TaskListRow";

type TaskListGroupProps = {
  title: string;
  tasks: Task[];
};

export default function TaskListGroup({ title, tasks }: TaskListGroupProps) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">▾ {title}</p>

      <table className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-left">
            <th className="py-2 px-3 text-xs font-medium text-gray-500 dark:text-gray-400">Task</th>
            <th className="py-2 px-3 text-xs font-medium text-gray-500 dark:text-gray-400">Priority</th>
            <th className="py-2 px-3 text-xs font-medium text-gray-500 dark:text-gray-400">Members</th>
            <th className="py-2 px-3 text-xs font-medium text-gray-500 dark:text-gray-400">Due Date</th>
            <th className="py-2 px-3 text-xs font-medium text-gray-500 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskListRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}