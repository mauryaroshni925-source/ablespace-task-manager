import DashboardLayout from "../components/layout/DashboardLayout";
import Input from "../components/ui/Input";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-2xl">
        <h1 className="text-lg font-semibold mb-4 dark:text-white">Profile</h1>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
            <span className="text-sm dark:text-white">Profile picture</span>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500" />
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
            <span className="text-sm dark:text-white">Email</span>
            <span className="text-sm text-gray-500">dexter@gmail.com</span>
          </div>

          <div className="mb-4">
            <label className="text-sm dark:text-white block mb-1">Full name</label>
            <Input placeholder="Dexter" />
          </div>

          <div className="mb-4">
            <label className="text-sm dark:text-white block mb-1">Title</label>
            <Input placeholder="Your job title or role" />
          </div>

          <div>
            <label className="text-sm dark:text-white block mb-1">Username</label>
            <Input placeholder="One word, like a nickname or first name" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium dark:text-white">Workspace access</p>
            <p className="text-xs text-gray-500">Remove yourself from the workspace</p>
          </div>
          <button className="text-red-500 text-sm border border-red-200 px-3 py-1.5 rounded-md hover:bg-red-50">
            Leave Workspace
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}