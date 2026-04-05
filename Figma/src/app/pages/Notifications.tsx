import { useState } from "react";
import svgPaths from "../../imports/svg-dojkrpmzby";
import MainLayout from "../components/MainLayout";
import { X } from "lucide-react";

// ── Type icons ────────────────────────────────────────────────────────────────
function InfoIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8.25V12.75" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 5.25H9.0075" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SuccessIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M16.5 8.77C16.5 9.04 16.49 9.31 16.46 9.57C16.1 13.17 13.17 16.1 9.57 16.46C9.31 16.49 9.04 16.5 8.77 16.5C4.77 16.5 1.5 13.23 1.5 9.23C1.5 5.48 4.27 2.38 7.9 1.83C8.19 1.78 8.48 1.75 8.77 1.75"
        stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M2 9L5.5 12.5L15 3" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarningIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 5.25V9.75" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 12.75H9.0075" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ErrorIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 6.5L11.5 11.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11.5 6.5L6.5 11.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ── Bell icon (from Figma import) ─────────────────────────────────────────────
function BellIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d={svgPaths.p10a19260} stroke="#030213" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33" />
      <path d={svgPaths.p26bc6800} stroke="#030213" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33" />
    </svg>
  );
}

// ── Mark-all-read icon (from Figma import) ────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p3d131900} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
      <path d={svgPaths.p2a98380} stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
    </svg>
  );
}

// ── Search icon (from Figma import) ───────────────────────────────────────────
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p8cdb700} stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
      <path d="M12.25 12.25L9.74167 9.74167" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
type NotifType = "info" | "success" | "warning" | "error";

interface Notification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  relativeTime: string;
  timestamp: string;
  read: boolean;
}

const INITIAL_NOTIFICATIONS: Notification[] = [];

const TYPE_ICON: Record<NotifType, (color: string) => JSX.Element> = {
  info:    (c) => <InfoIcon color={c} />,
  success: (c) => <SuccessIcon color={c} />,
  warning: (c) => <WarningIcon color={c} />,
  error:   (c) => <ErrorIcon color={c} />,
};

const TYPE_COLOR: Record<NotifType, string> = {
  info:    "#155DFC",
  success: "#00A63E",
  warning: "#D08700",
  error:   "#E7000B",
};

const BADGE_STYLE: Record<NotifType, { bg: string; color: string; border?: string }> = {
  info:    { bg: "transparent", color: "#0a0a0a", border: "1px solid rgba(0,0,0,0.12)" },
  success: { bg: "#030213",     color: "white" },
  warning: { bg: "#eceef2",     color: "#030213" },
  error:   { bg: "#E7000B",     color: "white" },
};

// ── Main component ────────────────────────────────────────────────────────────
export default function Notifications() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "unread" | "read">("all");

  const unreadCount = notifications.filter((n) => !n.read).length;
  const readCount   = notifications.filter((n) =>  n.read).length;

  const filtered = notifications.filter((n) => {
    const matchesTab =
      tab === "all"    ? true :
      tab === "unread" ? !n.read :
      n.read;
    const matchesSearch =
      search === "" ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.body.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function markRead(id: string) {
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  }

  function deleteNotification(id: string) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  function deleteAll() {
    setNotifications([]);
  }

  const TABS = [
    { id: "all",    label: `All (${notifications.length})` },
    { id: "unread", label: `Unread (${unreadCount})` },
    { id: "read",   label: `Read (${readCount})` },
  ] as const;

  return (
    <MainLayout>
      <div
        className="max-w-[820px] mx-auto px-6 py-8"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BellIcon />
            <div>
              <h1
                className="text-[21px] text-[#0a0a0a] leading-[28px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Notifications
              </h1>
              <p className="text-[14px] text-[#717182] leading-[21px]">
                Stay updated with your latest activities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[10.5px]">
            {/* Unread badge */}
            {unreadCount > 0 && (
              <div
                className="px-[11px] py-[4px] rounded-[6.75px] text-white text-[10.5px]"
                style={{ background: "#030213", fontWeight: 500 }}
              >
                {unreadCount} unread
              </div>
            )}
            {/* Mark all as read */}
            <button
              onClick={markAllRead}
              className="flex items-center gap-[7px] px-[10px] py-[5px] rounded-[6.75px] bg-white text-[12px] text-[#0a0a0a] hover:bg-gray-50 transition-colors"
              style={{
                border: "0.8px solid rgba(0,0,0,0.1)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              <CheckIcon />
              Mark all as read
            </button>
            {/* Delete all */}
            {notifications.length > 0 && (
              <button
                onClick={deleteAll}
                className="flex items-center gap-[7px] px-[10px] py-[5px] rounded-[6.75px] bg-white text-[12px] text-[#E7000B] hover:bg-red-50 transition-colors"
                style={{
                  border: "0.8px solid rgba(231,0,11,0.2)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                <X size={13} strokeWidth={2.2} />
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* ── Search ── */}
        <div className="relative mb-5">
          <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notifications..."
            className="w-full h-[40px] pl-[36px] pr-4 rounded-[10px] text-[13px] text-[#0a0a0a] outline-none placeholder:text-[#9999aa] transition-shadow"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "white",
              border: "1.5px solid #e0e0ea",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.border = "1.5px solid #155DFC";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(21,93,252,0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.border = "1.5px solid #e0e0ea";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
            }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#9999aa] hover:text-[#0a0a0a] transition-colors"
            >
              <X size={14} strokeWidth={2} />
            </button>
          )}
        </div>

        {/* ── Tabs ── */}
        <div
          className="relative flex items-center h-[32px] rounded-[12.75px] mb-6 p-[3px]"
          style={{ background: "#ececf0", width: "fit-content" }}
        >
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="h-[26px] px-[8px] rounded-[12.75px] text-[12.25px] transition-all whitespace-nowrap"
              style={{
                minWidth: "130px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                background: tab === id ? "white" : "transparent",
                color: "#0a0a0a",
                boxShadow: tab === id ? "0 1px 3px rgba(0,0,0,0.08)" : undefined,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Notification list ── */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
              <div className="size-14 rounded-full bg-[#f3f3f5] flex items-center justify-center">
                <BellIcon />
              </div>
              <p className="text-[14px] text-[#0a0a0a]" style={{ fontWeight: 500 }}>
                No notifications found
              </p>
              <p className="text-[12.25px] text-[#717182]">
                {search ? "Try a different search term." : "You're all caught up!"}
              </p>
            </div>
          ) : (
            filtered.map((notif) => {
              const badge  = BADGE_STYLE[notif.type];
              const iconColor = TYPE_COLOR[notif.type];
              const isUnread = !notif.read;

              return (
                <div
                  key={notif.id}
                  className="relative rounded-[12.75px] px-[15px] py-[15px] group"
                  style={{
                    background: isUnread ? "#eff6ff" : "white",
                    border: `0.8px solid ${isUnread ? "#bedbff" : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  <div className="flex items-start gap-[11px]">
                    {/* Type icon */}
                    <div className="shrink-0 mt-[3px]">
                      {TYPE_ICON[notif.type](iconColor)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col gap-[10.5px]">
                      {/* Title row */}
                      <div className="flex items-center gap-[7px] pr-[72px]">
                        <span
                          className="text-[14px] text-[#0a0a0a] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis"
                          style={{ fontWeight: 500 }}
                        >
                          {notif.title}
                        </span>
                        {/* Badge */}
                        <span
                          className="shrink-0 px-[8px] py-[2.5px] rounded-[6.75px] text-[10.5px] leading-[14px]"
                          style={{
                            background: badge.bg,
                            color: badge.color,
                            border: badge.border,
                            fontWeight: 500,
                          }}
                        >
                          {notif.type}
                        </span>
                      </div>

                      {/* Body */}
                      <p className="text-[12.25px] text-[#717182] leading-[19.9px]">
                        {notif.body}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] text-[#717182] leading-[14px]">
                          {notif.relativeTime}
                        </span>
                        <span className="text-[10.5px] text-[#717182] leading-[14px]">
                          {notif.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Per-card actions — always visible in top-right */}
                  <div className="absolute top-[10px] right-[10px] flex items-center gap-[5px]">
                    {/* Mark as read (only shown if unread) */}
                    {isUnread && (
                      <button
                        onClick={() => markRead(notif.id)}
                        title="Mark as read"
                        className="flex items-center gap-1 px-[7px] py-[3px] rounded-[6px] text-[10.5px] text-[#155DFC] bg-white hover:bg-blue-50 transition-colors"
                        style={{ border: "0.8px solid rgba(21,93,252,0.25)", fontWeight: 500 }}
                      >
                        <CheckIcon />
                        Read
                      </button>
                    )}
                    {/* Dismiss */}
                    <button
                      onClick={() => deleteNotification(notif.id)}
                      title="Dismiss notification"
                      className="size-[22px] rounded-full flex items-center justify-center text-[#9999aa] bg-white hover:bg-red-50 hover:text-[#E7000B] transition-all"
                      style={{ border: "0.8px solid rgba(0,0,0,0.1)" }}
                    >
                      <X size={12} strokeWidth={2.2} />
                    </button>
                  </div>

                  {/* Unread dot */}
                  {isUnread && (
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 7, height: 7,
                        background: "#155dfc",
                        bottom: 14, right: 15,
                      }}
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </MainLayout>
  );
}