import { useState } from "react";
import { FiPlus } from "react-icons/fi";

type Props = {
  onSubmit: (title: string, description: string) => void;
};

const TaskForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="flex-1 border border-gray-300 p-3 rounded-xl"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="flex-1 border border-gray-300 p-3 rounded-xl"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        <FiPlus size={18} />
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
