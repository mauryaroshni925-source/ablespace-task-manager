export type Project = {
  id: string;
  name: string;
  priority: "High" | "Medium" | "Low";
  lead: string;
  dueDate: string;
};

export const dummyProjects: Project[] = [
  { id: "1", name: "Design Homepage", priority: "High", lead: "Dexter", dueDate: "12 Sep 2026" },
  { id: "2", name: "Develop Login Feature", priority: "Low", lead: "CN", dueDate: "15 Sep 2026" },
  { id: "3", name: "Test Payment Gateway", priority: "Medium", lead: "Team", dueDate: "18 Sep 2026" },
];