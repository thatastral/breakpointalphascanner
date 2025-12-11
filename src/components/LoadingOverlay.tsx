import { useEffect, useState } from 'react';

interface LoadingOverlayProps {
  onComplete: () => void;
}

export function LoadingOverlay({ onComplete }: LoadingOverlayProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Animate progress from 0 to 100 over 2 seconds
    const duration = 2000;
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setIsComplete(true);
        clearInterval(interval);
        
        // Wait 1 second before calling onComplete
        setTimeout(() => {
          onComplete();
        }, 1000);
      } else {
        setProgress(currentProgress);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50" />

      {/* Loading Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="flex flex-col gap-[14px] items-center w-[177px]">
          {/* Progress Bar */}
          <div className="bg-[rgba(172,102,253,0.2)] h-[7px] overflow-clip relative w-full">
            <div 
              className="bg-[#ac66fd] h-[23px] absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Text */}
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] text-[#160d22] text-[14px] w-full text-center">
            {isComplete ? 'Posted!' : 'Posting Your Alpha...'}
          </p>
        </div>
      </div>
    </>
  );
}