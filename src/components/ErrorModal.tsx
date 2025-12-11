import { motion } from 'motion/react';

interface ErrorModalProps {
  onRetry: () => void;
  onClose?: () => void;
  formData?: {
    title: string;
    description: string;
    category: string;
    source: string;
  };
}

export function ErrorModal({ onRetry, onClose, formData }: ErrorModalProps) {
  const handleRetry = () => {
    if (onClose) {
      onClose();
    }
    onRetry();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)]" />
      
      {/* Error Content */}
      <div className="relative z-10 flex flex-col gap-6 items-center w-[177px]">
        {/* Progress Bar with Animation */}
        <div className="flex flex-col gap-[14px] items-start w-full">
          <div className="bg-[rgba(248,65,58,0.2)] h-[7px] overflow-hidden relative w-full">
            <motion.div 
              className="absolute bg-[#f8413a] h-[23px] left-0 top-1/2 -translate-y-1/2"
              initial={{ width: '0%' }}
              animate={{ 
                width: ['0%', '50%', '10%', '50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 1]
              }}
            />
          </div>
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] text-[#160d22] text-[14px] text-center w-full">
            Something went wrong.
          </p>
        </div>
        
        {/* Try Again Button */}
        <button
          onClick={handleRetry}
          className="bg-[#160d22] w-full hover:bg-opacity-90 transition-all"
        >
          <div className="flex items-center justify-center px-[122px] py-[14px] w-full">
            <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[16px] text-white whitespace-nowrap">
              Try Again
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}