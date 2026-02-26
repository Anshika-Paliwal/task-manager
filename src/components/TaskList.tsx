import TaskCard from "./TaskCard";
import type { Task } from "../types/task";

type Props = {
  tasks: Task[];
  onToggle: (id: string, status: Task["status"]) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, data: Partial<Task>) => void;
};

const TaskList = ({ tasks, onToggle, onDelete, onEdit }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center text-gray-500 dark:text-gray-300 transition-colors duration-300">
        No tasks available. Please add a task to get started!
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;