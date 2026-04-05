import { Plus, Clock, Flag } from "lucide-react";
import type { Task } from "../../context/TaskContext";

const COLUMNS: { id: string; label: string; status: Task["status"] | null }[] = [
  { id: "todo",       label: "TO DO",       status: "To Do" },
  { id: "inprogress", label: "IN PROGRESS", status: "In Progress" },
  { id: "inreview",   label: "IN REVIEW",   status: "In Review" },
  { id: "done",       label: "DONE",        status: "Done" },
];

const PRIORITY_DOT: Record<string, string> = {
  Low:    "#22c55e",
  Medium: "#f97316",
  High:   "#ef4444",
  Urgent: "#a855f7",
};

const PRIORITY_CHIP: Record<string, { bg: string; text: string }> = {
  Low:    { bg: "#f0fdf4", text: "#16a34a" },
  Medium: { bg: "#fff7ed", text: "#ea580c" },
  High:   { bg: "#fef2f2", text: "#dc2626" },
  Urgent: { bg: "#fdf4ff", text: "#9333ea" },
};

interface Props {
  tasks: Task[];
  onAddTask: () => void;
}

export default function KanbanView({ tasks, onAddTask }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      {COLUMNS.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.status);
        return (
          <div
            key={col.id}
            className="shrink-0 rounded-[12px] flex flex-col"
            style={{
              width: 280,
              background: "#fdfdfd",
              border: "1px solid #f0f0f0",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Column header */}
            <div
              className="flex items-center justify-between px-4 py-3 rounded-t-[12px]"
              style={{ background: "white", borderBottom: "1px solid #f0f0f0" }}
            >
              <p className="text-[13px] text-[#313131] uppercase tracking-wide" style={{ fontWeight: 600 }}>
                {col.label}
              </p>
              <span
                className="text-[11px] text-[#828282] bg-[#f4f4f4] rounded-full px-2 py-0.5"
                style={{ fontWeight: 500 }}
              >
                {colTasks.length}
              </span>
            </div>

            {/* Task cards */}
            <div className="flex flex-col gap-2 p-3 flex-1">
              {colTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                  <p className="text-[12px] text-[#b0b0b0]">No tasks</p>
                  <button
                    onClick={onAddTask}
                    className="flex items-center gap-1.5 text-[12px] text-[#828282] hover:text-blue-500 transition-colors"
                  >
                    <Plus className="size-3.5" />
                    Add task
                  </button>
                </div>
              ) : (
                <>
                  {colTasks.map((task) => {
                    const pc = PRIORITY_CHIP[task.priority];
                    const doneCount = task.subtasks.filter((s) => s.done).length;
                    return (
                      <div
                        key={task.id}
                        className="bg-white rounded-[10px] p-3 flex flex-col gap-2 hover:shadow-sm transition-shadow cursor-pointer"
                        style={{ border: "1px solid #f0f0f0" }}
                      >
                        {/* Priority chip */}
                        <div className="flex items-center gap-1.5">
                          <span
                            className="size-2 rounded-full shrink-0"
                            style={{ background: PRIORITY_DOT[task.priority] }}
                          />
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full"
                            style={{ background: pc.bg, color: pc.text, fontWeight: 500 }}
                          >
                            {task.priority}
                          </span>
                          <Flag className="size-3 text-gray-300 ml-auto" />
                        </div>

                        {/* Title */}
                        <p className="text-[13px] text-gray-800" style={{ fontWeight: 500 }}>
                          {task.title}
                        </p>

                        {/* Description snippet */}
                        {task.description && (
                          <p className="text-[11px] text-gray-400 line-clamp-2">{task.description}</p>
                        )}

                        {/* Subtask progress */}
                        {task.subtasks.length > 0 && (
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 rounded-full bg-gray-100">
                              <div
                                className="h-1 rounded-full bg-blue-400 transition-all"
                                style={{ width: `${(doneCount / task.subtasks.length) * 100}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-gray-400 shrink-0">
                              {doneCount}/{task.subtasks.length}
                            </span>
                          </div>
                        )}

                        {/* Footer: due + assignee */}
                        <div className="flex items-center justify-between mt-1">
                          {task.due ? (
                            <span className="flex items-center gap-1 text-[10px] text-gray-400">
                              <Clock className="size-3" />
                              {task.due}
                            </span>
                          ) : <span />}
                          {task.assignee && (
                            <div
                              className="size-6 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0"
                              style={{ fontSize: "9px", fontWeight: 600 }}
                              title={task.assignee}
                            >
                              {task.assignee.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Add task button at bottom of non-empty column */}
                  <button
                    onClick={onAddTask}
                    className="flex items-center gap-1.5 text-[12px] text-[#828282] hover:text-blue-500 transition-colors py-1 px-1"
                  >
                    <Plus className="size-3.5" />
                    Add task
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
