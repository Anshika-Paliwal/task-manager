import { useAppDispatch } from "../app/hooks";
import {
  setTasks,
  setLoading,
  setError,
  addTask,
  updateTask,
  removeTask,
} from "../features/tasks/tasksSlice";
import { tasksService } from "../features/tasks/tasksService";
import type { Task, TaskStatus } from "../types/task";

export const useTasks = () => {
  const dispatch = useAppDispatch();

  const fetchTasks = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const data = await tasksService.getTasks();
      dispatch(setTasks(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(setError(err.message));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  const createTask = async (task: Omit<Task, "id">) => {
    const newTask = await tasksService.createTask(task);
    dispatch(addTask(newTask));
  };

  const toggleTask = async (id: string, status: TaskStatus) => {
    const updated = await tasksService.updateTask(id, {
      status: status === "pending" ? "completed" : "pending",
    });
    dispatch(updateTask(updated));
  };

  const deleteTask = async (id: string) => {
    await tasksService.deleteTask(id);
    dispatch(removeTask(id));
  };

  const editTask = async (id: string, data: Partial<Task>) => {
    const updated = await tasksService.updateTask(id, data);
    dispatch(updateTask(updated));
  };

  return {
    fetchTasks,
    createTask,
    toggleTask,
    deleteTask,
    editTask,
  };
};