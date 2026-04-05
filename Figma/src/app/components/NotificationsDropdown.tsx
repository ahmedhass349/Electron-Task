import { useState } from "react";
import { Bell, X, Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

type NotifType = "info" | "success" | "warning" | "error";

interface Notification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  relativeTime: string;
  read: boolean;
}

const TYPE_BG: Record<NotifType, string>   = { info: "#eff6ff", success: "#f0fdf4", warning: "#fffbeb", error: "#fef2f2" };
const TYPE_DOT: Record<NotifType, string>  = { info: "#3b82f6", success: "#22c55e", warning: "#f59e0b", error: "#ef4444" };
const TYPE_ICON: Record<NotifType, string> = { info: "ℹ", success: "✓", warning: "⚠", error: "✕" };
const TYPE_IC_COLOR: Record<NotifType, string> = { info: "#3b82f6", success: "#16a34a", warning: "#d08700", error: "#e7000b" };

const INITIAL: Notification[] = [];

interface Props { onClose: () => void; }

export default function NotificationsDropdown({ onClose }: Props) {
  const navigate = useNavigate();
  const [notifs, setNotifs]   = useState<Notification[]>(INITIAL);
  const [tab, setTab]         = useState<"all" | "unread">("all");

  const unread = notifs.filter((n) => !n.read);
  const shown  = tab === "unread" ? unread : notifs;

  function markRead(id: string) {
    setNotifs((p) => p.map((n) => n.id === id ? { ...n, read: true } : n));
  }
  function markAllRead() {
    setNotifs((p) => p.map((n) => ({ ...n, read: true })));
  }
  function dismiss(id: string) {
    setNotifs((p) => p.filter((n) => n.id !== id));
  }

  return (
    <div
      className="absolute right-0 top-full mt-3 w-[380px] rounded-[16px] bg-white flex flex-col overflow-hidden"
      style={{
        boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
        fontFamily: "'Inter', sans-serif",
        zIndex: 100,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #f0f1f5" }}>
        <div className="flex items-center gap-2.5">
          <Bell className="size-4 text-gray-700" />
          <span className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>Notifications</span>
          {unread.length > 0 && (
            <span
              className="text-[10px] text-white px-1.5 py-0.5 rounded-full"
              style={{ background: "#3b82f6", fontWeight: 600 }}
            >
              {unread.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unread.length > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-1 text-[11px] text-blue-500 hover:text-blue-700 transition-colors"
              style={{ fontWeight: 500 }}
            >
              <Check className="size-3" />
              Mark all read
            </button>
          )}
          <button
            onClick={onClose}
            className="size-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          >
            <X className="size-3.5" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-5 pt-3 pb-0 gap-4" style={{ borderBottom: "1px solid #f0f1f5" }}>
        {(["all", "unread"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="pb-2.5 text-[12px] transition-colors capitalize"
            style={{
              fontWeight: tab === t ? 600 : 400,
              color: tab === t ? "#3b82f6" : "#9ca3af",
              borderBottom: tab === t ? "2px solid #3b82f6" : "2px solid transparent",
            }}
          >
            {t === "all" ? `All (${notifs.length})` : `Unread (${unread.length})`}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="overflow-y-auto" style={{ maxHeight: 340 }}>
        {shown.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 gap-2 text-center px-6">
            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Bell className="size-5 text-gray-400" />
            </div>
            <p className="text-[12px] text-gray-700" style={{ fontWeight: 500 }}>
              {tab === "unread" ? "No unread notifications" : "You're all caught up!"}
            </p>
            <p className="text-[11px] text-gray-400">We'll let you know when something new arrives.</p>
          </div>
        ) : (
          shown.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-3 px-5 py-3.5 group transition-colors hover:bg-gray-50"
              style={{
                borderBottom: "1px solid #f7f7f9",
                background: !n.read ? TYPE_BG[n.type] : undefined,
              }}
            >
              {/* Icon */}
              <div
                className="size-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px]"
                style={{ background: `${TYPE_DOT[n.type]}18`, color: TYPE_IC_COLOR[n.type], fontWeight: 700 }}
              >
                {TYPE_ICON[n.type]}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[12.5px] text-gray-900 truncate" style={{ fontWeight: !n.read ? 600 : 400 }}>
                    {n.title}
                  </span>
                  {!n.read && <span className="size-1.5 rounded-full shrink-0" style={{ background: TYPE_DOT[n.type] }} />}
                </div>
                <p className="text-[11.5px] text-gray-500 leading-[1.5] line-clamp-2">{n.body}</p>
                <p className="text-[10.5px] text-gray-400 mt-1">{n.relativeTime}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {!n.read && (
                  <button
                    onClick={() => markRead(n.id)}
                    title="Mark as read"
                    className="size-5 rounded-full bg-white flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors"
                    style={{ border: "1px solid #bfdbfe" }}
                  >
                    <Check className="size-3" />
                  </button>
                )}
                <button
                  onClick={() => dismiss(n.id)}
                  title="Dismiss"
                  className="size-5 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  style={{ border: "1px solid #e5e7eb" }}
                >
                  <X className="size-3" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3" style={{ borderTop: "1px solid #f0f1f5" }}>
        <button
          onClick={() => { navigate("/notifications"); onClose(); }}
          className="w-full flex items-center justify-center gap-1.5 text-[12px] text-blue-500 hover:text-blue-700 transition-colors"
          style={{ fontWeight: 500 }}
        >
          View all notifications
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
