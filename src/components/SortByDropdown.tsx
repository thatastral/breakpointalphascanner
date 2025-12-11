import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export type SortOption = 'Latest' | 'Most voted';

interface SortByDropdownProps {
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SortByDropdown({ selectedSort, onSortChange }: SortByDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (sort: SortOption) => {
    onSortChange(sort);
    setIsOpen(false);
  };

  return (
    <div className="relative self-end" ref={dropdownRef}>
      <div className="flex items-center gap-0">
        <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] opacity-70 text-[#160d22] text-[12px] whitespace-nowrap">
          Sort By:
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white flex gap-1 items-center justify-center px-3 py-[6px] hover:opacity-80 transition-all"
          aria-label="Sort by"
        >
          <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#160d22] text-[12px] whitespace-nowrap">
            {selectedSort}
          </p>
          <ChevronDown className="size-4 text-[#160d22] opacity-80" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-[#160d22] border-opacity-30 z-10 min-w-[135px]">
          <div className="flex flex-col gap-2 p-3">
            <button
              onClick={() => handleSortSelect('Latest')}
              className={`
                flex items-center h-6 text-left transition-opacity
                ${selectedSort === 'Latest' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
              `}
            >
              <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[14px] text-[rgba(17,17,17,0.8)] whitespace-nowrap">
                Latest
              </p>
            </button>
            
            <div className="h-[0.5px] bg-[#160d22] opacity-16" />
            
            <button
              onClick={() => handleSortSelect('Most voted')}
              className={`
                flex items-center h-6 text-left transition-opacity
                ${selectedSort === 'Most voted' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
              `}
            >
              <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[14px] text-[rgba(17,17,17,0.8)] whitespace-nowrap">
                Most voted
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}