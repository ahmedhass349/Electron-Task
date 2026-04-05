import { useState } from "react";
import { Filter, Share2, LayoutList, LayoutGrid, MoreHorizontal, MessageSquare, Paperclip } from "lucide-react";
import MainLayout from "../components/MainLayout";
import CalendarWidget from "../components/CalendarWidget";
import TaskLineWidget from "../components/TaskLineWidget";

const chartData: { month: string; value: number }[] = [];

const todoTasks: {
  id: string;
  tag: string;
  title: string;
  description: string;
  comments: number;
  files: number;
}[] = [];

const doneTasks: {
  id: string;
  tag: string;
  title: string;
  description: string;
  comments: number;
  files: number;
  hasImage?: boolean;
}[] = [];

const periods = ["1M", "3M", "6M", "All time"];

// ── Pure SVG area chart — no recharts, no duplicate-key warnings ──────────────
function SvgAreaChart({ data }: { data: { month: string; value: number }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const W = 520;
  const H = 150;
  const padL = 8;
  const padR = 8;
  const padT = 12;
  const padB = 28;

  const minVal = 0;
  const maxVal = 100;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const xOf = (i: number) => padL + (i / (data.length - 1)) * plotW;
  const yOf = (v: number) => padT + plotH - ((v - minVal) / (maxVal - minVal)) * plotH;

  // Build smooth cubic bezier path
  const linePts = data.map((d, i) => ({ x: xOf(i), y: yOf(d.value) }));

  // ── Empty state guard ──
  if (data.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: H,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#b0b7c3",
          fontSize: 13,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        No chart data available
      </div>
    );
  }

  function cubicPath(pts: { x: number; y: number }[]) {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cpx = (prev.x + curr.x) / 2;
      d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  }

  const linePath = cubicPath(linePts);
  const fillPath =
    linePath +
    ` L ${linePts[linePts.length - 1].x} ${padT + plotH} L ${linePts[0].x} ${padT + plotH} Z`;

  const hoveredPt = hovered !== null ? linePts[hovered] : null;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={H}
        style={{ overflow: "visible", display: "block" }}
      >
        {/* Fill area */}
        <path d={fillPath} fill="#3B82F6" fillOpacity={0.12} />

        {/* Stroke line */}
        <path d={linePath} fill="none" stroke="#3B82F6" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={`label-${i}`}
            x={xOf(i)}
            y={H - 6}
            textAnchor="middle"
            fill="#787486"
            fontSize={11}
            fontFamily="'Inter', sans-serif"
          >
            {d.month}
          </text>
        ))}

        {/* Hover hit-areas */}
        {data.map((d, i) => (
          <rect
            key={`hit-${i}`}
            x={xOf(i) - plotW / (data.length * 2)}
            y={padT}
            width={plotW / data.length}
            height={plotH}
            fill="transparent"
            style={{ cursor: "crosshair" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}

        {/* Hover dot + vertical line */}
        {hoveredPt && hovered !== null && (
          <>
            <line
              x1={hoveredPt.x}
              y1={padT}
              x2={hoveredPt.x}
              y2={padT + plotH}
              stroke="#3B82F6"
              strokeWidth={1}
              strokeDasharray="4 3"
              opacity={0.5}
            />
            <circle cx={hoveredPt.x} cy={hoveredPt.y} r={5} fill="#3B82F6" />
            <circle cx={hoveredPt.x} cy={hoveredPt.y} r={8} fill="#3B82F6" fillOpacity={0.2} />
          </>
        )}
      </svg>

      {/* Tooltip */}
      {hovered !== null && hoveredPt && (
        <div
          style={{
            position: "absolute",
            left: `${(linePts[hovered].x / W) * 100}%`,
            top: `${hoveredPt.y - 10}px`,
            transform: "translate(-50%, -100%)",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "4px 10px",
            fontSize: "12px",
            fontFamily: "'Inter', sans-serif",
            color: "#191b23",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <strong>{data[hovered].month}</strong>: {data[hovered].value}
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [activePeriod, setActivePeriod] = useState("1M");

  return (
    <MainLayout>
      <div className="flex h-full">
        {/* Main content */}
        <div className="flex-1 min-w-0 p-6 overflow-y-auto">
          {/* Dashboard heading & controls */}
          <div className="flex items-center justify-between mb-4">
            <h1
              className="text-[32px] text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Dashboard
            </h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[6px] text-[#787486] hover:bg-gray-50 transition-colors text-[14px]">
                <Filter className="size-4" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[6px] text-[#787486] hover:bg-gray-50 transition-colors text-[14px]">
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Today</span>
              </button>
              <div style={{ width: "1px", height: "28px", background: "#c4c7cf" }} />
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-[6px] text-[#787486] hover:bg-gray-50 transition-colors text-[14px]">
                <Share2 className="size-4" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Share</span>
              </button>
              <button className="p-2 border border-gray-300 rounded-[6px] text-[#787486] hover:bg-gray-50 transition-colors">
                <LayoutList className="size-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-[6px] text-[#787486] hover:bg-gray-50 transition-colors">
                <LayoutGrid className="size-5" />
              </button>
            </div>
          </div>

          {/* Task Statistic chart + done card */}
          <div className="flex gap-4 mb-6">
            {/* Chart card */}
            <div className="flex-1 bg-white rounded-[16px] border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <p
                  className="text-[#191b23] text-[16px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  Task Statistic
                </p>
                <div className="flex items-center gap-3">
                  {/* Pill filters */}
                  <div className="flex border border-gray-200 rounded-[6px] overflow-hidden">
                    <div className="px-3 py-1 bg-blue-50 border-r border-blue-200 text-[13px] text-[#191b23]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      Product Manager
                    </div>
                    <div className="px-3 py-1 text-[13px] text-[#191b23]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Engineers
                    </div>
                  </div>
                  {/* Period tabs */}
                  <div className="flex gap-3">
                    {periods.map((p) => (
                      <button
                        key={p}
                        onClick={() => setActivePeriod(p)}
                        className="text-[13px] pb-1 transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: activePeriod === p ? "#191b23" : "#787486",
                          borderBottom: activePeriod === p ? "2px solid #008ff8" : "2px solid transparent",
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pure SVG chart — no recharts */}
              <SvgAreaChart data={chartData} />
            </div>

            {/* 90% Task Done card */}
            <div
              className="w-[160px] shrink-0 rounded-[16px] flex flex-col items-center justify-center gap-2 p-5"
              style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)" }}
            >
              <div className="size-[52px] rounded-[14px] bg-white flex items-center justify-center shadow">
                <span className="text-[24px]">📋</span>
              </div>
              <p
                className="text-[32px] text-gray-800 leading-none mt-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                0%
              </p>
              <p
                className="text-[13px] text-gray-600 text-center"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Task Done
              </p>
            </div>
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* To Do */}
            <div className="bg-white rounded-[16px] border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="size-[10px] rounded-full bg-blue-500 inline-block" />
                <span
                  className="text-[14px] text-gray-800"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  To Do
                </span>
                <span className="text-[12px] text-gray-400 ml-1">{todoTasks.length}</span>
              </div>
              <div className="space-y-3">
                {todoTasks.map((task) => (
                  <div key={task.id} className="border border-gray-200 rounded-[12px] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[11px] text-gray-500 px-2 py-0.5 bg-gray-100 rounded"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {task.tag}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </div>
                    <h3
                      className="text-[15px] text-gray-800 mb-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                      {task.title}
                    </h3>
                    <p
                      className="text-[13px] text-gray-500 mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {task.description}
                    </p>
                    <div className="flex items-center gap-4 text-gray-400 text-[12px]">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="size-3.5" />
                        {task.comments} comments
                      </span>
                      <span className="flex items-center gap-1">
                        <Paperclip className="size-3.5" />
                        {task.files} files
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Done */}
            <div className="bg-white rounded-[16px] border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="size-[10px] rounded-full bg-purple-500 inline-block" />
                <span
                  className="text-[14px] text-gray-800"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Done
                </span>
                <span className="text-[12px] text-gray-400 ml-1">{doneTasks.length}</span>
              </div>
              <div className="space-y-3">
                {doneTasks.map((task) => (
                  <div key={task.id} className="border border-gray-200 rounded-[12px] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[11px] text-gray-500 px-2 py-0.5 bg-gray-100 rounded"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {task.tag}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </div>
                    <h3
                      className="text-[15px] text-gray-800 mb-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                      {task.title}
                    </h3>
                    <p
                      className="text-[13px] text-gray-500 mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {task.description}
                    </p>
                    {task.hasImage && (
                      <div
                        className="w-full h-[80px] rounded-[8px] mb-3 overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                      >
                        <div className="w-full h-full flex items-center justify-center text-white text-[12px] opacity-60">
                          pegipegi preview
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-gray-400 text-[12px]">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="size-3.5" />
                        {task.comments} comments
                      </span>
                      <span className="flex items-center gap-1">
                        <Paperclip className="size-3.5" />
                        {task.files} files
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — Calendar + Task Line */}
        <div className="w-[380px] shrink-0 flex flex-col overflow-y-auto">
          <div className="p-4 space-y-4">
            <CalendarWidget />
            <TaskLineWidget />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}