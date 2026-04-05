import svgPaths from "./svg-crko4b99z5";
import imgIcon from "figma:asset/9822af363c6a17ac9f9bddcc5c4a0cccdf80e41f.png";
import imgIcon1 from "figma:asset/963deb7708a8414668396d1993b85035b01204ff.png";
import imgIcon2 from "figma:asset/69d487aa7e2fcff253e0f3ebe6ba8101122d317c.png";

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ff5c00] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#e1f6ff] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#2c62b4] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#fbe6fc] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ff00b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#cdf4dd] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#188544] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#d9f4f8] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#268fb0] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
    </div>
  );
}

function TitlePriority() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Priority">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px relative text-[#313131] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Untitled
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Priority">
        <div className="absolute inset-[45.83%_16.67%_41.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-36.37%_-6.82%_-36.36%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6672 4.75027">
              <path d={svgPaths.pecd1080} id="Vector" stroke="var(--stroke-0, #2A63F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Description">
      <TitlePriority />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Description
      </p>
    </div>
  );
}

function Files() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Files">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute h-[10.761px] left-[2px] top-[3px] w-[12px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Folder
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon1} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          File
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon2} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ticket
        </p>
      </div>
    </div>
  );
}

function TablerIconLink() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconLink1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Links() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Links">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink1 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#828282] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes:
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Type here...</p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Notes1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Notes">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
          <g id="Notes">
            <line id="Line 1" stroke="var(--stroke-0, #E3E3E3)" x2="232" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notes2() {
  return <div className="h-0 shrink-0 w-full" data-name="Notes" />;
}

function TablerIconCalendarEvent() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-calendar-event">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-calendar-event">
          <path d={svgPaths.pab2aa80} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TeamMemberDueDate() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Team member + Due date">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[999px] shrink-0" data-name="TeamMember">
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="8" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          To be assigned
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Date">
        <TablerIconCalendarEvent />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          DD MM
        </p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[12px] shrink-0" data-name="Column">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[24px] relative rounded-[inherit]">
        <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[312px]" data-name="Column Header">
          <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#313131] text-[16px] text-center uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
            Backlog
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[264px]" data-name="Card">
          <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[44px_56px_20px_0px_rgba(0,0,0,0),28px_36px_18px_0px_rgba(0,0,0,0),16px_20px_15px_0px_rgba(0,0,0,0.01),7px_9px_11px_0px_rgba(0,0,0,0.01),2px_2px_6px_0px_rgba(0,0,0,0.01),0px_0px_0px_0px_rgba(0,0,0,0.01)]" />
          <Tags />
          <TitleDescription />
          <Files />
          <Links />
          <Notes />
          <Notes1 />
          <Notes2 />
          <TeamMemberDueDate />
          <div className="absolute bg-[#30f] h-[50px] left-[-1px] rounded-[9999px] top-[46px] w-[3px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[24px_24px_80px_0px_rgba(0,0,0,0.01)]" />
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ff5c00] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#2c62b4] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ff00b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#188544] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#268fb0] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
    </div>
  );
}

function TitlePriority1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Priority">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px relative text-[#313131] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Untitled
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Priority">
        <div className="absolute inset-[45.83%_16.67%_41.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-36.37%_-6.82%_-36.36%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6672 4.75027">
              <path d={svgPaths.pecd1080} id="Vector" stroke="var(--stroke-0, #2A63F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Description">
      <TitlePriority1 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Description
      </p>
    </div>
  );
}

function Files1() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Files">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute h-[10.761px] left-[2px] top-[3px] w-[12px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Folder
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon1} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          File
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon2} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ticket
        </p>
      </div>
    </div>
  );
}

function TablerIconLink2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconLink3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Links">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink2 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink3 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
    </div>
  );
}

function Notes3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#828282] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes:
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Type here...</p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Notes4() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Notes">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
          <g id="Notes">
            <line id="Line 1" stroke="var(--stroke-0, #E3E3E3)" x2="232" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notes5() {
  return <div className="h-0 shrink-0 w-full" data-name="Notes" />;
}

function TablerIconCalendarEvent1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-calendar-event">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-calendar-event">
          <path d={svgPaths.pab2aa80} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TeamMemberDueDate1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Team member + Due date">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[999px] shrink-0" data-name="TeamMember">
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="8" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          To be assigned
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Date">
        <TablerIconCalendarEvent1 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          DD MM
        </p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[12px] shrink-0" data-name="Column">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[24px] relative rounded-[inherit]">
        <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[312px]" data-name="Column Header">
          <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#313131] text-[16px] text-center uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
            To do
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[264px]" data-name="Card">
          <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[44px_56px_20px_0px_rgba(0,0,0,0),28px_36px_18px_0px_rgba(0,0,0,0),16px_20px_15px_0px_rgba(0,0,0,0.01),7px_9px_11px_0px_rgba(0,0,0,0.01),2px_2px_6px_0px_rgba(0,0,0,0.01),0px_0px_0px_0px_rgba(0,0,0,0.01)]" />
          <Tags1 />
          <TitleDescription1 />
          <Files1 />
          <Links1 />
          <Notes3 />
          <Notes4 />
          <Notes5 />
          <TeamMemberDueDate1 />
          <div className="absolute bg-[#30f] h-[50px] left-[-1px] rounded-[9999px] top-[46px] w-[3px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[24px_24px_80px_0px_rgba(0,0,0,0.01)]" />
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ff5c00] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#2c62b4] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ff00b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#188544] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#268fb0] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
    </div>
  );
}

function TitlePriority2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Priority">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px relative text-[#313131] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Untitled
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Priority">
        <div className="absolute inset-[45.83%_16.67%_41.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-36.37%_-6.82%_-36.36%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6672 4.75027">
              <path d={svgPaths.pecd1080} id="Vector" stroke="var(--stroke-0, #2A63F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Description">
      <TitlePriority2 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Description
      </p>
    </div>
  );
}

function Files2() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Files">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute h-[10.761px] left-[2px] top-[3px] w-[12px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Folder
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon1} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          File
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon2} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ticket
        </p>
      </div>
    </div>
  );
}

function TablerIconLink4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconLink5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Links2() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Links">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink4 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink5 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
    </div>
  );
}

function Notes6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#828282] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes:
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Type here...</p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Notes7() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Notes">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
          <g id="Notes">
            <line id="Line 1" stroke="var(--stroke-0, #E3E3E3)" x2="232" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notes8() {
  return <div className="h-0 shrink-0 w-full" data-name="Notes" />;
}

function TablerIconCalendarEvent2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-calendar-event">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-calendar-event">
          <path d={svgPaths.pab2aa80} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TeamMemberDueDate2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Team member + Due date">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[999px] shrink-0" data-name="TeamMember">
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="8" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          To be assigned
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Date">
        <TablerIconCalendarEvent2 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          DD MM
        </p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[12px] shrink-0" data-name="Column">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[24px] relative rounded-[inherit]">
        <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[312px]" data-name="Column Header">
          <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#313131] text-[16px] text-center uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
            In progress
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[264px]" data-name="Card">
          <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[44px_56px_20px_0px_rgba(0,0,0,0),28px_36px_18px_0px_rgba(0,0,0,0),16px_20px_15px_0px_rgba(0,0,0,0.01),7px_9px_11px_0px_rgba(0,0,0,0.01),2px_2px_6px_0px_rgba(0,0,0,0.01),0px_0px_0px_0px_rgba(0,0,0,0.01)]" />
          <Tags2 />
          <TitleDescription2 />
          <Files2 />
          <Links2 />
          <Notes6 />
          <Notes7 />
          <Notes8 />
          <TeamMemberDueDate2 />
          <div className="absolute bg-[#30f] h-[50px] left-[-1px] rounded-[9999px] top-[46px] w-[3px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[24px_24px_80px_0px_rgba(0,0,0,0.01)]" />
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ff5c00] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#2c62b4] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ff00b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#188544] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#268fb0] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
    </div>
  );
}

function TitlePriority3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Priority">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px relative text-[#313131] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Untitled
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Priority">
        <div className="absolute inset-[45.83%_16.67%_41.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-36.37%_-6.82%_-36.36%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6672 4.75027">
              <path d={svgPaths.pecd1080} id="Vector" stroke="var(--stroke-0, #2A63F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Description">
      <TitlePriority3 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Description
      </p>
    </div>
  );
}

function Files3() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Files">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute h-[10.761px] left-[2px] top-[3px] w-[12px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Folder
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon1} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          File
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon2} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ticket
        </p>
      </div>
    </div>
  );
}

function TablerIconLink6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconLink7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Links3() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Links">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink6 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink7 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
    </div>
  );
}

function Notes9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#828282] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes:
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Type here...</p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Notes10() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Notes">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
          <g id="Notes">
            <line id="Line 1" stroke="var(--stroke-0, #E3E3E3)" x2="232" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notes11() {
  return <div className="h-0 shrink-0 w-full" data-name="Notes" />;
}

function TablerIconCalendarEvent3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-calendar-event">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-calendar-event">
          <path d={svgPaths.pab2aa80} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TeamMemberDueDate3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Team member + Due date">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[999px] shrink-0" data-name="TeamMember">
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="8" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          To be assigned
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Date">
        <TablerIconCalendarEvent3 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          DD MM
        </p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[12px] shrink-0" data-name="Column">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[24px] relative rounded-[inherit]">
        <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[312px]" data-name="Column Header">
          <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#313131] text-[16px] text-center uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
            In review
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[264px]" data-name="Card">
          <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[44px_56px_20px_0px_rgba(0,0,0,0),28px_36px_18px_0px_rgba(0,0,0,0),16px_20px_15px_0px_rgba(0,0,0,0.01),7px_9px_11px_0px_rgba(0,0,0,0.01),2px_2px_6px_0px_rgba(0,0,0,0.01),0px_0px_0px_0px_rgba(0,0,0,0.01)]" />
          <Tags3 />
          <TitleDescription3 />
          <Files3 />
          <Links3 />
          <Notes9 />
          <Notes10 />
          <Notes11 />
          <TeamMemberDueDate3 />
          <div className="absolute bg-[#30f] h-[50px] left-[-1px] rounded-[9999px] top-[46px] w-[3px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[24px_24px_80px_0px_rgba(0,0,0,0.01)]" />
    </div>
  );
}

function Tags4() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ff5c00] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#2c62b4] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ff00b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#188544] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#268fb0] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
    </div>
  );
}

function TitlePriority4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Priority">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px relative text-[#313131] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Untitled
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Priority">
        <div className="absolute inset-[45.83%_16.67%_41.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-36.37%_-6.82%_-36.36%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6672 4.75027">
              <path d={svgPaths.pecd1080} id="Vector" stroke="var(--stroke-0, #2A63F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Description">
      <TitlePriority4 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Description
      </p>
    </div>
  );
}

function Files4() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Files">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute h-[10.761px] left-[2px] top-[3px] w-[12px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Folder
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon1} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          File
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon2} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ticket
        </p>
      </div>
    </div>
  );
}

function TablerIconLink8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconLink9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Links4() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Links">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink8 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink9 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
    </div>
  );
}

function Notes12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#828282] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes:
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Type here...</p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Notes13() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Notes">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
          <g id="Notes">
            <line id="Line 1" stroke="var(--stroke-0, #E3E3E3)" x2="232" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notes14() {
  return <div className="h-0 shrink-0 w-full" data-name="Notes" />;
}

function TablerIconCalendarEvent4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-calendar-event">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-calendar-event">
          <path d={svgPaths.pab2aa80} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TeamMemberDueDate4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Team member + Due date">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[999px] shrink-0" data-name="TeamMember">
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="8" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          To be assigned
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Date">
        <TablerIconCalendarEvent4 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          DD MM
        </p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[12px] shrink-0" data-name="Column">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[24px] relative rounded-[inherit]">
        <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[312px]" data-name="Column Header">
          <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#313131] text-[16px] text-center uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
            Done
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[264px]" data-name="Card">
          <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[44px_56px_20px_0px_rgba(0,0,0,0),28px_36px_18px_0px_rgba(0,0,0,0),16px_20px_15px_0px_rgba(0,0,0,0.01),7px_9px_11px_0px_rgba(0,0,0,0.01),2px_2px_6px_0px_rgba(0,0,0,0.01),0px_0px_0px_0px_rgba(0,0,0,0.01)]" />
          <Tags4 />
          <TitleDescription4 />
          <Files4 />
          <Links4 />
          <Notes12 />
          <Notes13 />
          <Notes14 />
          <TeamMemberDueDate4 />
          <div className="absolute bg-[#30f] h-[50px] left-[-1px] rounded-[9999px] top-[46px] w-[3px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[24px_24px_80px_0px_rgba(0,0,0,0.01)]" />
    </div>
  );
}

function Tags5() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Tags">
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#ff5c00] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#2c62b4] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ff00b8] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#188544] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
      <div className="bg-[#ffece1] content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#268fb0] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Tag
        </p>
      </div>
    </div>
  );
}

function TitlePriority5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Priority">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px relative text-[#313131] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Untitled
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Priority">
        <div className="absolute inset-[45.83%_16.67%_41.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-36.37%_-6.82%_-36.36%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6672 4.75027">
              <path d={svgPaths.pecd1080} id="Vector" stroke="var(--stroke-0, #2A63F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title + Description">
      <TitlePriority5 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Description
      </p>
    </div>
  );
}

function Files5() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Files">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute h-[10.761px] left-[2px] top-[3px] w-[12px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Folder
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon1} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          File
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="File">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="FileIcon">
          <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="Icon">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcon2} />
          </div>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ticket
        </p>
      </div>
    </div>
  );
}

function TablerIconLink10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconLink11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-link">
          <path d="M6 10L10 6" id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p9e8d4c0} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p30fdfd80} id="Vector_3" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Links5() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Links">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink10 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="URL">
        <TablerIconLink11 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          URL label
        </p>
      </div>
    </div>
  );
}

function Notes15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#828282] text-[10px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes:
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#313131] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px] mb-0">Type here...</p>
        <p className="leading-[16px] mb-0">&nbsp;</p>
        <p className="leading-[16px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Notes16() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Notes">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 1">
          <g id="Notes">
            <line id="Line 1" stroke="var(--stroke-0, #E3E3E3)" x2="232" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Notes17() {
  return <div className="h-0 shrink-0 w-full" data-name="Notes" />;
}

function TablerIconCalendarEvent5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-calendar-event">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-calendar-event">
          <path d={svgPaths.pab2aa80} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TeamMemberDueDate5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Team member + Due date">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[999px] shrink-0" data-name="TeamMember">
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="8" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#313131] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          To be assigned
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Date">
        <TablerIconCalendarEvent5 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#828282] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          DD MM
        </p>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[12px] shrink-0" data-name="Column">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[24px] relative rounded-[inherit]">
        <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0 w-[312px]" data-name="Column Header">
          <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid inset-0 pointer-events-none" />
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#313131] text-[16px] text-center uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
            Handoff
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-[264px]" data-name="Card">
          <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[44px_56px_20px_0px_rgba(0,0,0,0),28px_36px_18px_0px_rgba(0,0,0,0),16px_20px_15px_0px_rgba(0,0,0,0.01),7px_9px_11px_0px_rgba(0,0,0,0.01),2px_2px_6px_0px_rgba(0,0,0,0.01),0px_0px_0px_0px_rgba(0,0,0,0.01)]" />
          <Tags5 />
          <TitleDescription5 />
          <Files5 />
          <Links5 />
          <Notes15 />
          <Notes16 />
          <Notes17 />
          <TeamMemberDueDate5 />
          <div className="absolute bg-[#30f] h-[50px] left-[-1px] rounded-[9999px] top-[46px] w-[3px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f4f4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[24px_24px_80px_0px_rgba(0,0,0,0.01)]" />
    </div>
  );
}

export default function Table() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] items-start p-[80px] relative size-full" data-name="Table">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}