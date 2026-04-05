import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  X, MessageSquare, UserPlus, CheckSquare,
  Bell, Sparkles, RefreshCw, Info,
  CheckCircle, AlertTriangle, XCircle, Trash2,
} from "lucide-react";
import { useToast, type ToastItem, type ToastType } from "../context/ToastContext";

/* ── Config per type ── */
const CFG: Record<
  ToastType,
  { icon: React.ReactNode; accent: string; iconBg: string; iconColor: string }
> = {
  message:        { icon: <MessageSquare className="size-[18px]" />, accent: "#3b82f6", iconBg: "#dbeafe", iconColor: "#2563eb" },
  invite:         { icon: <UserPlus className="size-[18px]" />,      accent: "#8b5cf6", iconBg: "#ede9fe", iconColor: "#7c3aed" },
  "task-created": { icon: <CheckSquare className="size-[18px]" />,   accent: "#22c55e", iconBg: "#dcfce7", iconColor: "#16a34a" },
  reminder:       { icon: <Bell className="size-[18px]" />,          accent: "#f59e0b", iconBg: "#fef3c7", iconColor: "#d97706" },
  "ai-response":  { icon: <Sparkles className="size-[18px]" />,      accent: "#6366f1", iconBg: "#e0e7ff", iconColor: "#4f46e5" },
  "status-change":{ icon: <RefreshCw className="size-[18px]" />,     accent: "#14b8a6", iconBg: "#ccfbf1", iconColor: "#0d9488" },
  "task-deleted": { icon: <Trash2 className="size-[18px]" />,        accent: "#ef4444", iconBg: "#fee2e2", iconColor: "#dc2626" },
  info:           { icon: <Info className="size-[18px]" />,          accent: "#3b82f6", iconBg: "#dbeafe", iconColor: "#2563eb" },
  success:        { icon: <CheckCircle className="size-[18px]" />,   accent: "#22c55e", iconBg: "#dcfce7", iconColor: "#16a34a" },
  warning:        { icon: <AlertTriangle className="size-[18px]" />, accent: "#f59e0b", iconBg: "#fef3c7", iconColor: "#d97706" },
  error:          { icon: <XCircle className="size-[18px]" />,       accent: "#ef4444", iconBg: "#fee2e2", iconColor: "#dc2626" },
};

/* ── Individual toast ── */
function Toast({ item, onDismiss }: { item: ToastItem; onDismiss: () => void }) {
  const [progress, setProgress] = useState(100);
  const cfg = CFG[item.type];

  useEffect(() => {
    const step = 100 / (item.duration / 50);
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p - step <= 0) {
          clearInterval(iv);
          onDismiss();
          return 0;
        }
        return p - step;
      });
    }, 50);
    return () => clearInterval(iv);
  }, [item.duration, onDismiss]);

  const timeStr = new Date(item.createdAt).toLocaleTimeString([], {
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <motion.div
      layout
      initial={{ x: 420, opacity: 0, scale: 0.95 }}
      animate={{ x: 0,   opacity: 1, scale: 1    }}
      exit={{    x: 420, opacity: 0, scale: 0.95  }}
      transition={{ type: "spring", damping: 28, stiffness: 320 }}
      style={{
        width: 360,
        background: "white",
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)",
        overflow: "hidden",
        borderLeft: `4px solid ${cfg.accent}`,
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div className="flex items-start gap-3 px-4 pt-4 pb-3">
        {/* Icon */}
        <div
          className="shrink-0 size-9 rounded-[10px] flex items-center justify-center"
          style={{ background: cfg.iconBg, color: cfg.iconColor }}
        >
          {cfg.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[13px] text-gray-900 truncate" style={{ fontWeight: 700 }}>
              {item.title}
            </p>
            <span className="text-[10px] text-gray-400 shrink-0">{timeStr}</span>
          </div>
          <p className="text-[12px] text-gray-500 mt-0.5 leading-[1.5] line-clamp-2">
            {item.body}
          </p>
        </div>

        {/* Close */}
        <button
          onClick={onDismiss}
          className="shrink-0 size-5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors ml-1 mt-0.5"
        >
          <X className="size-3" strokeWidth={2.5} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] w-full" style={{ background: "#f0f0f5" }}>
        <div
          className="h-full transition-none"
          style={{ width: `${progress}%`, background: cfg.accent, borderRadius: "0 2px 2px 0" }}
        />
      </div>
    </motion.div>
  );
}

/* ── Container ── */
export default function ToastContainer() {
  const { toasts, dismiss } = useToast();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column-reverse",
        gap: 10,
        pointerEvents: "none",
      }}
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((t) => (
          <div key={t.id} style={{ pointerEvents: "auto" }}>
            <Toast item={t} onDismiss={() => dismiss(t.id)} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
