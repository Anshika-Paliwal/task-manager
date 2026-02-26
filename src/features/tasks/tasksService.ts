import type { Task } from "./tasksSlice";

export const tasksService = {
  getTasks: async (): Promise<Task[]> => {
    const response = await fetch("/tasks");
    if (!response.ok) throw new Error("Failed to fetch tasks");
    return response.json();
  },

  createTask: async (task: Omit<Task, "id">): Promise<Task> => {
    const response = await fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!response.ok) throw new Error("Failed to create task");
    return response.json();
  },

  updateTask: async (id: string, updates: Partial<Task>): Promise<Task> => {
    const response = await fetch(`/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!response.ok) throw new Error("Failed to update task");
    return response.json();
  },

  deleteTask: async (id: string): Promise<void> => {
    const response = await fetch(`/tasks/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete task");
  },
};