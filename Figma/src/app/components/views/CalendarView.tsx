import svgPaths from "../../../imports/svg-5kcho3fd3i";
import { Search } from "lucide-react";

// ── Mini calendar data ─────────────────────────────────────────────────────────
const MINI_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

type DotColor = "blue" | "purple" | "teal" | "none";
type DayCell = { d: number | null; dots: DotColor[]; active?: boolean; faded?: boolean; today?: boolean };

const MINI_WEEKS: DayCell[][] = [
  [
    { d: 31, dots: [], faded: true },
    { d: 1, dots: [] },
    { d: 2, dots: [] },
    { d: 3, dots: [] },
    { d: 4, dots: [] },
    { d: 5, dots: [] },
    { d: 6, dots: [] },
  ],
  [
    { d: 7, dots: [] },
    { d: 8, dots: [] },
    { d: 9, dots: [] },
    { d: 10, dots: [] },
    { d: 11, dots: [] },
    { d: 12, dots: [] },
    { d: 13, dots: [] },
  ],
  [
    { d: 14, dots: [] },
    { d: 15, dots: [] },
    { d: 16, dots: [] },
    { d: 17, dots: [] },
    { d: 18, dots: [] },
    { d: 19, dots: [] },
    { d: 20, dots: [] },
  ],
  [
    { d: 21, dots: [] },
    { d: 22, dots: [] },
    { d: 23, dots: [] },
    { d: 24, dots: [] },
    { d: 25, dots: [] },
    { d: 26, dots: [] },
    { d: 27, dots: [], today: true },
  ],
  [
    { d: 28, dots: [] },
    { d: 1, dots: [], faded: true },
    { d: 2, dots: [], faded: true },
    { d: 3, dots: [], faded: true },
    { d: 4, dots: [], faded: true },
    { d: 5, dots: [], faded: true },
    { d: 6, dots: [], faded: true },
  ],
  [
    { d: 7, dots: [], faded: true },
    { d: 8, dots: [], faded: true },
    { d: 9, dots: [], faded: true },
    { d: 10, dots: [], faded: true },
    { d: 11, dots: [], faded: true },
    { d: 12, dots: [], faded: true },
    { d: 13, dots: [], faded: true },
  ],
];

const DOT_COLORS: Record<string, string> = {
  blue: "#3B82F6",
  purple: "#A855F7",
  teal: "#2DD4BF",
};

// ── Week view events ───────────────────────────────────────────────────────────
interface Event {
  id: string;
  col: number; // 0=SUN, 1=MON, ..., 6=SAT
  startHour: number;
  startMin?: number;
  durationMin: number;
  title: string;
  time: string;
  color: string;
  textColor: string;
  emoji?: string;
}

const EVENTS: Event[] = [];

const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const HOUR_LABELS = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
const WEEK_COLS = [
  { day: "SUN", date: 21 },
  { day: "MON", date: 22 },
  { day: "TUE", date: 23 },
  { day: "WED", date: 24 },
  { day: "THU", date: 25 },
  { day: "FRI", date: 26 },
  { day: "SAT", date: 27 },
];

const HOUR_H = 60; // px per hour in the grid
const START_HOUR = 7;

const SIDEBAR_EVENTS: never[] = [];
void SIDEBAR_EVENTS;

const TODAY_EVENTS: never[] = [];
const TOMORROW_EVENTS: never[] = [];
const MONDAY_EVENTS: never[] = [];
const TUESDAY_EVENTS: never[] = [];
const WEDNESDAY_EVENTS: never[] = [];

export default function CalendarView() {
  return (
    <div className="flex rounded-[12px] overflow-hidden border border-gray-200" style={{ height: "calc(100vh - 280px)", minHeight: 600 }}>
      {/* ── Dark sidebar ── */}
      <div className="flex flex-col shrink-0 overflow-y-auto" style={{ width: 218, background: "#1c1c1e", color: "white" }}>
        {/* macOS dots */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#ED6B60] border border-[#D05147]" />
            <div className="size-3 rounded-full bg-[#F5C250] border border-[#D6A343]" />
            <div className="size-3 rounded-full bg-[#62C656] border border-[#52A842]" />
          </div>
          <button className="flex items-center justify-center size-7 rounded-lg bg-white/10 shadow">
            <svg viewBox="0 0 10 10" className="size-4" fill="white">
              <path clipRule="evenodd" d={svgPaths.p309e5b00} fillRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Month title + arrows */}
        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex gap-1 text-[26px]">
            <span className="font-medium text-white">February</span>
            <span className="font-normal text-red-500">2021</span>
          </div>
          <div className="flex">
            <button className="size-6 flex items-center justify-center">
              <svg viewBox="0 0 7.2 12" className="h-3" fill="white">
                <path clipRule="evenodd" d={svgPaths.p2e855e00} fillRule="evenodd" />
              </svg>
            </button>
            <button className="size-6 flex items-center justify-center">
              <svg viewBox="0 0 7.2 12" className="h-3" fill="white">
                <path clipRule="evenodd" d={svgPaths.p7bb9c00} fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mini calendar */}
        <div className="px-2 pb-3">
          <div className="grid grid-cols-7 mb-1">
            {MINI_DAYS.map((d) => (
              <div key={d} className="text-center py-1">
                <span className="text-[9px] font-semibold text-[#71717a]">{d}</span>
              </div>
            ))}
          </div>
          {MINI_WEEKS.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((cell, di) => (
                <div key={di} className="flex flex-col items-center py-0.5">
                  <span
                    className="text-[10px] font-semibold text-center leading-4 size-[18px] rounded-full flex items-center justify-center"
                    style={{
                      color: cell.today ? "white" : cell.faded ? "#52525b" : "white",
                      background: cell.today ? "#3B82F6" : "transparent",
                    }}
                  >
                    {cell.d}
                  </span>
                  {cell.dots.length > 0 && (
                    <div className="flex gap-[2px] mt-[1px]">
                      {cell.dots.map((color, ci) => (
                        <div key={ci} className="size-[3px] rounded-full" style={{ background: DOT_COLORS[color] }} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-4 border-t border-white/10 mb-3" />

        {/* TODAY */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[#a1a1aa] tracking-wide">TODAY</span>
          </div>
          {TODAY_EVENTS.length === 0 && (
            <p className="text-[10px] text-[#52525b] mb-3">No events today</p>
          )}
          {TODAY_EVENTS.map((e, i) => (
            <div key={i} className="flex gap-2 mb-3">
              <div className="size-2 rounded-full shrink-0 mt-[3px]" style={{ background: e.dot }} />
              <div>
                <p className="text-[10px] text-[#a1a1aa]">{e.time} &nbsp;🔒</p>
                <p className="text-[11px] text-white">{e.title}</p>
                {e.link && <p className="text-[9px] text-[#71717a] truncate">{e.link}</p>}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mb-2 mt-1">
            <span className="text-[11px] font-semibold text-[#a1a1aa] tracking-wide">TOMORROW</span>
          </div>
          {TOMORROW_EVENTS.length === 0 && (
            <p className="text-[10px] text-[#52525b] mb-3">No events</p>
          )}
          {TOMORROW_EVENTS.map((e, i) => (
            <div key={i} className="flex gap-2 mb-3">
              <div className="size-2 rounded-full shrink-0 mt-[3px]" style={{ background: e.dot }} />
              <div>
                <p className="text-[10px] text-[#a1a1aa]">{e.time} &nbsp;🔒</p>
                <p className="text-[11px] text-white">{e.title}</p>
                {e.link && <p className="text-[9px] text-[#71717a] truncate">{e.link}</p>}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[#a1a1aa] tracking-wide">MONDAY</span>
          </div>
          {MONDAY_EVENTS.length === 0 && (
            <p className="text-[10px] text-[#52525b] mb-3">No events</p>
          )}
          {MONDAY_EVENTS.map((e, i) => (
            <div key={i} className="flex gap-2 mb-3">
              <div className="size-2 rounded-full shrink-0 mt-[3px]" style={{ background: e.dot }} />
              <div>
                <p className="text-[10px] text-[#a1a1aa]">{e.time} &nbsp;🔒</p>
                <p className="text-[11px] text-white">{e.title}</p>
                {e.link && <p className="text-[9px] text-[#71717a] truncate">{e.link}</p>}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[#a1a1aa] tracking-wide">TUESDAY</span>
          </div>
          {TUESDAY_EVENTS.length === 0 && (
            <p className="text-[10px] text-[#52525b] mb-3">No events</p>
          )}
          {TUESDAY_EVENTS.map((e, i) => (
            <div key={i} className="flex gap-2 mb-3">
              <div className="size-2 rounded-full shrink-0 mt-[3px]" style={{ background: e.dot }} />
              <div>
                <p className="text-[10px] text-[#a1a1aa]">{e.time} &nbsp;🔒</p>
                <p className="text-[11px] text-white">{e.title}</p>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[#a1a1aa] tracking-wide">WEDNESDAY</span>
          </div>
          {WEDNESDAY_EVENTS.length === 0 && (
            <p className="text-[10px] text-[#52525b] mb-3">No events</p>
          )}
          {WEDNESDAY_EVENTS.map((e, i) => (
            <div key={i} className="flex gap-2 mb-3">
              <div className="size-2 rounded-full shrink-0 mt-[3px]" style={{ background: e.dot }} />
              <div>
                <p className="text-[10px] text-[#a1a1aa]">{e.time} &nbsp;🔒</p>
                <p className="text-[11px] text-white">{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main panel ── */}
      <div className="flex flex-col flex-1 min-w-0 bg-white overflow-hidden">
        {/* Top nav */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center size-7 rounded hover:bg-gray-100">
              <svg viewBox="0 0 10 10" className="size-4 text-gray-500" fill="currentColor">
                <path clipRule="evenodd" d="M7 1L3 5l4 4" fillRule="evenodd" />
              </svg>
            </button>
            <button className="px-3 py-1 text-[13px] text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
              Today
            </button>
            <button className="flex items-center justify-center size-7 rounded hover:bg-gray-100">
              <svg viewBox="0 0 10 10" className="size-4 text-gray-500" fill="currentColor">
                <path clipRule="evenodd" d="M3 1l4 4-4 4" fillRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-1">
            {["Day", "Week", "Month", "Year"].map((tab) => (
              <button
                key={tab}
                className="px-4 py-1 rounded-md text-[13px] transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: tab === "Week" ? "#ef4444" : "transparent",
                  color: tab === "Week" ? "white" : "#374151",
                  fontWeight: tab === "Week" ? 600 : 400,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg bg-gray-50">
              <Search className="size-3.5 text-gray-400" />
              <span className="text-[12px] text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>Search</span>
            </div>
          </div>
        </div>

        {/* Week grid */}
        <div className="flex flex-1 overflow-y-auto">
          {/* Time gutter */}
          <div className="shrink-0 border-r border-gray-100" style={{ width: 56 }}>
            <div style={{ height: 42 }} className="border-b border-gray-100" />
            {HOURS.map((h, i) => (
              <div key={h} style={{ height: HOUR_H }} className="relative">
                <span
                  className="absolute -top-2 right-2 text-[10px] text-gray-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {HOUR_LABELS[i]}
                </span>
              </div>
            ))}
          </div>

          {/* Day columns */}
          <div className="flex flex-1 min-w-0">
            {WEEK_COLS.map((col, ci) => {
              const colEvents = EVENTS.filter((e) => e.col === ci);
              return (
                <div key={ci} className="flex-1 min-w-0 border-r border-gray-100 last:border-0 flex flex-col">
                  {/* Column header */}
                  <div
                    className="flex flex-col items-center justify-center border-b border-gray-100 shrink-0"
                    style={{ height: 42, background: col.date === 27 ? "#eff6ff" : "white" }}
                  >
                    <span className="text-[10px] font-semibold text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {col.day}
                    </span>
                    <span
                      className="text-[16px] font-semibold leading-tight"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: col.date === 27 ? "#3B82F6" : "#111827",
                      }}
                    >
                      {col.date}
                    </span>
                  </div>

                  {/* Time cells + events */}
                  <div className="flex-1 relative" style={{ background: col.date === 27 ? "#f0f9ff" : "white" }}>
                    {HOURS.map((h) => (
                      <div key={h} className="border-b border-gray-100" style={{ height: HOUR_H }} />
                    ))}

                    {/* Render events */}
                    {colEvents.map((ev) => {
                      const topPx = (ev.startHour - START_HOUR) * HOUR_H + (ev.startMin ?? 0);
                      const heightPx = Math.max((ev.durationMin / 60) * HOUR_H - 3, 20);
                      return (
                        <div
                          key={ev.id}
                          className="absolute left-0.5 right-0.5 rounded-md overflow-hidden px-1 py-0.5 cursor-pointer hover:opacity-90 transition-opacity"
                          style={{
                            top: topPx,
                            height: heightPx,
                            background: ev.color,
                          }}
                        >
                          <p
                            className="text-[9px] leading-tight"
                            style={{ color: ev.textColor, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                          >
                            {ev.time} {ev.emoji && <span>{ev.emoji}</span>}
                          </p>
                          {heightPx > 24 && (
                            <p
                              className="text-[9px] leading-tight mt-0.5 truncate"
                              style={{ color: ev.textColor, fontFamily: "'Inter', sans-serif" }}
                            >
                              {ev.title}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* EST column */}
            <div className="shrink-0 border-l border-gray-100 flex flex-col" style={{ width: 44 }}>
              <div className="flex flex-col items-center justify-center shrink-0 border-b border-gray-100" style={{ height: 42 }}>
                <span className="text-[8px] font-semibold text-gray-400">EST</span>
                <span className="text-[8px] text-gray-400">GMT-5</span>
              </div>
              {HOURS.map((h, i) => (
                <div key={h} style={{ height: HOUR_H }} className="relative border-b border-gray-100">
                  <span className="absolute -top-2 left-1 text-[9px] text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {HOUR_LABELS[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}