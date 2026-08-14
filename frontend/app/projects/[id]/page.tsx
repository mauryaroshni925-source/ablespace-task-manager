import Link from "next/link";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { dummyProjects } from "../../lib/dummyProjects";
import { dummyTasks } from "../../lib/dummyTasks";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = dummyProjects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Project not found.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <p className="text-xs text-gray-400 mb-2">
          <Link href="/projects" className="hover:underline">Projects</Link> {">"} {project.name}
        </p>
        <h1 className="text-lg font-semibold mb-4 dark:text-white">{project.name}</h1>

        <table className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-left">
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Task</th>
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Priority</th>
              <th className="py-2 px-3 text-xs font-medium text-gray-500">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {dummyTasks.map((t) => (
              <tr key={t.id} className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2.5 px-3 text-sm dark:text-white">{t.title}</td>
                <td className="py-2.5 px-3 text-sm text-gray-500">{t.priority}</td>
                <td className="py-2.5 px-3 text-sm text-gray-500">{t.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}