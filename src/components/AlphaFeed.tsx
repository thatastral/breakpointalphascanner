import { AlphaPost } from '../App';
import { CategoryPills } from './CategoryPills';
import { FeedSwitcher } from './FeedSwitcher';
import { PostCard } from './PostCard';
import { SortByDropdown, SortOption } from './SortByDropdown';
import { EmptyState } from './EmptyState';
import { useState } from 'react';

interface AlphaFeedProps {
  posts: AlphaPost[];
  selectedCategory: string;
  selectedFeed: 'official' | 'community';
  onCategoryChange: (category: string) => void;
  onFeedChange: (feed: 'official' | 'community') => void;
  onLike: (id: string, increment?: boolean) => void;
  onDislike: (id: string, increment?: boolean) => void;
}

export function AlphaFeed({
  posts,
  selectedCategory,
  selectedFeed,
  onCategoryChange,
  onFeedChange,
  onLike,
  onDislike
}: AlphaFeedProps) {
  const [sortBy, setSortBy] = useState<SortOption>('Latest');

  const filteredPosts = posts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const feedMatch = post.feed === selectedFeed;
    return categoryMatch && feedMatch;
  });

  // Sort posts based on selected sort option
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'Latest') {
      return b.timestamp.getTime() - a.timestamp.getTime();
    } else {
      // Most voted: sort by total votes (likes - dislikes)
      const aVotes = a.likes - a.dislikes;
      const bVotes = b.likes - b.dislikes;
      return bVotes - aVotes;
    }
  });

  return (
    <div className="flex flex-col gap-5 md:gap-6 w-full">
      <SortByDropdown 
        selectedSort={sortBy}
        onSortChange={setSortBy}
      />
      
      <CategoryPills 
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      
      <div className="flex flex-col w-full">
        <FeedSwitcher 
          selectedFeed={selectedFeed}
          onFeedChange={onFeedChange}
        />
        
        <div className="flex flex-col w-full">
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={(increment) => onLike(post.id, increment)}
                onDislike={(increment) => onDislike(post.id, increment)}
              />
            ))
          ) : (
            <EmptyState
              message="No posts found in this feed."
              subMessage={selectedFeed === 'community' ? "Click the + button to add your first alpha!" : undefined}
            />
          )}
        </div>
      </div>
    </div>
  );
}