interface StatsBarChartProps {
  data: Record<string, number>;
}

export function StatsBarChart({ data }: StatsBarChartProps) {
  const entries = Object.entries(data);
  const maxValue = Math.max(...entries.map(([_, value]) => value), 1);

  return (
    <div className="space-y-4">
      {entries.map(([category, count]) => {
        const percentage = (count / maxValue) * 100;
        
        return (
          <div key={category} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white text-sm">{category}</span>
              <span className="text-[#857a8f] text-sm">{count} posts</span>
            </div>
            <div className="w-full bg-[#160d22] h-2 overflow-hidden">
              <div 
                className="bg-[#ac66fd] h-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
