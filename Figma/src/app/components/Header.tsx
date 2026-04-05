import { useRef, useEffect, useState } from "react";
import { Search, Bell, MessageSquare, User, Settings, Palette, LogOut, UserCircle, ChevronRight } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router";
import NotificationsDropdown from "./NotificationsDropdown";
import MessagesDropdown from "./MessagesDropdown";

type Panel = "notifications" | "messages" | null;

export default function Header() {
  const navigate = useNavigate();
  const [openPanel, setOpenPanel] = useState<Panel>(null);
  const panelRef  = useRef<HTMLDivElement>(null);
  const bellRef   = useRef<HTMLButtonElement>(null);
  const msgRef    = useRef<HTMLButtonElement>(null);

  const USER = {
    name: "Alex Johnson",
    shortName: "Alex J.",
    initials: "AJ",
    email: "alex.johnson@taskflow.io",
    role: "Product Manager",
    avatarColor: "#3B82F6",
  };

  /* Close dropdown when clicking outside */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        panelRef.current && !panelRef.current.contains(target) &&
        bellRef.current  && !bellRef.current.contains(target) &&
        msgRef.current   && !msgRef.current.contains(target)
      ) {
        setOpenPanel(null);
      }
    }
    if (openPanel) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openPanel]);

  function toggle(panel: Panel) {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  }

  return (
    <header
      className="h-[70px] flex items-center px-6 gap-6 shrink-0 z-50"
      style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)", borderBottom: "1px solid #2a2a4a" }}
    >
      {/* Centered Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[460px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-[18px] text-[#787486]" />
          <input
            type="text"
            placeholder="Search for report..."
            className="w-full pl-10 pr-4 py-[10px] rounded-[6px] bg-[#f5f5f5] text-[#787486] placeholder:text-[#787486] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-[32px] shrink-0">

        {/* ── Bell / Notifications ── */}
        <div className="relative">
          <button
            ref={bellRef}
            onClick={() => toggle("notifications")}
            className="relative text-white transition-colors"
            style={{ color: openPanel === "notifications" ? "#93c5fd" : "white" }}
          >
            <Bell className="size-[22px]" />
          </button>
          {openPanel === "notifications" && (
            <div ref={openPanel === "notifications" ? panelRef : undefined}>
              <NotificationsDropdown onClose={() => setOpenPanel(null)} />
            </div>
          )}
        </div>

        {/* ── Message icon ── */}
        <div className="relative">
          <button
            ref={msgRef}
            onClick={() => toggle("messages")}
            className="relative transition-colors"
            style={{ color: openPanel === "messages" ? "#93c5fd" : "white" }}
          >
            <MessageSquare className="size-[22px]" />
          </button>
          {openPanel === "messages" && (
            <div ref={openPanel === "messages" ? panelRef : undefined}>
              <MessagesDropdown onClose={() => setOpenPanel(null)} />
            </div>
          )}
        </div>

        {/* ── User Avatar with Dropdown ── */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-[12px] bg-[#2a2a4a] pl-[14px] pr-[6px] py-[6px] rounded-[90px] hover:bg-[#3a3a5a] transition-colors outline-none cursor-pointer">
              <span
                className="text-white text-[14px] whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.48px" }}
              >
                {USER.shortName}
              </span>
              <div className="size-[32px] rounded-full flex items-center justify-center shrink-0" style={{ background: USER.avatarColor }}>
                <span className="text-white text-[12px] font-semibold">{USER.initials}</span>
              </div>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-64 z-50"
              sideOffset={5}
              align="end"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 px-3 py-3 border-b border-gray-200 mb-2">
                <div className="size-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: USER.avatarColor }}>
                  <span className="text-white font-semibold">{USER.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{USER.name}</p>
                  <p className="text-sm text-gray-500 truncate">{USER.email}</p>
                  <p className="text-xs text-gray-400 truncate">{USER.role}</p>
                </div>
              </div>

              <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none">
                <User className="size-4" />
                <span className="text-sm">Profile</span>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                onSelect={() => navigate("/settings")}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none"
              >
                <Settings className="size-4" />
                <span className="text-sm">Account settings</span>
              </DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger className="flex items-center justify-between gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none w-full">
                  <div className="flex items-center gap-3">
                    <Palette className="size-4" />
                    <span className="text-sm">Theme</span>
                  </div>
                  <ChevronRight className="size-4" />
                </DropdownMenu.SubTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent
                    className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-48 z-50"
                    sideOffset={8}
                  >
                    <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none">Light</DropdownMenu.Item>
                    <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none">Dark</DropdownMenu.Item>
                    <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none">System</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />

              <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer outline-none">
                <UserCircle className="size-4" />
                <span className="text-sm">Switch account</span>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                onSelect={() => navigate("/login")}
                className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md cursor-pointer outline-none"
              >
                <LogOut className="size-4" />
                <span className="text-sm">Log out</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
