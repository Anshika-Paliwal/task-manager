import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTasks } from "../hooks/useTasks";
import { logout } from "../features/auth/authSlice";
import { TaskForm, TaskList } from "../components/index";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FiGrid, FiLogOut } from "react-icons/fi";

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

  if (loading) return <p className="p-6">Loading tasks...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="flex items-center gap-2">
        <FiGrid className="text-blue-600" size={24} />
        <h1 className="text-3xl font-bold">Dashboard</h1>
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

      <div className="flex items-center justify-between">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
