"use client";

import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import TaskColumn from "../components/tasks/TaskColumn";
import TaskListGroup from "../components/tasks/TaskListGroup";
import AddTaskModal from "../components/tasks/AddTaskModal";
import { dummyTasks as initialTasks, Task } from "../lib/dummyTasks";
import { useTheme } from "../context/ThemeContext";

export default function TasksPage() {
  const [view, setView] = useState<"board" | "list">("board");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const { accentHex } = useTheme();

  const handleAddTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const todoTasks = filteredTasks.filter((t) => t.status === "todo");
  const doingTasks = filteredTasks.filter((t) => t.status === "doing");
  const completedTasks = filteredTasks.filter((t) => t.status === "completed");
  const onHoldTasks = filteredTasks.filter((t) => t.status === "onhold");

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold dark:text-white">Tasks</h1>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm px-3 py-1.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-black w-48"
            />

            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-md p-0.5">
              <button
                onClick={() => setView("list")}
                className={`text-xs px-2.5 py-1 rounded ${
                  view === "list" ? "bg-white dark:bg-gray-700 dark:text-white shadow-sm" : "text-gray-500"
                }`}
              >
                List
              </button>
              <button
                onClick={() => setView("board")}
                className={`text-xs px-2.5 py-1 rounded ${
                  view === "board" ? "bg-white dark:bg-gray-700 dark:text-white shadow-sm" : "text-gray-500"
                }`}
              >
                Board
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{ backgroundColor: accentHex }}
              className="text-white text-sm px-3 py-1.5 rounded-md"
            >
              + Add Task
            </button>
          </div>
        </div>

        {view === "board" ? (
          <div className="flex gap-4 overflow-x-auto pb-4">
            <TaskColumn title="To Do" tasks={todoTasks} />
            <TaskColumn title="Doing" tasks={doingTasks} />
            <TaskColumn title="Completed" tasks={completedTasks} />
            <TaskColumn title="On Hold" tasks={onHoldTasks} />
          </div>
        ) : (
          <div>
            <TaskListGroup title="To Do" tasks={todoTasks} />
            <TaskListGroup title="Doing" tasks={doingTasks} />
            <TaskListGroup title="Completed" tasks={completedTasks} />
            {onHoldTasks.length > 0 && (
              <TaskListGroup title="On Hold" tasks={onHoldTasks} />
            )}
          </div>
        )}
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTask}
      />
    </DashboardLayout>
  );
}