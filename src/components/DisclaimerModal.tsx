import { X } from 'lucide-react';

interface DisclaimerModalProps {
  onClose: () => void;
}

export function DisclaimerModal({ onClose }: DisclaimerModalProps) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div 
          className="bg-[#160d22] w-full max-w-[450px] md:max-w-[600px] p-6 md:p-8 flex flex-col gap-8 pointer-events-auto max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#e7d2f9] hover:text-white transition-colors z-10"
            aria-label="Close disclaimer"
          >
            <X className="size-6" />
          </button>

          {/* Content */}
          <div className="flex flex-col gap-8 items-center w-full">
            {/* Header */}
            <div className="flex flex-col items-center w-full">
              <div className="flex gap-[6px] items-center">
                <div className="bg-[#e7d2f9] shrink-0 size-[8px]" />
                <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[20px] text-white whitespace-nowrap">
                  Disclaimer
                </p>
                <div className="bg-[#e7d2f9] shrink-0 size-[8px]" />
              </div>
            </div>

            {/* Disclaimer Text */}
            <div className="font-['Geist_Mono:Regular',sans-serif] font-normal text-[12px] text-[rgba(255,255,255,0.8)] w-full">
              <p className="leading-[1.2] mb-0">
                The information displayed on Breakpoint Alpha Scanner is community-generated and may include early, speculative, or unverified updates.
              </p>
              <p className="leading-[1.2] mb-0 mt-3">
                It is meant to be a fun, lightweight project that allows attendees to share alphas, insights, or interesting things they believe others may have missed during Breakpoint.
              </p>
              
              <p className="leading-[1.2] mb-0 mt-3">&nbsp;</p>
              <p className="leading-[1.2] mb-0 text-white">Please note:</p>
              <p className="leading-[1.2] mb-0">&nbsp;</p>
              
              <ul className="mb-0 space-y-2">
                <li className="list-disc ms-[18px]">
                  <span className="leading-[1.2] text-white">
                    Not all posts are guaranteed to be accurate or factual.
                  </span>
                </li>
                
                <li className="list-disc ms-[18px]">
                  <span className="leading-[1.2] text-white">
                    Official or verified alphas are marked clearly and include trusted links or sources provided by the community or event attendees.
                  </span>
                </li>
                
                <li className="list-disc ms-[18px]">
                  <span className="leading-[1.2] text-white">
                    Users should always cross-check information before acting on it.
                  </span>
                </li>
                
                <li className="leading-[1.2] list-disc ms-[18px] text-white">
                  <span>This tool is not affiliated with or endorsed by </span>
                  <span className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold">Solana</span>
                  <span> or </span>
                  <span className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold">Breakpoint organizers.</span>
                </li>
              </ul>
              
              <p className="leading-[1.2] mb-0 mt-3">
                By using this page, you acknowledge that all content should be viewed as community discussion rather than official announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
