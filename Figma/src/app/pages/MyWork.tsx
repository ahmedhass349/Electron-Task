import { useState } from "react";
import {
  LayoutList, LayoutGrid, GanttChartSquare,
  CalendarDays, Filter, Plus, Clock, ListTodo,
  Trash2, CheckSquare, Square, Flag, Bell,
  ChevronDown, ChevronUp, ChevronRight,
} from "lucide-react";
import MainLayout from "../components/MainLayout";
import CalendarView from "../components/views/CalendarView";
import GanttView from "../components/views/GanttView";
import KanbanView from "../components/views/KanbanView";
import TableView from "../components/views/TableView";
import NewTaskModal from "../components/NewTaskModal";
import { useTasks, type Task, type NewTaskInput, type Status } from "../context/TaskContext";
import { useToast } from "../context/ToastContext";

type ViewType = "Default" | "Table" | "Kanban" | "Gantt" | "Calendar";

const VIEW_TABS: { id: ViewType; label: string; icon: React.ReactNode }[] = [
  { id: "Default",  label: "Default",  icon: <LayoutList className="size-4" /> },
  { id: "Table",    label: "Table",    icon: <LayoutGrid className="size-4" /> },
  { id: "Kanban",   label: "Kanban",   icon: <LayoutGrid className="size-4" /> },
  { id: "Gantt",    label: "Gantt",    icon: <GanttChartSquare className="size-4" /> },
  { id: "Calendar", label: "Calendar", icon: <CalendarDays className="size-4" /> },
];

const WORK_TABS = ["Worked on", "Viewed", "Assigned to me", "Starred"];

const PRIORITY_COLORS = {
  Low:    { bg: "#f0fdf4", text: "#16a34a", dot: "#22c55e" },
  Medium: { bg: "#fff7ed", text: "#ea580c", dot: "#f97316" },
  High:   { bg: "#fef2f2", text: "#dc2626", dot: "#ef4444" },
  Urgent: { bg: "#fdf4ff", text: "#9333ea", dot: "#a855f7" },
} as const;

const STATUS_COLORS = {
  "To Do":       { bg: "#f1f5f9", text: "#475569" },
  "In Progress": { bg: "#eff6ff", text: "#3b82f6" },
  "In Review":   { bg: "#fefce8", text: "#ca8a04" },
  "Done":        { bg: "#f0fdf4", text: "#16a34a" },
} as const;

const STATUSES: Status[] = ["To Do", "In Progress", "In Review", "Done"];

/* ── Task Card in Default view ── */
function TaskCard({ task, onToggleSubtask, onDelete, onStatusChange }: {
  task: Task;
  onToggleSubtask: (taskId: string, subId: string) => void;
  onDelete: (id: string) => void;
  onStatusChange: (taskId: string, status: Status) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const pc = PRIORITY_COLORS[task.priority];
  const sc = STATUS_COLORS[task.status];
  const doneCount = task.subtasks.filter((s) => s.done).length;

  return (
    <div
      className="bg-white rounded-[12px] border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow"
    >
      {/* Main row */}
      <div className="px-5 py-4 flex items-center gap-4">
        {/* Priority dot */}
        <div className="size-2.5 rounded-full shrink-0" style={{ background: pc.dot }} />

        {/* Title + meta */}
        <div className="flex-1 min-w-0">
          <p className="text-[14px] text-gray-800 truncate" style={{ fontWeight: 500 }}>
            {task.title}
          </p>
          {task.description && (
            <p className="text-[12px] text-gray-400 mt-0.5 truncate">{task.description}</p>
          )}
          {/* Subtask progress */}
          {task.subtasks.length > 0 && (
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex-1 h-1 rounded-full bg-gray-100 max-w-[80px]">
                <div
                  className="h-1 rounded-full bg-blue-400 transition-all"
                  style={{ width: `${(doneCount / task.subtasks.length) * 100}%` }}
                />
              </div>
              <span className="text-[11px] text-gray-400">
                {doneCount}/{task.subtasks.length} subtasks
              </span>
            </div>
          )}
        </div>

        {/* Status badge — clickable */}
        <div className="relative">
          <button
            onClick={() => setStatusOpen((v) => !v)}
            className="text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 transition-opacity hover:opacity-80"
            style={{ background: sc.bg, color: sc.text, fontWeight: 500 }}
          >
            {task.status}
            <ChevronRight className="size-3 rotate-90" />
          </button>
          {statusOpen && (
            <div
              className="absolute right-0 top-full mt-1 bg-white rounded-[10px] overflow-hidden z-20 w-36"
              style={{ border: "1.5px solid #e5e7eb", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
            >
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => { onStatusChange(task.id, s); setStatusOpen(false); }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 transition-colors"
                  style={{ fontWeight: task.status === s ? 600 : 400 }}
                >
                  <span
                    className="text-[11px] px-2 py-0.5 rounded-full"
                    style={{ background: STATUS_COLORS[s].bg, color: STATUS_COLORS[s].text }}
                  >
                    {s}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Priority badge */}
        <span
          className="text-[11px] px-2.5 py-1 rounded-full shrink-0"
          style={{ background: pc.bg, color: pc.text, fontWeight: 500 }}
        >
          {task.priority}
        </span>

        {/* Due */}
        {task.due && (
          <span className="text-[12px] text-gray-400 flex items-center gap-1 shrink-0">
            <Clock className="size-3.5" />
            {task.due}
          </span>
        )}

        {/* Assignee avatar */}
        {task.assignee && (
          <div
            className="size-7 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0"
            style={{ fontSize: "11px", fontWeight: 600 }}
            title={task.assignee}
          >
            {task.assignee.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
          </div>
        )}

        {/* Reminders indicator */}
        {task.reminders.length > 0 && (
          <div className="flex items-center gap-1 shrink-0" title={`${task.reminders.length} reminder(s)`}>
            <Bell className="size-3.5 text-blue-400" />
            <span className="text-[11px] text-blue-400">{task.reminders.length}</span>
          </div>
        )}

        {/* Expand / actions */}
        <div className="flex items-center gap-1 shrink-0">
          {(task.subtasks.length > 0 || task.reminders.length > 0) && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="size-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors"
            >
              {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>
          )}
          <button
            onClick={() => onDelete(task.id)}
            className="size-7 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Expanded: subtasks + reminders */}
      {expanded && (
        <div className="px-5 pb-4 flex flex-col gap-3" style={{ borderTop: "1px solid #f0f1f5" }}>
          {/* Subtasks */}
          {task.subtasks.length > 0 && (
            <div className="pt-3">
              <p className="text-[11px] text-gray-500 mb-2" style={{ fontWeight: 600 }}>SUBTASKS</p>
              <div className="flex flex-col gap-1">
                {task.subtasks.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onToggleSubtask(task.id, s.id)}
                    className="flex items-center gap-2.5 text-left hover:bg-gray-50 px-2 py-1.5 rounded-[6px] transition-colors"
                  >
                    {s.done
                      ? <CheckSquare className="size-4 text-blue-500 shrink-0" />
                      : <Square className="size-4 text-gray-400 shrink-0" />}
                    <span
                      className="text-[12px]"
                      style={{
                        color: s.done ? "#9ca3af" : "#374151",
                        textDecoration: s.done ? "line-through" : "none",
                      }}
                    >
                      {s.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reminders */}
          {task.reminders.length > 0 && (
            <div className={task.subtasks.length > 0 ? "" : "pt-3"}>
              <p className="text-[11px] text-gray-500 mb-2" style={{ fontWeight: 600 }}>REMINDERS</p>
              <div className="flex flex-col gap-1.5">
                {task.reminders.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-[8px] text-[12px]"
                    style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}
                  >
                    <Bell className="size-3.5 text-blue-500 shrink-0" />
                    <span className="text-blue-700">
                      {r.date} at {r.time}
                    </span>
                    <span
                      className="ml-auto text-[11px] px-2 py-0.5 rounded-full text-blue-600"
                      style={{ background: "#dbeafe", fontWeight: 500, textTransform: "capitalize" }}
                    >
                      {r.via}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Default list view ── */
function DefaultView({ tasks, onAddTask, onToggleSubtask, onDelete, onStatusChange }: {
  tasks: Task[];
  onAddTask: () => void;
  onToggleSubtask: (taskId: string, subId: string) => void;
  onDelete: (id: string) => void;
  onStatusChange: (taskId: string, status: Status) => void;
}) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-14 flex flex-col items-center justify-center text-center gap-4">
        <div className="size-16 rounded-full bg-blue-50 flex items-center justify-center">
          <ListTodo className="size-8 text-blue-400" />
        </div>
        <div>
          <h3 className="text-[17px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>No tasks yet</h3>
          <p className="text-[13px] text-gray-500">Tasks you create will appear here.</p>
        </div>
        <button
          onClick={onAddTask}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition-colors text-[13px]"
          style={{ fontWeight: 500 }}
        >
          <Plus className="size-4" />
          Add your first task
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleSubtask={onToggleSubtask}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

/* ── MyWork page ── */
export default function MyWork() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const { showToast } = useToast();
  const [activeView, setActiveView]   = useState<ViewType>("Default");
  const [activeWorkTab, setActiveWorkTab] = useState("Worked on");
  const [showNewTask, setShowNewTask] = useState(false);

  function handleCreate(input: NewTaskInput) {
    addTask(input);
  }

  function handleToggleSubtask(taskId: string, subId: string) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    const updated = task.subtasks.map((s) => s.id === subId ? { ...s, done: !s.done } : s);
    updateTask(taskId, { subtasks: updated });
    // If all subtasks are now done, fire a toast
    const allDone = updated.every((s) => s.done) && updated.length > 0;
    if (allDone) {
      showToast({
        type: "success",
        title: "All Subtasks Complete!",
        body: `All subtasks for "${task.title}" are done.`,
        duration: 4000,
      });
    }
  }

  function handleStatusChange(taskId: string, newStatus: Status) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.status === newStatus) return;
    updateTask(taskId, { status: newStatus });
    showToast({
      type: "status-change",
      title: "Status Updated",
      body: `"${task.title}" moved from ${task.status} → ${newStatus}.`,
      duration: 4000,
    });
  }

  function handleDelete(taskId: string) {
    const task = tasks.find((t) => t.id === taskId);
    deleteTask(taskId);
    if (task) {
      showToast({
        type: "task-deleted",
        title: "Task Deleted",
        body: `"${task.title}" has been removed from your board.`,
        duration: 4000,
      });
    }
  }

  const assignedCount = tasks.length;

  function renderView() {
    switch (activeView) {
      case "Default":
        return (
          <DefaultView
            tasks={tasks}
            onAddTask={() => setShowNewTask(true)}
            onToggleSubtask={handleToggleSubtask}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        );
      case "Table":    return <TableView tasks={tasks} onDelete={handleDelete} />;
      case "Kanban":   return <KanbanView tasks={tasks} onAddTask={() => setShowNewTask(true)} />;
      case "Gantt":    return <GanttView tasks={tasks} />;
      case "Calendar": return <CalendarView />;
    }
  }

  return (
    <MainLayout>
      <div className="p-6 max-w-[1400px] mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-[28px] text-gray-900" style={{ fontWeight: 700 }}>My Work</h1>
            <p className="text-[13px] text-gray-500 mt-1">All tasks assigned to you across projects</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[8px] text-gray-600 hover:bg-gray-50 transition-colors text-[13px]">
              <Filter className="size-4" />
              <span style={{ fontWeight: 500 }}>Filter</span>
            </button>
            <button
              onClick={() => setShowNewTask(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition-colors text-[13px]"
              style={{ fontWeight: 500 }}
            >
              <Plus className="size-4" />
              Add Task
            </button>
          </div>
        </div>

        {/* Work Tabs */}
        <div className="border-b border-gray-200 mb-5">
          <nav className="flex gap-6">
            {WORK_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveWorkTab(tab)}
                className="pb-3 text-[13px] transition-colors flex items-center gap-2"
                style={{
                  fontWeight: activeWorkTab === tab ? 600 : 400,
                  color: activeWorkTab === tab ? "#3B82F6" : "#6b7280",
                  borderBottom: activeWorkTab === tab ? "2px solid #3B82F6" : "2px solid transparent",
                }}
              >
                {tab}
                {tab === "Assigned to me" && (
                  <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-[11px]">
                    {assignedCount}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 mb-5">
          {VIEW_TABS.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-[8px] text-[13px] transition-all"
              style={{
                fontWeight: activeView === view.id ? 600 : 400,
                color: activeView === view.id ? "#3B82F6" : "#6b7280",
                background: activeView === view.id ? "rgba(59,130,246,0.08)" : "transparent",
                border: activeView === view.id ? "1px solid rgba(59,130,246,0.3)" : "1px solid #e5e7eb",
              }}
            >
              {view.icon}
              {view.label}
            </button>
          ))}
        </div>

        {/* View content */}
        {renderView()}

        {/* Task creation modal */}
        {showNewTask && (
          <NewTaskModal
            onClose={() => setShowNewTask(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    </MainLayout>
  );
}