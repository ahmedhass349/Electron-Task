import svgPaths from "./svg-dojkrpmzby";

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p26bc6800} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p10a19260} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[27.988px] items-start left-0 top-0 w-[237.063px]" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[21px]">Notifications</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[27.99px] w-[237.063px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#717182] text-[14px] top-[-1.2px] whitespace-nowrap">Stay updated with your latest activities</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[48.987px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48.987px] relative shrink-0 w-[275.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-center relative size-full">
        <Icon />
        <Container2 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#030213] h-[22.587px] relative rounded-[6.75px] shrink-0 w-[64.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[11.3px] py-[4.3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">2 unread</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[9.55px] size-[14px] top-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3d131900} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a98380} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[6.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-[75.05px] not-italic text-[#0a0a0a] text-[12.25px] text-center top-[4.25px] whitespace-nowrap">Mark all as read</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[203.3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.5px] items-center relative size-full">
        <Badge />
        <Button />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[48.987px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[31.5px] left-0 rounded-[6.75px] top-0 w-[742px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[35px] py-[3.5px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[12.25px] whitespace-nowrap">Search notifications...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10.5px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon2 />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute bg-white content-stretch flex h-[25.1px] items-center justify-center left-[3px] px-[7.8px] py-[4.3px] rounded-[12.75px] top-[3.5px] w-[128.663px]" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[12.25px] text-center whitespace-nowrap">All (6)</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute content-stretch flex h-[25.1px] items-center justify-center left-[131.66px] px-[7.8px] py-[4.3px] rounded-[12.75px] top-[3.5px] w-[128.663px]" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[12.25px] text-center whitespace-nowrap">Unread (2)</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute content-stretch flex h-[25.1px] items-center justify-center left-[260.33px] px-[7.8px] py-[4.3px] rounded-[12.75px] top-[3.5px] w-[128.663px]" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[12.25px] text-center whitespace-nowrap">Read (4)</p>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#ececf0] h-[31.5px] relative rounded-[12.75px] shrink-0 w-[392px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Tab />
        <Tab1 />
        <Tab2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.p91fb600} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 4.375">
            <path d="M0.729167 3.64583V0.729167" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46563 1.45833">
            <path d="M0.729167 0.729167H0.736459" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[17.5px] top-[3.5px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[144.6px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-1.2px] whitespace-nowrap">New message received</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[34.362px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[10.5px] whitespace-nowrap">info</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Badge1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[39.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#717182] text-[12.25px] top-[-1.2px] w-[669px]">You have received a new message from John Doe regarding the project proposal. Please review and respond at your earliest convenience.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[64.3px] items-start left-0 top-0 w-[670.4px]" data-name="Container">
      <Container11 />
      <Paragraph1 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#155dfc] left-[677.4px] rounded-[26843500px] size-[7px] top-[7px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[64.3px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[40.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Just now</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[73.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Apr 3, 09:13 PM</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[88.787px] items-start left-[28px] top-0 w-[684.4px]" data-name="Container">
      <Container9 />
      <Container13 />
    </div>
  );
}

function NotificationItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[712.4px]" data-name="NotificationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#eff6ff] h-[118.388px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="content-stretch flex flex-col items-start pl-[14.8px] pr-[0.8px] py-[14.8px] relative size-full">
        <NotificationItem />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.p3b63200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9375 8.75">
            <path d={svgPaths.pbc923c0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[17.5px] top-[3.5px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[122.662px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-1.2px] whitespace-nowrap">Payment successful</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#030213] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[50.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">success</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Badge2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#717182] text-[12.25px] top-[-1.2px] whitespace-nowrap">Your payment of $99.99 has been successfully processed. Your subscription has been renewed for another month.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[44.4px] items-start left-0 top-0 w-[670.4px]" data-name="Container">
      <Container18 />
      <Paragraph2 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#155dfc] left-[677.4px] rounded-[26843500px] size-[7px] top-[7px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="h-[44.4px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[55.213px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">2 hours ago</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[73.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Apr 3, 07:43 PM</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text2 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[68.888px] items-start left-[28px] top-0 w-[684.4px]" data-name="Container">
      <Container16 />
      <Container20 />
    </div>
  );
}

function NotificationItem1() {
  return (
    <div className="h-[68.888px] relative shrink-0 w-[712.4px]" data-name="NotificationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#eff6ff] h-[98.488px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[14.8px] pr-[0.8px] pt-[14.8px] relative size-full">
        <NotificationItem1 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.p91fb600} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 4.375">
            <path d="M0.729167 0.729167V3.64583" id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46563 1.45833">
            <path d="M0.729167 0.729167H0.736459" id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[17.5px] top-[3.5px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[115.713px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-1.2px] whitespace-nowrap">Storage almost full</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#eceef2] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[54.225px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#030213] text-[10.5px] whitespace-nowrap">warning</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Badge3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#717182] text-[12.25px] top-[-1.2px] whitespace-nowrap">Your storage is 90% full. Consider upgrading your plan or deleting unnecessary files to avoid service interruption.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[684.4_0_0] h-[44.4px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Container25 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[44.4px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[55.213px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">5 hours ago</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[73.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Apr 3, 04:43 PM</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[68.888px] items-start left-[28px] top-0 w-[684.4px]" data-name="Container">
      <Container23 />
      <Container26 />
    </div>
  );
}

function NotificationItem2() {
  return (
    <div className="h-[68.888px] relative shrink-0 w-[712.4px]" data-name="NotificationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[98.488px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[14.8px] pr-[0.8px] pt-[14.8px] relative size-full">
        <NotificationItem2 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.p91fb600} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 4.375">
            <path d="M0.729167 0.729167V3.64583" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46563 1.45833">
            <path d="M0.729167 0.729167H0.736459" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[17.5px] top-[3.5px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[123.625px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-1.2px] whitespace-nowrap">Failed login attempt</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#d4183d] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[39.013px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">error</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Badge4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[39.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#717182] text-[12.25px] top-[-1.2px] w-[629px]">{`Someone tried to access your account from an unrecognized device. If this wasn't you, please change your password immediately.`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[684.4_0_0] h-[64.3px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Container31 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[64.3px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[45.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">1 day ago</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[73.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Apr 2, 09:43 PM</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text6 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[88.787px] items-start left-[28px] top-0 w-[684.4px]" data-name="Container">
      <Container29 />
      <Container32 />
    </div>
  );
}

function NotificationItem3() {
  return (
    <div className="h-[88.787px] relative shrink-0 w-[712.4px]" data-name="NotificationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[118.388px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[14.8px] pr-[0.8px] pt-[14.8px] relative size-full">
        <NotificationItem3 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.p91fb600} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.45833 4.375">
            <path d="M0.729167 3.64583V0.729167" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.73px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46563 1.45833">
            <path d="M0.729167 0.729167H0.736459" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[17.5px] top-[3.5px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[144px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-1.2px] whitespace-nowrap">Weekly report available</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[19.087px] relative rounded-[6.75px] shrink-0 w-[34.362px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[10.5px] whitespace-nowrap">info</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Badge5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.9px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#717182] text-[12.25px] top-[-1.2px] whitespace-nowrap">Your weekly analytics report is now available for download. Check out your latest performance metrics and insights.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[684.4_0_0] h-[44.4px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Container37 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[44.4px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[50.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">2 days ago</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[73.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Apr 1, 09:43 PM</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text8 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[68.888px] items-start left-[28px] top-0 w-[684.4px]" data-name="Container">
      <Container35 />
      <Container38 />
    </div>
  );
}

function NotificationItem4() {
  return (
    <div className="h-[68.888px] relative shrink-0 w-[712.4px]" data-name="NotificationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[98.488px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[14.8px] pr-[0.8px] pt-[14.8px] relative size-full">
        <NotificationItem4 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 16.0417">
            <path d={svgPaths.p3b63200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9375 8.75">
            <path d={svgPaths.pbc923c0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[17.5px] top-[3.5px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[130.475px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[-1.2px] whitespace-nowrap">Team member joined</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#030213] h-[19.087px] relative rounded-[6.75px] shrink-0 w-[50.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.8px] py-[2.55px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white whitespace-nowrap">success</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[7px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Badge6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[39.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#717182] text-[12.25px] top-[-1.2px] w-[640px]">{`Sarah Wilson has joined your team "Marketing Campaign". Welcome the new team member and share relevant project information.`}</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[684.4_0_0] h-[64.3px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.5px] items-start relative size-full">
        <Container43 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[64.3px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[50.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">3 days ago</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-[80.85px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#717182] text-[10.5px] whitespace-nowrap">Mar 31, 09:43 PM</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[13.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text10 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[88.787px] items-start left-[28px] top-0 w-[684.4px]" data-name="Container">
      <Container41 />
      <Container44 />
    </div>
  );
}

function NotificationItem5() {
  return (
    <div className="h-[88.787px] relative shrink-0 w-[712.4px]" data-name="NotificationItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[118.388px] relative rounded-[12.75px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.75px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[14.8px] pr-[0.8px] pt-[14.8px] relative size-full">
        <NotificationItem5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-start relative size-full">
        <Card />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] h-[780.125px] items-start relative shrink-0 w-full" data-name="Container">
      <TabList />
      <Container6 />
    </div>
  );
}

export default function NotificationCenterPageCommunity() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[21px] items-start pt-[21px] px-[204.6px] relative size-full" data-name="Notification Center Page (Community)">
      <Container />
      <Container4 />
      <Container5 />
    </div>
  );
}