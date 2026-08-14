"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { Task } from "../../lib/dummyTasks";

type AddTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (task: Task) => void; // parent ko naya task wapas bhejne ke liye
};

export default function AddTaskModal({ isOpen, onClose, onAdd }: AddTaskModalProps) {
  // form ke sab fields ke liye state
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("todo");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    // agar title khaali hai, kuch mat karo (basic validation)
    if (title.trim() === "") return;

    // naya task object banao
    const newTask: Task = {
      id: Date.now().toString(), // temporary unique id - abhi ke liye timestamp use kar rahe hain
      title,
      assignee: "Admin",
      dueDate: dueDate || "No date",
      tags: [],
      status: status as Task["status"],
      priority: priority as Task["priority"],
    };

    onAdd(newTask); // parent component ko bhej do

    // form reset karo aur modal band karo
    setTitle("");
    setPriority("Medium");
    setStatus("todo");
    setDueDate("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Task">
      <div>
        <div className="mb-3">
          <label className="text-xs text-gray-500 block mb-1">Task title</label>
          <Input
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <Select
          label="Status"
          value={status}
          onChange={setStatus}
          options={["todo", "doing", "completed", "onhold"]}
        />

        <Select
          label="Priority"
          value={priority}
          onChange={setPriority}
          options={["High", "Medium", "Low"]}
        />

        <div className="mb-4">
          <label className="text-xs text-gray-500 block mb-1">Due date</label>
          <Input
            placeholder="e.g. 29 Jul"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <Button variant="primary" onClick={handleSubmit}>
          Add Task
        </Button>
      </div>
    </Modal>
  );
}