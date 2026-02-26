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
      <div className="bg-white border rounded-2xl p-8 text-center text-gray-500">
        No tasks available
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