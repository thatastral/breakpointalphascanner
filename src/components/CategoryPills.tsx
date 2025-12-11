const categories = ['All', 'Announcements', 'Rumors', 'DeFi', 'Jobs & Hiring'];

interface CategoryPillsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryPills({ selectedCategory, onCategoryChange }: CategoryPillsProps) {
  return (
    <div className="flex gap-2 md:gap-3 items-center w-full overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              flex items-center justify-center px-2 py-3 shrink-0 transition-all
              ${isSelected 
                ? 'bg-[#ac66fd]' 
                : 'opacity-70 border-[#160d22] border-[0.5px] border-solid hover:opacity-100'
              }
            `}
          >
            <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#160d22] text-[12px] whitespace-nowrap">
              {category}
            </p>
          </button>
        );
      })}
    </div>
  );
}
