"use client";

import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Select from "../../components/ui/Select";
import { dummyTasks } from "../../lib/dummyTasks";

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const task = dummyTasks.find((t) => t.id === params.id);

  const [status, setStatus] = useState(task?.status || "todo");
  const [priority, setPriority] = useState(task?.priority || "Medium");
  const [comment, setComment] = useState("");

  if (!task) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Task not found.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 flex gap-6">
        
        {/* LEFT SIDE - main content */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-1 dark:text-white">{task.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{task.description}</p>

          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="text-gray-500 dark:text-gray-400">Assignee: {task.assignee}</span>
            <span className="text-red-500">Due: {task.dueDate}</span>
          </div>

          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-1">Labels</p>
            <div className="flex gap-1.5">
              {task.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 dark:bg-gray-800 dark:text-gray-200 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2 dark:text-white">Add a comment</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a reply..."
              className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              rows={3}
            />
          </div>
        </div>

        {/* RIGHT SIDE - details panel */}
        <div className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-fit">
          <p className="text-sm font-semibold mb-3 dark:text-white">Details</p>

          <Select
            label="Status"
            value={status}
            onChange={(v) => setStatus(v as typeof status)}
            options={["todo", "doing", "completed", "onhold"]}
          />

          <Select
            label="Priority"
            value={priority}
            onChange={(v) => setPriority(v as typeof priority)}
            options={["High", "Medium", "Low"]}
          />

          <div className="mb-3">
            <label className="text-xs text-gray-500 block mb-1">Members</label>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-400" />
              <span className="text-sm dark:text-white">{task.assignee}</span>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 block mb-1">Due Date</label>
            <p className="text-sm dark:text-white">{task.dueDate}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}