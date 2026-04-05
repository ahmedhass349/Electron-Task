import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, RotateCcw, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import MainLayout from "../components/MainLayout";
import { useToast } from "../context/ToastContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
}

const SUGGESTIONS = [
  "Summarize my open tasks",
  "Draft a project status update",
  "What's overdue this week?",
  "Create a new sprint plan",
];

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const MOCK_REPLIES: Record<string, string> = {
  default:
    "I'm your TaskFlow AI assistant! I can help you summarize tasks, draft updates, plan sprints, and more. Try one of the suggestions below or ask me anything about your projects.",
};

function getMockReply(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("task"))
    return "You currently have no open tasks. Add some tasks to your board and I'll be able to give you a full summary!";
  if (lower.includes("sprint"))
    return "To create a sprint plan, I'd need your task list and team capacity. Once you have tasks added, I can help organize them into a focused sprint.";
  if (lower.includes("overdue"))
    return "Great news — there are no overdue tasks right now! Make sure to keep your deadlines up to date so I can track them for you.";
  if (lower.includes("status") || lower.includes("update"))
    return "Here's a draft status update:\n\n**Project Update — TaskFlow Pro**\nThis week the team is on track. No blockers reported. Next milestone is the Q2 feature release. More details to follow once tasks are populated.";
  return "That's a great question! Once you have projects and tasks added to TaskFlow Pro, I'll be able to give you much more detailed and personalised answers.";
}

export default function AIChat() {
  const { showToast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: MOCK_REPLIES.default,
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: trimmed,
      time: now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: getMockReply(trimmed),
        time: now(),
      };
      setMessages((prev) => [...prev, reply]);
      setLoading(false);
      showToast({
        type: "ai-response",
        title: "AI Response Ready",
        body: getMockReply(trimmed).slice(0, 80) + (getMockReply(trimmed).length > 80 ? "…" : ""),
        duration: 5000,
      });
    }, 900);
  }

  function reset() {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        role: "assistant",
        text: MOCK_REPLIES.default,
        time: now(),
      },
    ]);
    setInput("");
  }

  return (
    <MainLayout>
      <div
        className="flex flex-col h-full max-w-[780px] mx-auto"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* ── Top bar ── */}
        <div
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{ borderBottom: "1px solid #e8e5f7" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="size-9 rounded-[10px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8b5cf6 100%)" }}
            >
              <Sparkles className="size-[18px] text-white" />
            </div>
            <div>
              <p className="text-[16px] text-[#0a0a0a]" style={{ fontWeight: 700 }}>
                TaskFlow AI
              </p>
              <p className="text-[12px] text-[#22c55e]">Online</p>
            </div>
          </div>
          <button
            onClick={reset}
            className="flex items-center gap-2 px-3 py-2 rounded-[8px] text-[13px] text-[#787486] hover:bg-gray-100 transition-colors"
          >
            <RotateCcw className="size-4" />
            New chat
          </button>
        </div>

        {/* ── Messages ── */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Avatar */}
              {msg.role === "assistant" ? (
                <div
                  className="size-8 rounded-[8px] flex items-center justify-center shrink-0 mt-1"
                  style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8b5cf6 100%)" }}
                >
                  <Sparkles className="size-4 text-white" />
                </div>
              ) : (
                <div className="size-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-[11px]" style={{ fontWeight: 700 }}>
                    AA
                  </span>
                </div>
              )}

              {/* Bubble */}
              <div className={`max-w-[78%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                <div
                  className="px-4 py-3 rounded-[16px] text-[14px] leading-relaxed whitespace-pre-wrap"
                  style={{
                    background: msg.role === "user" ? "#3B82F6" : "#f4f2ff",
                    color: msg.role === "user" ? "white" : "#0a0a0a",
                    borderBottomRightRadius: msg.role === "user" ? 4 : 16,
                    borderBottomLeftRadius: msg.role === "user" ? 16 : 4,
                  }}
                >
                  {msg.text}
                </div>
                <div className="flex items-center gap-2 px-1">
                  <span className="text-[11px] text-[#b0a9d5]">{msg.time}</span>
                  {msg.role === "assistant" && (
                    <div className="flex items-center gap-1">
                      <button
                        className="p-1 rounded text-[#b0a9d5] hover:text-[#3B82F6] transition-colors"
                        title="Copy"
                        onClick={() => navigator.clipboard?.writeText(msg.text)}
                      >
                        <Copy className="size-3" />
                      </button>
                      <button className="p-1 rounded text-[#b0a9d5] hover:text-green-500 transition-colors" title="Helpful">
                        <ThumbsUp className="size-3" />
                      </button>
                      <button className="p-1 rounded text-[#b0a9d5] hover:text-red-500 transition-colors" title="Not helpful">
                        <ThumbsDown className="size-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex gap-3">
              <div
                className="size-8 rounded-[8px] flex items-center justify-center shrink-0 mt-1"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8b5cf6 100%)" }}
              >
                <Sparkles className="size-4 text-white" />
              </div>
              <div className="px-4 py-3 rounded-[16px] bg-[#f4f2ff]" style={{ borderBottomLeftRadius: 4 }}>
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-2 rounded-full bg-[#8B83BA]"
                      style={{
                        animation: "bounce 1s infinite",
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* ── Suggestions ── */}
        {messages.length <= 1 && !loading && (
          <div className="px-6 pb-2 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="px-4 py-2 rounded-full text-[13px] border border-[#d4c8ff] text-[#3B82F6] hover:bg-[#f0eeff] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* ── Input ── */}
        <div className="px-6 py-4 shrink-0" style={{ borderTop: "1px solid #e8e5f7" }}>
          <div className="flex items-end gap-3 px-4 py-3 rounded-[14px] border border-[#e8e5f7] bg-[#faf9ff] focus-within:border-[#3B82F6] transition-colors">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Ask TaskFlow AI anything… (Enter to send, Shift+Enter for new line)"
              rows={1}
              className="flex-1 bg-transparent text-[14px] text-[#0a0a0a] outline-none placeholder:text-[#b0a9d5] resize-none"
              style={{ maxHeight: 120 }}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              className="size-9 rounded-[8px] flex items-center justify-center text-white transition-all shrink-0"
              style={{
                background: input.trim() && !loading ? "#3B82F6" : "#c4bfe8",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              }}
            >
              <Send className="size-4" />
            </button>
          </div>
          <p className="text-center text-[11px] text-[#b0a9d5] mt-2">
            TaskFlow AI can make mistakes. Verify important info.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </MainLayout>
  );
}