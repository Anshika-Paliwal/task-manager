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
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md space-y-4 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="flex-1
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700
            text-gray-800 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-300
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30
            outline-none
            p-3 rounded-xl
            transition"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="flex-1
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-700
            text-gray-800 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-300
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30
            outline-none
            p-3 rounded-xl
            transition"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition"
      >
        <FiPlus size={18} />
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;