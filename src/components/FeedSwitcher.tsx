interface FeedSwitcherProps {
  selectedFeed: 'official' | 'community';
  onFeedChange: (feed: 'official' | 'community') => void;
}

export function FeedSwitcher({ selectedFeed, onFeedChange }: FeedSwitcherProps) {
  return (
    <div className="flex items-center justify-between w-full border-b border-[#160d22] border-opacity-20">
      <button
        onClick={() => onFeedChange('official')}
        className={`
          flex-1 flex items-center justify-center px-2 py-3 relative transition-all
          ${selectedFeed === 'official' ? 'border-b-[0.5px] border-[#160d22]' : ''}
        `}
      >
        <p className={`
          font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] text-[12px] whitespace-nowrap
          ${selectedFeed === 'official' ? 'text-[#160d22]' : 'text-[rgba(22,13,34,0.6)]'}
        `}>
          Official Feed
        </p>
      </button>
      
      <button
        onClick={() => onFeedChange('community')}
        className={`
          flex-1 flex items-center justify-center px-2 py-3 relative transition-all
          ${selectedFeed === 'community' ? 'border-b-[0.5px] border-[#160d22]' : ''}
        `}
      >
        <p className={`
          font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.1] text-[12px] whitespace-nowrap
          ${selectedFeed === 'community' ? 'text-[#160d22]' : 'text-[rgba(22,13,34,0.6)]'}
        `}>
          Community Alpha Feed
        </p>
      </button>
    </div>
  );
}
