import imgRectangle525 from "figma:asset/d9895db48705ab76464b9443a885cedbddc53a45.png";

interface FooterProps {
  onDisclaimerClick: () => void;
}

export function Footer({ onDisclaimerClick }: FooterProps) {
  return (
    <div className="flex flex-col gap-8 items-center mt-16 md:mt-24 w-full">
      {/* Logo and Tagline Section */}
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex flex-col gap-[13px] items-center w-[211px]">
          <div className="relative h-[33px] w-[211px]" data-name="Mask group">
            <div 
              className="absolute bg-[#160d22] h-[33px] left-[-4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4px] mask-size-[211px_24.939px] top-[-4px] w-[219px]" 
              style={{ maskImage: `url('${imgRectangle525}')` }} 
            />
          </div>
          
          <div className="flex gap-[6px] items-center">
            <div className="bg-[#160d22] shrink-0 size-[8px]" />
            <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#111111] text-[16px] text-nowrap whitespace-pre">
              Alpha Scanner 2025
            </p>
            <div className="bg-[#160d22] shrink-0 size-[8px]" />
          </div>
        </div>
        
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[10px] text-[rgba(17,17,17,0.5)] text-center">
          Community-driven alpha. Verify before acting.
        </p>
      </div>

      {/* Links and Credits Section */}
      <div className="flex flex-col gap-6 items-center font-['Geist_Mono:Regular',sans-serif] font-normal text-nowrap whitespace-pre">
        <div className="flex gap-[59px] items-center leading-[1.1] text-[#111111] text-[14px]">
          <button 
            onClick={onDisclaimerClick}
            className="hover:text-[#ac66fd] transition-colors"
          >
            [Disclaimer]
          </button>
          <a 
            href="#github" 
            className="hover:text-[#ac66fd] transition-colors"
          >
            [View Github]
          </a>
        </div>
        
        <p className="leading-[1.2] text-[12px] text-[rgba(17,17,17,0.5)] text-center">
          <span>Built by </span>
          <span className="text-[rgba(17,17,17,0.8)]">Astral & Superteam Designers Nigeria</span>
        </p>
      </div>
    </div>
  );
}