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
    <div className="bg-white border border-gray-200 hover:border-gray-300 p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col justify-between">
      {isEditing ? (
        <div className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h2 className="font-semibold text-lg">{task.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{task.description}</p>

            <p
              className={`mt-3 font-medium ${
                task.status === "completed"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {task.status}
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onToggle(task.id, task.status)}
              className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded"
            >
              Toggle
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-yellow-50 hover:bg-yellow-100 text-yellow-600 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded"
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
