export type Task = {
  id: string;
  title: string;
  description?: string;
  assignee: string;
  dueDate: string;
  tags: string[];
  status: "todo" | "doing" | "completed" | "onhold";
  priority: "High" | "Medium" | "Low";
};

export const dummyTasks: Task[] = [
 {
  id: "1",
  title: "Write API Documentation",
  description: "Create clear and detailed API documentation to guide developers in using the inventory and sales metrics features effectively.",
  assignee: "Admin",
  dueDate: "29 Jul",
  tags: ["Deployment", "Deployment"],
  status: "todo",
  priority: "High",
},
  {
    id: "2",
    title: "Implement Search Function",
    assignee: "Admin",
    dueDate: "29 Jul",
    tags: ["Deployment", "Deployment"],
    status: "todo",
    priority: "Low",
  },
  {
    id: "3",
    title: "Deploy to Production",
    assignee: "Admin",
    dueDate: "29 Jul",
    tags: ["Deployment", "Deployment"],
    status: "todo",
    priority: "Medium",
  },
  {
    id: "4",
    title: "Code Review Completed",
    assignee: "Admin",
    dueDate: "29 Jul",
    tags: ["Deployment", "Deployment"],
    status: "doing",
    priority: "High",
  },
  {
    id: "5",
    title: "Design Mockups Finalized",
    assignee: "Admin",
    dueDate: "29 Jul",
    tags: ["Deployment", "Deployment"],
    status: "doing",
    priority: "Low",
  },
  {
    id: "6",
    title: "Feature Testing Passed",
    assignee: "QA Team",
    dueDate: "30 Jul",
    tags: ["Testing", "Passed"],
    status: "completed",
    priority: "High",
  },
  {
    id: "7",
    title: "UI Design Updated",
    assignee: "Designer",
    dueDate: "31 Jul",
    tags: ["Design", "Updated"],
    status: "completed",
    priority: "Medium",
  },
];