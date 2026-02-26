import { useState } from "react";

import type { Task } from "../types/task";

type Props = {
  task: Task;
  onToggle: (id: string, status: Task["status"]) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, data: Partial<Task>) => void;
};

const TaskCard = ({ task, onToggle, onDelete, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    if (!title.trim()) return;
    onEdit(task.id, { title, description });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col justify-between">
      {isEditing ? (
        <div className="space-y-3">
          <input
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30 outline-none p-2 rounded transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30 outline-none p-2 rounded transition"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 rounded transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
              {task.title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {task.description}
            </p>

            <p
              className={`mt-3 font-medium ${
                task.status === "completed"
                  ? "text-green-600 dark:text-green-400"
                  : "text-yellow-600 dark:text-yellow-400"
              }`}
            >
              {task.status}
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onToggle(task.id, task.status)}
              className="flex-1 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 py-2 rounded transition"
            >
              Toggle
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-yellow-50 dark:bg-yellow-900/30 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 py-2 rounded transition"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="flex-1 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 py-2 rounded transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;