import svgPaths from "./svg-torx95pcvt";
import imgRectangle525 from "figma:asset/d9895db48705ab76464b9443a885cedbddc53a45.png";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-[#160d22] h-[33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4px] mask-size-[211px_24.939px] ml-[-4px] mt-[-4px] w-[219px]" style={{ maskImage: `url('${imgRectangle525}')` }} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#111111] text-[16px] text-nowrap whitespace-pre">Alpha Scanner 2025</p>
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[211px]">
      <MaskGroup />
      <Frame1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[70px] items-center relative shrink-0 w-full">
      <Frame2 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[10px] text-[rgba(17,17,17,0.5)] text-center w-[min-content]">Community-driven alpha. Verify before acting.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[59px] items-center leading-[1.1] relative shrink-0 text-[#111111] text-[14px]">
      <p className="relative shrink-0">[Disclaimer]</p>
      <p className="relative shrink-0">[View Github]</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal gap-[24px] h-[41px] items-center relative shrink-0 text-nowrap whitespace-pre">
      <Frame20 />
      <p className="leading-[1.2] relative shrink-0 text-[0px] text-[12px] text-[rgba(17,17,17,0.5)] text-center">
        <span>{`Built by `}</span>
        <span className="text-[rgba(17,17,17,0.8)]">{`Astral & Superteam Designers Nigeria`}</span>
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-0.5px)] top-[1369px] translate-x-[-50%]">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame41() {
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

function LeftLine() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="left_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p7c91080} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[6px] relative shrink-0">
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] text-nowrap whitespace-pre">Sort By</p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <LeftLine />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ac66fd] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative shrink-0">
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[22px]">All</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[94px]">Announcements</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[44px]">Rumors</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[29px]">DeFi</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="opacity-70 relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit]">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[8px] leading-[1.1] relative shrink-0 text-[#160d22] text-[12px] w-[94px]">{`Jobs & Hiring`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame10 />
      <Frame7 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-[180.5px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative rounded-[inherit] w-full">
        <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[#160d22] text-[14px] text-nowrap whitespace-pre">Official Feed</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#160d22] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[12px] relative shrink-0 w-[180.5px]">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] relative shrink-0 text-[14px] text-[rgba(22,13,34,0.6)] text-nowrap whitespace-pre">Community Alpha Feed</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#12f295] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#160d22] text-[11px] text-nowrap whitespace-pre">Verified</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[100px] shrink-0">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#160d22] text-[10px] text-nowrap">
        <p className="leading-[1.1] whitespace-pre">{`[Jobs & Hiring]`}</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame47 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">9:45AM</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[1.2] relative shrink-0 text-[rgba(17,17,17,0.8)] w-full">
      <p className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full">Helius reveals API upgrades enabling 10x faster NFT metadata querying.</p>
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">{`Live insights, announcements & early signals from the Solana ecosystem.`}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-neutral-100 content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#160d22] text-[12px] text-nowrap">
        <p className="leading-[1.1] whitespace-pre">x.com/solanacof</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">Source:</p>
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function ThumbUp2Line() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="thumb_up_2_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p2b205400} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ThumbUp2Line />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.pe2d7ea0} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function More1Line() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="more_1_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p3621f280} fill="var(--fill-0, #160D22)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame14 />
      <More1Line />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-0 py-[24px] relative rounded-[inherit] w-full">
        <Frame9 />
        <Frame25 />
        <Frame27 />
        <Frame48 />
      </div>
      <div aria-hidden="true" className="absolute border-[#111111] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f8413a] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#160d22] text-[11px] text-nowrap whitespace-pre">Unverified</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[100px] shrink-0">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#160d22] text-[10px] text-nowrap">
        <p className="leading-[1.1] whitespace-pre">{`[Jobs & Hiring]`}</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame49 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">9:45AM</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[1.2] relative shrink-0 text-[rgba(17,17,17,0.8)] w-full">
      <p className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full">Helius reveals API upgrades enabling 10x faster NFT metadata querying.</p>
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">{`Live insights, announcements & early signals from the Solana ecosystem.`}</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-neutral-100 content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#160d22] text-[12px] text-nowrap">
        <p className="leading-[1.1] whitespace-pre">x.com/solanacof</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">Source:</p>
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function ThumbUp2Line1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="thumb_up_2_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p2b205400} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ThumbUp2Line1 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.pe2d7ea0} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group1 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-[361px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-0 py-[24px] relative rounded-[inherit] w-full">
        <Frame30 />
        <Frame31 />
        <Frame34 />
        <Frame50 />
      </div>
      <div aria-hidden="true" className="absolute border-[#111111] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#12f295] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[#160d22] text-[11px] text-nowrap whitespace-pre">Verified</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[100px] shrink-0">
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#160d22] text-[10px] text-nowrap">
        <p className="leading-[1.1] whitespace-pre">{`[Jobs & Hiring]`}</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame51 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">9:45AM</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center leading-[1.2] relative shrink-0 text-[rgba(17,17,17,0.8)] w-full">
      <p className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full">Helius reveals API upgrades enabling 10x faster NFT metadata querying.</p>
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">{`Live insights, announcements & early signals from the Solana ecosystem.`}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-neutral-100 content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative shrink-0">
      <div className="bg-[#160d22] shrink-0 size-[8px]" />
      <div className="flex flex-col font-['Geist_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#160d22] text-[12px] text-nowrap">
        <p className="leading-[1.1] whitespace-pre">x.com/solanacof</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">Source:</p>
      <Frame44 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function ThumbUp2Line2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="thumb_up_2_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.p2b205400} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ThumbUp2Line2 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path clipRule="evenodd" d={svgPaths.pe2d7ea0} fill="var(--fill-0, #160D22)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group2 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(17,17,17,0.8)] text-nowrap whitespace-pre">20</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip px-0 py-[24px] relative rounded-[inherit] w-full">
        <Frame42 />
        <Frame43 />
        <Frame53 />
        <Frame57 />
      </div>
      <div aria-hidden="true" className="absolute border-[#111111] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[361px]">
      <Frame />
      <Frame38 />
      <Frame58 />
      <Frame38 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[361px]">
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame18 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-end left-[16px] top-[48px] w-[361px]">
      <Frame41 />
      <Frame4 />
      <Frame59 />
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

function Frame60() {
  return (
    <div className="absolute bg-[#ac66fd] content-stretch flex items-center justify-center left-[calc(75%+22.25px)] overflow-clip p-[12px] top-[740px]">
      <AddLine />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 - 3">
      <Frame46 />
      <Frame45 />
      <Frame60 />
    </div>
  );
}