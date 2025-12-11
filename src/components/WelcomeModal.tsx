import svgPaths from "../imports/svg-qwe4kaq6s8";
import imgImage3 from "figma:asset/003bfa408c57f997f054358d69b2c663beacbb83.png";

interface WelcomeModalProps {
  onClose: () => void;
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="bg-[#e7d2f9] shrink-0 size-[8px]" />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Alpha Scanner</p>
      <div className="bg-[#e7d2f9] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0 w-[211px]">
      <div className="aspect-[1396/165] relative shrink-0 w-full" data-name="image 3">
        <img alt="Breakpoint" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <Frame1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[236px]">
      <Frame2 />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-center w-[min-content]">{`Live insights, announcements & early signals from the Solana ecosystem.`}</p>
    </div>
  );
}

function ArrowRightLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow_right_line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2c8aaa80} fill="var(--fill-0, #160D22)" fillOpacity="0.7" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame27({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#ac66fd] relative shrink-0 w-full hover:bg-[#9b55ec] transition-colors"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[122px] py-[14px] relative w-full">
          <p className="font-['Geist_Mono:Regular',sans-serif] font-normal h-[12px] leading-[1.1] relative shrink-0 text-[#160d22] text-[16px] w-[68px]">Dive In</p>
          <ArrowRightLine />
        </div>
      </div>
    </button>
  );
}

function Frame28({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame27 onClick={onClick} />
      <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center w-full">Community-driven alpha. Verify before acting.</p>
    </div>
  );
}

function Frame19({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute bg-[#160d22] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-[24px] pt-[48px] px-[24px] w-[calc(100%-32px)] max-w-[361px]">
      <Frame26 />
      <Frame28 onClick={onClick} />
    </div>
  );
}

export function WelcomeModal({ onClose }: WelcomeModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)]" />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-[400px] max-h-[865px]">
        <Frame19 onClick={onClose} />
      </div>
    </div>
  );
}