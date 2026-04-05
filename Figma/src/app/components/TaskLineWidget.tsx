const TIME_SLOTS = ["8:00", "8:30", "9:00", "9:30", "10:00"];

const today = new Date();
const DATE_LABEL = `${today.getDate()} ${today.toLocaleString("default", { month: "short" })} ${today.getFullYear()}`;

export default function TaskLineWidget() {
  return (
    <div
      className="rounded-[20px] p-[24px] flex flex-col gap-[18px]"
      style={{
        background: "linear-gradient(145deg, #222640 0%, #1c2038 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="text-white text-[20px] tracking-[0.72px]"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
        >
          Task Line
        </span>
        <div
          className="px-[14px] py-[6px] rounded-[36px] border border-[#616161] text-white text-[13px] tracking-[0.42px]"
          style={{
            background: "rgba(185,185,185,0.1)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {DATE_LABEL}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "#434343" }} />

      {/* Timeline */}
      <div className="relative" style={{ minHeight: "280px" }}>
        {TIME_SLOTS.map((time, i) => (
          <div
            key={time}
            className="absolute left-0 right-0 flex items-center"
            style={{ top: `${i * 56}px`, height: "40px" }}
          >
            {/* Time label */}
            <span
              className="text-[14px] text-center w-[44px] shrink-0"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.42px",
              }}
            >
              {time}
            </span>
            {/* Dashed line */}
            <div className="flex-1 ml-[6px]" style={{ borderTop: "1px dashed #404040" }} />
          </div>
        ))}

        {/* No events state */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ top: "60px" }}
        >
          <p
            className="text-[13px] text-center"
            style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.3)" }}
          >
            No tasks scheduled
          </p>
        </div>
      </div>
    </div>
  );
}