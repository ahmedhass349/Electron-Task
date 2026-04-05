function Logomark() {
  return (
    <div className="h-[48px] relative shrink-0 w-[40px]" data-name="Logomark">
      <div className="absolute bg-[#155eef] bottom-[70.83%] left-0 right-3/4 top-[8.33%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[70.83%] left-1/4 opacity-0 right-1/2 top-[8.33%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[70.83%] left-1/2 opacity-60 right-1/4 top-[8.33%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[70.83%] left-3/4 opacity-0 right-0 top-[8.33%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-1/2 left-0 opacity-0 right-3/4 top-[29.17%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-1/2 left-1/4 opacity-60 right-1/2 top-[29.17%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-1/2 left-1/2 opacity-45 right-1/4 top-[29.17%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-1/2 left-3/4 opacity-30 right-0 top-[29.17%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[29.17%] left-0 opacity-60 right-3/4 top-1/2" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[29.17%] left-1/4 opacity-45 right-1/2 top-1/2" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[29.17%] left-1/2 opacity-30 right-1/4 top-1/2" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[29.17%] left-3/4 opacity-15 right-0 top-1/2" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[8.33%] left-0 opacity-0 right-3/4 top-[70.83%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[8.33%] left-1/4 opacity-30 right-1/2 top-[70.83%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[8.33%] left-1/2 opacity-15 right-1/4 top-[70.83%]" data-name="Vector" />
      <div className="absolute bg-[#155eef] bottom-[8.33%] left-3/4 opacity-0 right-0 top-[70.83%]" data-name="Vector" />
    </div>
  );
}

export default function CompanyLogo() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Company logo">
      <Logomark />
    </div>
  );
}