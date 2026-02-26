import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiGrid, FiLogOut } from "react-icons/fi";

import { useTasks } from "../hooks/useTasks";
import { logout } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { TaskForm, TaskList, ThemeToggle } from "../components/index";

function Dashboard() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { tasks, loading, error } = useAppSelector((state) => state.tasks);
  const { fetchTasks, createTask, toggleTask, deleteTask, editTask } =
    useTasks();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading)
    return (
      <p className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        Loading tasks...
      </p>
    );

  if (error)
    return (
      <p className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-red-500 dark:text-red-400 transition-colors duration-300">
        {error}
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 space-y-6 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiGrid className="text-blue-600 dark:text-blue-400" size={24} />
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <TaskForm
        onSubmit={(title, description) =>
          createTask({ title, description, status: "pending" })
        }
      />

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default Dashboard;
