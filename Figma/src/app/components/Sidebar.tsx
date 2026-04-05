import { Home, CheckSquare, Users, MessageSquare, Bell, Sparkles, Settings, LogOut, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { TaskFlowLogo } from "./TaskFlowLogo";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  hasArrow?: boolean;
}

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navItems: NavItem[] = [
    { icon: <Home className="size-[18px]" />,         label: "Dashboard",     path: "/",             hasArrow: true },
    { icon: <CheckSquare className="size-[18px]" />,  label: "My Work",       path: "/my-work"       },
    { icon: <Users className="size-[18px]" />,        label: "Teams",         path: "/teams"         },
    { icon: <MessageSquare className="size-[18px]" />,label: "Messages",      path: "/messages"      },
    { icon: <Bell className="size-[18px]" />,         label: "Notifications", path: "/notifications" },
    { icon: <Sparkles className="size-[18px]" />,     label: "AI Chat",       path: "/ai-chat"       },
  ];

  function handleLogOut() {
    navigate("/login");
  }

  return (
    <div
      className="flex flex-col shrink-0 transition-all duration-300 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
        width: isCollapsed ? "64px" : "220px",
        borderRight: "1px solid #2a2a4a",
      }}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      {/* Logo strip at top of sidebar */}
      <div className="px-3 py-4 flex items-center" style={{ borderBottom: "1px solid #2a2a4a", minHeight: 64 }}>
        <TaskFlowLogo collapsed={isCollapsed} size="sm" textColor="white" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-[11px] rounded-[8px] transition-all duration-200 relative group ${
                isActive
                  ? "text-[#3C21F7]"
                  : "text-[#787486] hover:text-white"
              }`}
              style={
                isActive
                  ? { background: "rgba(60,33,247,0.12)" }
                  : undefined
              }
            >
              {/* Left accent bar for active */}
              {isActive && (
                <span
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r-full"
                  style={{ background: "#3C21F7" }}
                />
              )}
              <span className={`flex-shrink-0 ${isActive ? "text-[#3C21F7]" : ""}`}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <div className="flex items-center justify-between flex-1 min-w-0">
                  <span
                    className="text-[14px] whitespace-nowrap"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {item.label}
                  </span>
                  {item.hasArrow && isActive && (
                    <ChevronDown className="size-[14px] text-[#3C21F7] shrink-0" />
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="py-4 px-2 space-y-1" style={{ borderTop: "1px solid #2a2a4a" }}>
        {/* Settings — navigates to /settings */}
        <Link
          to="/settings"
          title={isCollapsed ? "Settings" : undefined}
          className={`flex items-center gap-3 px-3 py-[11px] rounded-[8px] transition-colors w-full relative ${
            location.pathname === "/settings"
              ? "text-[#3C21F7]"
              : "text-[#787486] hover:text-white"
          }`}
          style={
            location.pathname === "/settings"
              ? { background: "rgba(60,33,247,0.12)" }
              : undefined
          }
        >
          {location.pathname === "/settings" && (
            <span
              className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r-full"
              style={{ background: "#3C21F7" }}
            />
          )}
          <Settings className="size-[18px] shrink-0" />
          {!isCollapsed && (
            <span
              className="text-[14px] whitespace-nowrap"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: location.pathname === "/settings" ? 600 : 400,
              }}
            >
              Settings
            </span>
          )}
        </Link>

        {/* Log Out — navigates to /login */}
        <button
          onClick={handleLogOut}
          className="flex items-center gap-3 px-3 py-[11px] rounded-[8px] text-[#787486] hover:text-red-400 transition-colors w-full"
          title={isCollapsed ? "Log Out" : undefined}
        >
          <LogOut className="size-[18px] shrink-0" />
          {!isCollapsed && (
            <span
              className="text-[14px] whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Log Out
            </span>
          )}
        </button>
      </div>
    </div>
  );
}