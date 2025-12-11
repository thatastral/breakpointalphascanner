export function Banner() {
  return (
    <div className="bg-[#160d22] w-full">
      <div className="flex flex-col items-center overflow-clip size-full">
        <div className="flex flex-col gap-8 items-center p-6 relative w-full">
          <p className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold leading-[1.2] text-[14px] text-white text-center max-w-full">
            <span>{`Built for `}</span>
            <span className="text-[#ac66fd]">Solana Breakpoint attendees</span>
            <span>{` to share what others might miss.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
