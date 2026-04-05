import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-g6sqisqbsq";
import MainLayout from "../components/MainLayout";
import { Plus, X, User } from "lucide-react";
import { useToast } from "../context/ToastContext";

// ── Types ─────────────────────────────────────────────────────────────────────
type MsgType = "text" | "voice";

interface Message {
  id: string;
  type: MsgType;
  text?: string;
  duration?: string;
  time: string;
  isMine: boolean;
}

interface Contact {
  id: string;
  name: string;
  img: string;
  preview: string;
  time: string;
  unread: number;
  starred: boolean;
}

// ── Waveform SVG (from Figma) ─────────────────────────────────────────────────
function Waveform() {
  const bars = [
    [3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[2,4],[2,4],[2,4],[2,4],[2,4],
    [1.5,4.5],[1.5,4.5],[1.5,4.5],[1.5,4.5],[1.5,4.5],[0.5,5.5],[1,5],[1,5],[1,5],[1,5],
    [1.5,4.5],[1.5,4.5],[2,4],[2,4],[2,4],[2,4],[2,4],[0.5,5.5],[1,5],[1,5],[1,5],
    [1.5,4.5],[1.5,4.5],[2,4],[2,4],[2,4],[2,4],[2,4],[2,4],[3,3],[3,3],[2,4],
    [3,3],[1.5,4.5],[1.5,4.5],[2,4],[2,4],[2,4],[0.5,5.5],[1,5],[1,5],[1,5],
    [1,5],[2,4],[2,4],[3,3],[3,3],[1.5,4.5],[1.5,4.5],[1.5,4.5],[1.5,4.5],
    [3,3],[3,3],[2,4],[2,4],[2,4],[2,4],[2,4],[2,4],[3,3],[3,3],[3,3],[3,3],
    [0.5,5.5],[1,5],[1.5,4.5],[1.5,4.5],[3,3],[2,4],[2,4],[2,4],[2,4],[2,4],
    [2,4],[3,3],[3,3],[3,3],[3,3],
  ];
  return (
    <svg width="172" height="18" viewBox="0 0 172 18" fill="none">
      {bars.map(([y1frac, y2frac], i) => (
        <line
          key={i}
          x1={i * 2 + 0.5} x2={i * 2 + 0.5}
          y1={y1frac} y2={18 - (18 - y2frac * (18 / 6))}
          stroke="#3D64FD" strokeLinecap="round" strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}

function StarIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="18" height="17" viewBox="0 0 18.89 17" fill="none">
      <path
        d={svgPaths.p5f8db00}
        fill={filled ? "#3D64FD" : "none"}
        stroke="#3D64FD"
        strokeWidth={filled ? 0 : 0.7}
      />
    </svg>
  );
}

function EmojiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p1753db00} fill="#3D64FD" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.pa1aeb80} fill="#3D64FD" />
    </svg>
  );
}

function LikeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p3aecda80} fill="#3D64FD" />
    </svg>
  );
}

function DotsVIcon() {
  return (
    <svg width="5" height="17" viewBox="0 0 4.47368 17" fill="none">
      <path d={svgPaths.p2582cc80} fill="#1A1A1B" />
    </svg>
  );
}

function SearchIconFigma({ color = "#3D64FD", size = 12 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16.2 17" fill="none">
      <path d={svgPaths.p12750c00} fill={color} />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13.33 13.33" fill="none">
      <path d={svgPaths.p2105d2f0} fill="#AFB8CF" />
    </svg>
  );
}

function PlayBtn() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="12" fill="#3D64FD" />
      <path d={svgPaths.p3bdb3180} fill="#F8F9FD" />
    </svg>
  );
}

// ── New Conversation Modal ─────────────────────────────────────────────────────
function NewConversationModal({
  onClose,
  onStart,
}: {
  onClose: () => void;
  onStart: (name: string, firstMessage: string) => void;
}) {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [error, setError]     = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) { setError("Please enter a name."); return; }
    onStart(name.trim(), message.trim());
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,10,35,0.45)", backdropFilter: "blur(3px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-[440px] rounded-[20px] bg-white shadow-2xl flex flex-col"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5" style={{ borderBottom: "1px solid #f0f1f5" }}>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-[10px] bg-blue-50 flex items-center justify-center">
              <User className="size-5 text-blue-500" />
            </div>
            <div>
              <h2 className="text-[17px] text-gray-900" style={{ fontWeight: 700 }}>Start a Conversation</h2>
              <p className="text-[12px] text-gray-500 mt-0.5">Begin a new chat with someone</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="size-4" strokeWidth={2.2} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-700" style={{ fontWeight: 500 }}>
              Name <span className="text-red-500">*</span>
            </label>
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-[10px]"
              style={{ border: error ? "1.5px solid #ef4444" : "1.5px solid #e5e7eb", background: "#fafafa" }}
            >
              <User className="size-4 text-gray-400 shrink-0" />
              <input
                value={name}
                onChange={(e) => { setName(e.target.value); setError(""); }}
                placeholder="e.g. Sarah Wilson"
                className="flex-1 bg-transparent outline-none text-[13px] text-gray-800 placeholder:text-gray-400"
                autoFocus
              />
            </div>
            {error && <p className="text-[11px] text-red-500">{error}</p>}
          </div>

          {/* First message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-700" style={{ fontWeight: 500 }}>First Message <span className="text-gray-400" style={{ fontWeight: 400 }}>(optional)</span></label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say hello…"
              rows={3}
              className="w-full px-4 py-3 rounded-[10px] text-[13px] text-gray-800 placeholder:text-gray-400 outline-none resize-none"
              style={{ border: "1.5px solid #e5e7eb", background: "#fafafa" }}
            />
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-[10px] text-[13px] text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
              style={{ fontWeight: 500 }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-[10px] text-[13px] text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <Plus className="size-4" />
              Start Chat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Data (empty — no dummy data) ──────────────────────────────────────────────
const CONTACTS: Contact[] = [];
const INITIAL_MESSAGES: Record<string, Message[]> = {};

// ── Avatar colors ─────────────────────────────────────────────────────────────
const AVATAR_COLORS = ["#3b82f6","#8b5cf6","#ec4899","#14b8a6","#f97316","#22c55e"];

// ── Simulated replies ─────────────────────────────────────────────────────────
const SIM_REPLIES = [
  "Got it! I'll take a look at that.",
  "Thanks for the heads up! 👍",
  "Sounds good, let's sync up later.",
  "On it! Will update you shortly.",
  "Great, I'll keep you posted.",
  "Thanks! Makes sense.",
  "Sure thing, I'm on it!",
];

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Messages() {
  const { showToast } = useToast();
  const [contacts, setContacts] = useState<Contact[]>(CONTACTS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [showNewConvo, setShowNewConvo] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const activeContact = contacts.find((c) => c.id === selectedId) ?? null;
  const activeMessages = selectedId ? (messages[selectedId] ?? []) : [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeMessages, selectedId]);

  function sendMessage() {
    if (!input.trim() || !selectedId) return;
    const contactName = contacts.find((c) => c.id === selectedId)?.name ?? "Someone";
    const msg: Message = {
      id: Date.now().toString(),
      type: "text",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMine: true,
    };
    setMessages((prev) => ({ ...prev, [selectedId]: [...(prev[selectedId] ?? []), msg] }));
    setInput("");

    // Simulate a reply after 2-3 seconds
    const delay = 2000 + Math.random() * 1500;
    const cid = selectedId;
    setTimeout(() => {
      const reply: Message = {
        id: `reply-${Date.now()}`,
        type: "text",
        text: SIM_REPLIES[Math.floor(Math.random() * SIM_REPLIES.length)],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isMine: false,
      };
      setMessages((prev) => ({ ...prev, [cid]: [...(prev[cid] ?? []), reply] }));
      showToast({
        type: "message",
        title: `New message from ${contactName}`,
        body: reply.text ?? "",
        duration: 5000,
      });
    }, delay);
  }

  function toggleStar(id: string) {
    setContacts((prev) => prev.map((c) => c.id === id ? { ...c, starred: !c.starred } : c));
  }

  function handleStartConversation(name: string, firstMessage: string) {
    const id = `contact-${Date.now()}`;
    const color = AVATAR_COLORS[contacts.length % AVATAR_COLORS.length];
    const newContact: Contact = {
      id,
      name,
      img: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color.slice(1)}&color=fff&size=100`,
      preview: firstMessage || "New conversation",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      unread: 0,
      starred: false,
    };
    setContacts((prev) => [newContact, ...prev]);
    const msgs: Message[] = firstMessage
      ? [{
          id: `msg-${Date.now()}`,
          type: "text",
          text: firstMessage,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isMine: true,
        }]
      : [];
    setMessages((prev) => ({ ...prev, [id]: msgs }));
    setSelectedId(id);
    showToast({
      type: "message",
      title: "Conversation Started",
      body: `You started a new chat with ${name}.`,
      duration: 4000,
    });
  }

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="flex h-full overflow-hidden" style={{ fontFamily: "'Inter', sans-serif", background: "#f8f9fd" }}>

        {/* ── LEFT PANEL ── */}
        <div className="w-[380px] shrink-0 flex flex-col bg-white" style={{ borderRight: "0.5px solid #AFB8CF" }}>

          {/* Header row — clean, no buttons */}
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "0.5px solid #AFB8CF" }}>
            <span className="text-[14px] text-black" style={{ fontWeight: 600 }}>All Messages</span>
            <button
              onClick={() => setShowNewConvo(true)}
              className="size-8 rounded-[8px] flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors"
              title="Start a Conversation"
            >
              <Plus className="size-4" />
            </button>
          </div>

          {/* Search */}
          <div className="px-5 py-3" style={{ borderBottom: "0.25px solid #AFB8CF" }}>
            <div className="flex items-center gap-2 bg-[#f8f9fd] rounded-[8px] px-4 py-2">
              <SearchIconFigma color="#3D64FD" size={12} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search or start a new chat"
                className="flex-1 bg-transparent outline-none text-[11px] text-[#9fa7be] placeholder:text-[#9fa7be]"
              />
            </div>
          </div>

          {/* Contact list */}
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6 py-12">
                <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#3D64FD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[13px] text-[#1a1a1b]" style={{ fontWeight: 600 }}>No conversations yet</p>
                <p className="text-[11px] text-[#9fa7be]">
                  {search ? "No contacts match your search." : "Click \"Start a Conversation\" to get going."}
                </p>
              </div>
            ) : (
              filtered.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className="w-full flex items-start gap-3 px-5 py-4 text-left transition-colors cursor-pointer"
                  style={{
                    borderBottom: "0.25px solid #f0f1f5",
                    background: selectedId === c.id ? "#f0f4ff" : "white",
                  }}
                >
                  {/* Avatar */}
                  <div className="size-[44px] rounded-[8px] shrink-0 overflow-hidden relative">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                    <span className="absolute bottom-0.5 right-0.5 size-2.5 bg-green-400 rounded-full border-2 border-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[15px] text-black truncate" style={{ fontWeight: 500 }}>
                        {c.name}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleStar(c.id); }}
                        className="shrink-0 ml-2"
                      >
                        <StarIcon filled={c.starred} />
                      </button>
                    </div>
                    <p className="text-[12px] text-[#636363] leading-[1.4] mb-1.5 line-clamp-2 w-[200px]">
                      {c.preview}
                    </p>
                    <div className="flex items-center gap-1">
                      <ClockIcon />
                      <span className="text-[11px] text-[#9fa7be]">Today</span>
                      <span className="text-[11px] text-[#9fa7be]">|</span>
                      <span className="text-[11px] text-[#9fa7be]">{c.time}</span>
                      {c.unread > 0 && (
                        <span className="ml-auto bg-[#3D64FD] text-white text-[10px] rounded-full px-1.5 py-0.5" style={{ fontWeight: 600 }}>
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#f8f9fd]">

          {!activeContact ? (
            /* Empty / no-selection state */
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-8">
              <div className="size-16 rounded-full bg-blue-50 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="#3D64FD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[17px] text-[#1a1a1b]" style={{ fontWeight: 600 }}>
                  No conversation selected
                </p>
                <p className="text-[13px] text-[#9fa7be] mt-1">
                  Choose a contact from the list or start a new chat
                </p>
              </div>
              <button
                onClick={() => setShowNewConvo(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 transition-colors text-[13px]"
                style={{ fontWeight: 500 }}
              >
                <Plus className="size-4" />
                Start a Conversation
              </button>
            </div>
          ) : (
            <>
              {/* Chat header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white" style={{ borderBottom: "0.25px solid #AFB8CF" }}>
                <div className="flex items-center gap-3">
                  <div className="size-[44px] rounded-[8px] shrink-0 overflow-hidden">
                    <img src={activeContact.img} alt={activeContact.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[14px] text-[#636363]" style={{ fontWeight: 600 }}>
                    {activeContact.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => toggleStar(activeContact.id)}>
                    <StarIcon filled={activeContact.starred} />
                  </button>
                  <div className="size-[34px] rounded-[8px] bg-white shadow-[0px_4px_16px_0px_rgba(217,217,217,0.32)] flex items-center justify-center">
                    <SearchIconFigma color="#1A1A1B" size={14} />
                  </div>
                  <div className="size-[34px] rounded-[8px] bg-white shadow-[0px_4px_16px_0px_rgba(217,217,217,0.32)] flex items-center justify-center">
                    <DotsVIcon />
                  </div>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
                {activeMessages.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center my-auto">
                    <p className="text-[13px] text-[#9fa7be]">No messages yet. Say hello! 👋</p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[11px] text-[#afb8cf]">Today</span>
                      <span className="text-[11px] text-[#afb8cf]">|</span>
                      <span className="text-[11px] text-[#afb8cf]">
                        {activeMessages[0]?.time}
                      </span>
                    </div>
                    {activeMessages.map((msg) => (
                      <div key={msg.id} className={`flex flex-col ${msg.isMine ? "items-end" : "items-start"}`}>
                        {msg.type === "voice" ? (
                          <div className="flex items-center gap-3 px-6 py-4 rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px]" style={{ background: "#dce6ff" }}>
                            <PlayBtn />
                            <Waveform />
                            <span className="text-[13px] text-[#3D64FD]" style={{ fontWeight: 500 }}>01:24</span>
                          </div>
                        ) : (
                          <div
                            className={`px-6 py-4 max-w-[340px] ${msg.isMine ? "rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[32px]" : "rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px]"}`}
                            style={{ background: msg.isMine ? "#3D64FD" : "#dce6ff" }}
                          >
                            <p className="text-[12px] leading-[1.6] whitespace-pre-line" style={{ color: msg.isMine ? "#F8F9FD" : "#1a1a1b" }}>
                              {msg.text}
                            </p>
                          </div>
                        )}
                        <span className={`text-[13px] text-[#afb8cf] mt-1 ${msg.isMine ? "pr-2" : "pl-2"}`}>
                          {msg.time}
                        </span>
                      </div>
                    ))}
                  </>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-4 px-6 py-4 bg-white" style={{ borderTop: "0.25px solid #AFB8CF" }}>
                <button className="size-[34px] rounded-[24px] shadow-[0px_4px_16px_0px_rgba(217,217,217,0.32)] flex items-center justify-center shrink-0">
                  <EmojiIcon />
                </button>
                <div className="flex-1 flex items-center gap-3 bg-[#f8f9fd] rounded-[24px] px-4 py-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message here ..."
                    className="flex-1 bg-transparent outline-none text-[11px] text-[#1a1a1b] placeholder:text-[#9fa7be]"
                  />
                  <button
                    onClick={sendMessage}
                    className="size-[24px] rounded-[24px] bg-[#3D64FD] flex items-center justify-center shrink-0 shadow-[0px_2.824px_11.294px_0px_rgba(217,217,217,0.32)]"
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <line x1="5.5" y1="1" x2="5.5" y2="10" stroke="#F8F9FD" strokeLinecap="round" strokeWidth="1.2" />
                      <line x1="1" y1="5.5" x2="10" y2="5.5" stroke="#F8F9FD" strokeLinecap="round" strokeWidth="1.2" />
                    </svg>
                  </button>
                </div>
                <button className="size-[34px] rounded-[24px] shadow-[0px_4px_16px_0px_rgba(217,217,217,0.32)] flex items-center justify-center shrink-0">
                  <MicIcon />
                </button>
                <button className="size-[34px] rounded-[24px] shadow-[0px_4px_16px_0px_rgba(217,217,217,0.32)] flex items-center justify-center shrink-0">
                  <LikeIcon />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* New Conversation modal */}
      {showNewConvo && (
        <NewConversationModal
          onClose={() => setShowNewConvo(false)}
          onStart={handleStartConversation}
        />
      )}
    </MainLayout>
  );
}