interface EmptyStateProps {
  message?: string;
  subMessage?: string;
}

export function EmptyState({ message, subMessage }: EmptyStateProps) {
  const defaultMessage = "Quiet for now...";
  const defaultSubMessage = "Be the first to drop alpha, tap the + button to share.";
  
  return (
    <div className="flex flex-col items-center justify-center py-24 w-full">
      <div className="flex flex-col gap-3 items-center text-center w-[244px]">
        <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] text-[#111111] text-[18px] w-full">
          {message || defaultMessage}
        </p>
        {(subMessage || defaultSubMessage) && (
          <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[14px] text-[rgba(17,17,17,0.48)] w-full">
            {subMessage || defaultSubMessage}
          </p>
        )}
      </div>
    </div>
  );
}