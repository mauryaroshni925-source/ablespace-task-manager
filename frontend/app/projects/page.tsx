import Link from "next/link";
import DashboardLayout from "../components/layout/DashboardLayout";
import { dummyProjects } from "../lib/dummyProjects";

const priorityColors: Record<string, string> = {
  High: "text-red-500",
  Medium: "text-orange-500",
  Low: "text-gray-400",
};

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold dark:text-white">Projects</h1>
          <button className="bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1.5 rounded-md">
            + Add Project
          </button>
        </div>

        <table className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-left">
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Projects</th>
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Priority</th>
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Lead</th>
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Due Date</th>
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyProjects.map((p) => (
              <tr key={p.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="py-2.5 px-3 text-sm dark:text-white">
                  <Link href={`/projects/${p.id}`} className="hover:underline">{p.name}</Link>
                </td>
                <td className={`py-2.5 px-3 text-sm ${priorityColors[p.priority]}`}>{p.priority}</td>
                <td className="py-2.5 px-3">
                  <div className="w-6 h-6 rounded-full bg-purple-400" />
                </td>
                <td className="py-2.5 px-3 text-sm text-gray-500">{p.dueDate}</td>
                <td className="py-2.5 px-3 text-sm text-gray-400 cursor-pointer">•••</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}