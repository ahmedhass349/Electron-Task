import { Trash2, Clock, Bell, CheckSquare } from "lucide-react";
import type { Task } from "../../context/TaskContext";

const PRIORITY_COLORS = {
  Low:    { bg: "#f0fdf4", text: "#16a34a" },
  Medium: { bg: "#fff7ed", text: "#ea580c" },
  High:   { bg: "#fef2f2", text: "#dc2626" },
  Urgent: { bg: "#fdf4ff", text: "#9333ea" },
} as const;

const STATUS_COLORS = {
  "To Do":       { bg: "#f1f5f9", text: "#475569" },
  "In Progress": { bg: "#eff6ff", text: "#3b82f6" },
  "In Review":   { bg: "#fefce8", text: "#ca8a04" },
  "Done":        { bg: "#f0fdf4", text: "#16a34a" },
} as const;

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
}

export default function TableView({ tasks, onDelete }: Props) {
  return (
    <div
      className="rounded-[12px] overflow-hidden"
      style={{
        border: "1px solid #e8e5f7",
        fontFamily: "'Inter', sans-serif",
        background: "white",
      }}
    >
      {/* Table header */}
      <div
        className="grid items-center px-5 py-3"
        style={{
          gridTemplateColumns: "minmax(200px,1fr) 100px 110px 110px 90px 60px 36px",
          background: "#f8f7ff",
          borderBottom: "1px solid #e8e5f7",
        }}
      >
        {["Task", "Priority", "Status", "Due Date", "Assignee", "Progress", ""].map((h) => (
          <span key={h} className="text-[11px] text-[#6e6893] uppercase tracking-[0.5px]" style={{ fontWeight: 600 }}>
            {h}
          </span>
        ))}
      </div>

      {/* Empty state */}
      {tasks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 gap-2">
          <p className="text-[14px] text-[#6e6893]">No tasks yet</p>
          <p className="text-[12px] text-[#b0a9d5]">Create a task using the "Add Task" button above.</p>
        </div>
      )}

      {/* Rows */}
      {tasks.map((task, i) => {
        const pc = PRIORITY_COLORS[task.priority];
        const sc = STATUS_COLORS[task.status];
        const doneCount = task.subtasks.filter((s) => s.done).length;
        const progress = task.subtasks.length > 0
          ? Math.round((doneCount / task.subtasks.length) * 100)
          : task.status === "Done" ? 100 : 0;

        return (
          <div
            key={task.id}
            className="grid items-center px-5 py-3.5 hover:bg-[#faf9ff] transition-colors group"
            style={{
              gridTemplateColumns: "minmax(200px,1fr) 100px 110px 110px 90px 60px 36px",
              borderBottom: i < tasks.length - 1 ? "1px solid #f2f0f9" : undefined,
            }}
          >
            {/* Task title + meta */}
            <div className="min-w-0 pr-4">
              <p className="text-[13px] text-gray-800 truncate" style={{ fontWeight: 500 }}>
                {task.title}
              </p>
              <div className="flex items-center gap-3 mt-0.5">
                {task.subtasks.length > 0 && (
                  <span className="flex items-center gap-1 text-[11px] text-gray-400">
                    <CheckSquare className="size-3" />
                    {doneCount}/{task.subtasks.length}
                  </span>
                )}
                {task.reminders.length > 0 && (
                  <span className="flex items-center gap-1 text-[11px] text-blue-400">
                    <Bell className="size-3" />
                    {task.reminders.length}
                  </span>
                )}
                {task.description && (
                  <span className="text-[11px] text-gray-400 truncate max-w-[160px]">{task.description}</span>
                )}
              </div>
            </div>

            {/* Priority */}
            <div>
              <span
                className="text-[11px] px-2.5 py-1 rounded-full"
                style={{ background: pc.bg, color: pc.text, fontWeight: 500 }}
              >
                {task.priority}
              </span>
            </div>

            {/* Status */}
            <div>
              <span
                className="text-[11px] px-2.5 py-1 rounded-full"
                style={{ background: sc.bg, color: sc.text, fontWeight: 500 }}
              >
                {task.status}
              </span>
            </div>

            {/* Due date */}
            <div>
              {task.due ? (
                <span className="flex items-center gap-1 text-[12px] text-gray-500">
                  <Clock className="size-3.5 shrink-0" />
                  {task.due}
                </span>
              ) : (
                <span className="text-[12px] text-gray-300">—</span>
              )}
            </div>

            {/* Assignee */}
            <div>
              {task.assignee ? (
                <div className="flex items-center gap-2">
                  <div
                    className="size-6 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0"
                    style={{ fontSize: "9px", fontWeight: 600 }}
                  >
                    {task.assignee.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                  </div>
                  <span className="text-[12px] text-gray-600 truncate">{task.assignee.split(" ")[0]}</span>
                </div>
              ) : (
                <span className="text-[12px] text-gray-300">—</span>
              )}
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gray-400">{progress}%</span>
              <div className="h-1.5 rounded-full bg-gray-100 w-full">
                <div
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: `${progress}%`,
                    background: progress === 100 ? "#22c55e" : "#3b82f6",
                  }}
                />
              </div>
            </div>

            {/* Delete */}
            <div>
              <button
                onClick={() => onDelete(task.id)}
                className="size-7 rounded-full flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="size-3.5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
