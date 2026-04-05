import { createContext, useContext, useState, type ReactNode } from "react";

export type Priority = "Low" | "Medium" | "High" | "Urgent";
export type Status   = "To Do" | "In Progress" | "In Review" | "Done";
export type ReminderVia = "email" | "notification" | "both";

export interface Subtask {
  id: string;
  text: string;
  done: boolean;
}

export interface Reminder {
  id: string;
  date: string;
  time: string;
  via: ReminderVia;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  due: string;
  assignee: string;
  subtasks: Subtask[];
  reminders: Reminder[];
  createdAt: string;
}

export type NewTaskInput = Omit<Task, "id" | "createdAt">;

interface TaskContextType {
  tasks: Task[];
  addTask: (input: NewTaskInput) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(input: NewTaskInput) {
    const task: Task = {
      ...input,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [task, ...prev]);
  }

  function updateTask(id: string, updates: Partial<Task>) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
