import svgPaths from "./svg-1yqxcby0ry";
import imgRectangle525 from "figma:asset/d9895db48705ab76464b9443a885cedbddc53a45.png";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-[#160d22] h-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4px] mask-size-[211px_24.939px] ml-[-4px] mt-[-4px] w-[219px]" style={{ maskImage: `url('${imgRectangle525}')` }} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#111111] text-[16px] text-nowrap whitespace-pre">Alpha Scanner 2025</p>
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[211px]">
      <MaskGroup />
      <Frame />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[70px] items-center relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[10px] text-[rgba(17,17,17,0.5)] text-center w-[min-content]">Community-driven alpha. Verify before acting.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[59px] items-center leading-[1.1] relative shrink-0 text-[#111111] text-[14px]">
      <p className="relative shrink-0">[Disclaimer]</p>
      <p className="relative shrink-0">[View Github]</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal gap-[24px] h-[41px] items-center relative shrink-0 text-nowrap whitespace-pre">
      <Frame13 />
      <p className="leading-[1.2] relative shrink-0 text-[0px] text-[12px] text-[rgba(17,17,17,0.5)] text-center">
        <span>{`Built by `}</span>
        <span className="text-[rgba(17,17,17,0.8)]">{`Astral & Superteam Designers Nigeria`}</span>
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-0.5px)] translate-x-[-50%]">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center leading-[1.1] left-[calc(50%+0.5px)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[244px]">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#111111] text-[18px] w-full">Quiet for now…</p>
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(17,17,17,0.48)] w-full">Be the first to drop alpha, tap the + button to share.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#160d22] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center p-[24px] relative w-full">
          <div className="absolute bg-[#160d22] h-[89px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[369px]" />
          <p className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold leading-[1.2] min-w-full relative shrink-0 text-[14px] text-white w-[min-content]">
            <span>{`Built for `}</span>
            <span className="text-[#ac66fd]">Solana Breakpoint attendees</span>
            <span>{` to share what others might miss.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#ac66fd] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative shrink-0">
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[22px]">All</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[94px]">Announcements</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[44px]">Rumors</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[29px]">DeFi</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[94px]">{`Jobs & Hiring`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame6 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-[180.5px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit] w-full">
        <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#160d22] text-[14px] text-nowrap whitespace-pre">Official Feed</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative shrink-0 w-[180.5px]">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[14px] text-[rgba(22,13,34,0.6)] text-nowrap whitespace-pre">Community Alpha Feed</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[48px] w-[361px]">
      <Frame17 />
      <Frame12 />
    </div>
  );
}

function AddLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p1bb61470} fill="var(--fill-0, #160D22)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#ac66fd] content-stretch flex items-center justify-center left-[calc(75%+22.25px)] overflow-clip p-[12px] top-[740px]">
      <AddLine />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 - 8">
      <Frame19 />
      <Frame16 />
      <Frame18 />
      <Frame9 />
    </div>
  );
}