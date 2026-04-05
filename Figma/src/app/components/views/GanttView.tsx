import svgPaths from "../../../imports/svg-thsetu13d4";
import type { Task } from "../../context/TaskContext";

// ── Legend ──────────────────────────────────────────────────────────────────────
const LEGEND = [
  { label: "Data Collection",      color: "#2b7fff"  },
  { label: "Data Analysis",        color: "#ad46ff"  },
  { label: "Strategy Development", color: "#00bc7d"  },
  { label: "Final Delivery",       color: "#fe9a00"  },
  { label: "Milestone",            isDiamond: true   },
];

// ── Date columns (weekly from Jan 19) ──────────────────────────────────────────
const DATE_COLS = [
  "Jan 19", "Jan 26", "Feb 2",  "Feb 9",
  "Feb 16", "Feb 23", "Mar 2",  "Mar 9",
  "Mar 16", "Mar 23",
];

// ── Task type ───────────────────────────────────────────────────────────────────
type TaskType = "bar" | "pill" | "milestone";

interface GanttTask {
  name: string;
  category: string;
  categoryColor: string;
  duration: string;
  colStart: number;
  colSpan: number;
  barColor: string;
  type: TaskType;
  label?: string;
}

const TASKS: GanttTask[] = [];

// ── Component ───────────────────────────────────────────────────────────────────
export default function GanttView({ tasks = [] }: { tasks?: Task[] }) {
  // Map real tasks onto a simplified display
  const displayTasks: GanttTask[] = tasks.length > 0
    ? tasks.map((t, i) => ({
        name: t.title,
        category: t.priority,
        categoryColor:
          t.priority === "High" || t.priority === "Urgent" ? "#e7000b" :
          t.priority === "Medium" ? "#fe9a00" : "#00bc7d",
        duration: t.due ? `Due ${t.due}` : "No due date",
        colStart: i % DATE_COLS.length,
        colSpan: Math.max(1, 2),
        barColor:
          t.status === "Done" ? "#00bc7d" :
          t.status === "In Progress" ? "#2b7fff" :
          t.status === "In Review" ? "#ad46ff" : "#fe9a00",
        type: "bar" as TaskType,
        label: t.status,
      }))
    : TASKS;

  return (
    <div
      className="bg-white rounded-[16px] border border-gray-100 shadow-sm p-8"
    >
      {/* Heading */}
      <h2
        className="text-[24px] text-[#0a0a0a] mb-1"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
      >
        Capstone Project Gantt Chart
      </h2>
      <p
        className="text-[16px] text-[#45556c] mb-6"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Summary View — January to March 2026
      </p>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 mb-6 pb-4 border-b border-[#e2e8f0]">
        {LEGEND.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            {item.isDiamond ? (
              <svg viewBox="0 0 16 16" className="size-4" fill="none">
                <path
                  d={svgPaths.p221ce380}
                  fill="#0a0a0a"
                  stroke="#0a0a0a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.33"
                />
              </svg>
            ) : (
              <div
                className="size-4 rounded-[4px]"
                style={{ background: item.color }}
              />
            )}
            <span
              className="text-[14px] text-[#314158]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {displayTasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <p
            className="text-[15px] text-[#94a3b8]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            No tasks yet
          </p>
          <p
            className="text-[13px] text-[#b0bec5]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Add tasks to see them on the Gantt chart
          </p>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="flex">
            {/* Task name column */}
            <div className="shrink-0" style={{ width: 260 }}>
              <div style={{ height: 36 }} />
              {displayTasks.map((task, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center"
                  style={{ height: 56, paddingRight: 16 }}
                >
                  <p
                    className="text-[14px] text-[#0a0a0a]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {task.name}
                  </p>
                  <p
                    className="text-[12px] mt-0.5"
                    style={{
                      color: task.categoryColor,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {task.category} • {task.duration}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart columns */}
            <div className="flex-1 overflow-x-auto">
              <div style={{ minWidth: 700 }}>
                {/* Date headers */}
                <div
                  className="flex border-b border-[#e2e8f0]"
                  style={{ height: 36 }}
                >
                  {DATE_COLS.map((d, ci) => (
                    <div
                      key={ci}
                      className="flex-1 flex items-center justify-center border-l border-[#e2e8f0]"
                    >
                      <span
                        className="text-[13px] text-[#314158]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {d}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Task rows */}
                {displayTasks.map((task, ti) => (
                  <div
                    key={ti}
                    className="flex relative border-b border-[#e2e8f0] last:border-0"
                    style={{ height: 56 }}
                  >
                    {DATE_COLS.map((_, ci) => (
                      <div
                        key={ci}
                        className="flex-1 border-l border-[#e2e8f0]"
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                      {task.type === "milestone" ? (
                        <div
                          style={{
                            position: "absolute",
                            left: `calc(${(task.colStart / DATE_COLS.length) * 100}% + 4px)`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          <svg viewBox="0 0 16 16" className="size-5" fill="none">
                            <path
                              d={svgPaths.p221ce380}
                              fill="#0a0a0a"
                              stroke="#0a0a0a"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.33"
                            />
                          </svg>
                        </div>
                      ) : task.type === "pill" ? (
                        <div
                          className="rounded-full"
                          style={{
                            position: "absolute",
                            left: `calc(${(task.colStart / DATE_COLS.length) * 100}% + 4px)`,
                            transform: "translateX(-50%)",
                            width: 14,
                            height: 36,
                            background: task.barColor,
                          }}
                        />
                      ) : (
                        <div
                          className="rounded-full flex items-center justify-center"
                          style={{
                            position: "absolute",
                            left: `calc(${(task.colStart / DATE_COLS.length) * 100}% + 4px)`,
                            width: `calc(${(task.colSpan / DATE_COLS.length) * 100}% - 8px)`,
                            minWidth: 40,
                            height: 36,
                            background: task.barColor,
                          }}
                        >
                          {task.label && (
                            <span
                              className="text-[12px] text-white px-2 truncate"
                              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                            >
                              {task.label}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p
            className="text-center text-[14px] text-[#45556c] mt-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Current Date: March 14, 2026
          </p>
        </>
      )}
    </div>
  );
}