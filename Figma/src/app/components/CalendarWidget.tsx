import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const HIGHLIGHTED: Record<number, string> = {};

const EVENT_DOTS: number[] = [];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  // Returns 0=Sun, 1=Mon... we want Mon=0
  const day = new Date(year, month, 1).getDay();
  return (day + 6) % 7; // Convert to Mon-based
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES_FULL = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

export default function CalendarWidget() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOffset = getFirstDayOfWeek(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

  // Build 6-row grid (42 cells)
  const cells: { day: number; isCurrentMonth: boolean }[] = [];
  for (let i = firstDayOffset - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, isCurrentMonth: true });
  }
  while (cells.length < 42) {
    cells.push({ day: cells.length - daysInMonth - firstDayOffset + 1, isCurrentMonth: false });
  }

  const todayDay = today.getDate();
  const isCurrentDisplayMonth =
    today.getMonth() === currentMonth && today.getFullYear() === currentYear;

  const dayOfWeek = DAY_NAMES_FULL[today.getDay()];

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  return (
    <div
      className="rounded-[20px] p-[24px] flex flex-col gap-[14px]"
      style={{
        background: "linear-gradient(145deg, #222640 0%, #1c2038 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft className="size-[22px]" />
        </button>
        <p
          className="text-white text-[18px] tracking-[0.54px] text-center"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >
          {MONTH_NAMES[currentMonth]}, {dayOfWeek}
        </p>
        <button
          onClick={nextMonth}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRight className="size-[22px]" />
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "#434343" }} />

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-y-[12px]">
        {/* Weekday headers */}
        {DAYS.map((d) => (
          <div
            key={d}
            className="flex items-center justify-center h-[36px]"
          >
            <span
              className="text-white text-[13px] text-center"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.42px" }}
            >
              {d}
            </span>
          </div>
        ))}

        {/* Date cells */}
        {cells.map((cell, i) => {
          const isToday = isCurrentDisplayMonth && cell.isCurrentMonth && cell.day === todayDay;
          const highlight = cell.isCurrentMonth ? HIGHLIGHTED[cell.day] : undefined;
          const hasEvent = cell.isCurrentMonth && EVENT_DOTS.includes(cell.day);

          return (
            <div key={i} className="flex flex-col items-center gap-[3px]">
              <div
                className="flex items-center justify-center size-[36px] rounded-full cursor-pointer transition-all hover:bg-white/10"
                style={
                  isToday
                    ? { background: "#3B82F6" }
                    : highlight
                    ? { background: highlight }
                    : undefined
                }
              >
                <span
                  className="text-[14px] text-center"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.42px",
                    color: cell.isCurrentMonth ? "white" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {cell.day}
                </span>
              </div>
              {hasEvent && (
                <span
                  className="size-[4px] rounded-full"
                  style={{ background: "#97f704" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}