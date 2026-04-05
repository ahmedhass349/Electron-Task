import { useState } from "react";
import { MessageSquare, X, Search, ArrowRight, Send } from "lucide-react";
import { useNavigate } from "react-router";

interface Contact {
  id: string;
  name: string;
  initials: string;
  color: string;
  preview: string;
  time: string;
  unread: number;
  online: boolean;
}

interface MiniMsg {
  id: string;
  text: string;
  isMine: boolean;
  time: string;
}

const CONTACTS: Contact[] = [];

interface Props { onClose: () => void; }

export default function MessagesDropdown({ onClose }: Props) {
  const navigate = useNavigate();
  const [contacts]           = useState<Contact[]>(CONTACTS);
  const [search, setSearch]  = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [msgMap, setMsgMap]  = useState<Record<string, MiniMsg[]>>({});
  const [input, setInput]    = useState("");

  const active   = contacts.find((c) => c.id === activeId) ?? null;
  const messages = activeId ? (msgMap[activeId] ?? []) : [];

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalUnread = contacts.reduce((s, c) => s + c.unread, 0);

  function send() {
    if (!input.trim() || !activeId) return;
    const msg: MiniMsg = {
      id: Date.now().toString(),
      text: input.trim(),
      isMine: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMsgMap((p) => ({ ...p, [activeId]: [...(p[activeId] ?? []), msg] }));
    setInput("");
  }

  return (
    <div
      className="absolute right-0 top-full mt-3 rounded-[16px] bg-white flex flex-col overflow-hidden"
      style={{
        width: active ? 420 : 360,
        boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
        fontFamily: "'Inter', sans-serif",
        zIndex: 100,
        transition: "width 0.2s ease",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ borderBottom: "1px solid #f0f1f5" }}>
        <div className="flex items-center gap-2.5">
          {active ? (
            <button onClick={() => setActiveId(null)} className="text-gray-400 hover:text-gray-700 transition-colors mr-1">
              <ArrowRight className="size-4 rotate-180" />
            </button>
          ) : (
            <MessageSquare className="size-4 text-gray-700" />
          )}
          <span className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>
            {active ? active.name : "Messages"}
          </span>
          {!active && totalUnread > 0 && (
            <span className="text-[10px] text-white px-1.5 py-0.5 rounded-full" style={{ background: "#3b82f6", fontWeight: 600 }}>
              {totalUnread}
            </span>
          )}
          {active && (
            <span
              className="size-2 rounded-full"
              style={{ background: active.online ? "#22c55e" : "#9ca3af" }}
            />
          )}
        </div>
        <button
          onClick={onClose}
          className="size-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
        >
          <X className="size-3.5" strokeWidth={2.2} />
        </button>
      </div>

      {/* Body */}
      {!active ? (
        <>
          {/* Search */}
          <div className="px-4 py-3 shrink-0" style={{ borderBottom: "1px solid #f0f1f5" }}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-[8px]" style={{ background: "#f5f5f7", border: "1px solid #e5e7eb" }}>
              <Search className="size-3.5 text-gray-400 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations…"
                className="flex-1 bg-transparent outline-none text-[12px] text-gray-700 placeholder:text-gray-400"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600">
                  <X className="size-3" />
                </button>
              )}
            </div>
          </div>

          {/* Contact list */}
          <div className="overflow-y-auto" style={{ maxHeight: 320 }}>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 gap-2 text-center px-6">
                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <MessageSquare className="size-5 text-blue-400" />
                </div>
                <p className="text-[12px] text-gray-700" style={{ fontWeight: 500 }}>
                  {search ? "No conversations found" : "No messages yet"}
                </p>
                <p className="text-[11px] text-gray-400">
                  {search ? "Try a different name." : "Start a new chat from the Messages page."}
                </p>
              </div>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50"
                  style={{ borderBottom: "1px solid #f7f7f9" }}
                >
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div
                      className="size-9 rounded-full flex items-center justify-center text-white text-[12px]"
                      style={{ background: c.color, fontWeight: 600 }}
                    >
                      {c.initials}
                    </div>
                    {c.online && (
                      <span className="absolute bottom-0 right-0 size-2.5 bg-green-400 rounded-full border-2 border-white" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[13px] text-gray-900 truncate" style={{ fontWeight: c.unread > 0 ? 600 : 400 }}>
                        {c.name}
                      </span>
                      <span className="text-[10.5px] text-gray-400 shrink-0 ml-2">{c.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[11.5px] text-gray-500 truncate">{c.preview}</p>
                      {c.unread > 0 && (
                        <span
                          className="shrink-0 ml-2 size-4 rounded-full flex items-center justify-center text-[9px] text-white"
                          style={{ background: "#3b82f6", fontWeight: 700 }}
                        >
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </>
      ) : (
        <>
          {/* Mini chat */}
          <div className="overflow-y-auto flex flex-col gap-3 px-4 py-4" style={{ maxHeight: 280 }}>
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 gap-2 text-center">
                <p className="text-[12px] text-gray-400">No messages yet. Say hello! 👋</p>
              </div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.isMine ? "items-end" : "items-start"}`}>
                  <div
                    className="px-4 py-2.5 rounded-[14px] max-w-[260px]"
                    style={{
                      background: m.isMine ? "#3b82f6" : "#f0f0f5",
                      borderBottomRightRadius: m.isMine ? 4 : undefined,
                      borderBottomLeftRadius: !m.isMine ? 4 : undefined,
                    }}
                  >
                    <p className="text-[12px] leading-[1.5]" style={{ color: m.isMine ? "white" : "#1f2937" }}>
                      {m.text}
                    </p>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{m.time}</span>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 shrink-0" style={{ borderTop: "1px solid #f0f1f5" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 px-3 py-2 rounded-[8px] text-[12px] text-gray-800 placeholder:text-gray-400 outline-none"
              style={{ background: "#f5f5f7", border: "1px solid #e5e7eb" }}
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="size-8 rounded-[8px] flex items-center justify-center bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <Send className="size-3.5 text-white" />
            </button>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="px-5 py-3 shrink-0" style={{ borderTop: "1px solid #f0f1f5" }}>
        <button
          onClick={() => { navigate("/messages"); onClose(); }}
          className="w-full flex items-center justify-center gap-1.5 text-[12px] text-blue-500 hover:text-blue-700 transition-colors"
          style={{ fontWeight: 500 }}
        >
          Open Messages
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
