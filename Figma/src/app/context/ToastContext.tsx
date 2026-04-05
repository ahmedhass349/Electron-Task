import {
  createContext, useContext, useState, useCallback,
  useEffect, useRef, type ReactNode,
} from "react";
import { useTasks } from "./TaskContext";

export type ToastType =
  | "message"
  | "invite"
  | "task-created"
  | "reminder"
  | "ai-response"
  | "status-change"
  | "task-deleted"
  | "success"
  | "info"
  | "warning"
  | "error";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  body: string;
  duration: number;
  createdAt: number;
}

interface ToastContextType {
  toasts: ToastItem[];
  showToast: (opts: Omit<ToastItem, "id" | "createdAt">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  showToast: () => {},
  dismiss: () => {},
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const { tasks } = useTasks();
  const firedRef = useRef<Set<string>>(new Set());

  const showToast = useCallback((opts: Omit<ToastItem, "id" | "createdAt">) => {
    const item: ToastItem = {
      ...opts,
      id: `t-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      createdAt: Date.now(),
    };
    setToasts((prev) => [item, ...prev].slice(0, 5));
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  /* ── Reminder polling (every 30 s) ── */
  useEffect(() => {
    const check = () => {
      const now = Date.now();
      tasks.forEach((task) => {
        task.reminders.forEach((r) => {
          if (!r.date || !r.time) return;
          const key = `${task.id}:${r.id}`;
          if (firedRef.current.has(key)) return;
          const dt = new Date(`${r.date}T${r.time}`).getTime();
          const diff = now - dt;
          if (diff >= 0 && diff <= 120_000) {
            firedRef.current.add(key);
            showToast({
              type: "reminder",
              title: "Reminder",
              body: `"${task.title}" — ${r.date} at ${r.time} via ${r.via}`,
              duration: 8000,
            });
          }
        });
      });
    };
    const id = setInterval(check, 30_000);
    return () => clearInterval(id);
  }, [tasks, showToast]);

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
