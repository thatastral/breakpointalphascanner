import { AlphaPost } from '../App';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

interface PostCardProps {
  post: AlphaPost;
  onLike: (increment: boolean) => void;
  onDislike: (increment: boolean) => void;
}

export function PostCard({ post, onLike, onDislike }: PostCardProps) {
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  // Helper function to check if source is a URL
  const isUrl = (text: string) => {
    try {
      const urlPattern = /^(https?:\/\/|www\.)/i;
      return urlPattern.test(text.trim());
    } catch {
      return false;
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      onLike(true);
      setHasLiked(true);
      if (hasDisliked) {
        setHasDisliked(false);
      }
    } else {
      // Undo the like
      onLike(false);
      setHasLiked(false);
    }
  };

  const handleDislike = () => {
    if (!hasDisliked) {
      onDislike(true);
      setHasDisliked(true);
      if (hasLiked) {
        setHasLiked(false);
      }
    } else {
      // Undo the dislike
      onDislike(false);
      setHasDisliked(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }).toUpperCase();
  };

  return (
    <div className="relative w-full border-b border-[#111111] border-opacity-20">
      <div className="flex flex-col gap-4 py-6">
        {/* Header with badge and time */}
        <div className="flex items-center justify-between w-full">
          <div className={`
            flex gap-[6px] items-center justify-center px-2 py-[6px]
            ${post.verified ? 'bg-[#12f295]' : 'bg-[#f8413a]'}
          `}>
            <div className="bg-[#160d22] shrink-0 size-[8px]" />
            <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#160d22] text-[11px] whitespace-nowrap">
              {post.verified ? 'Verified' : 'Unverified'}
            </p>
          </div>
          
          <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[12px] text-[rgba(17,17,17,0.8)] whitespace-nowrap">
            {formatTime(post.timestamp)}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[14px] leading-[1.2] text-[rgba(17,17,17,0.8)] w-full">
          <p className="font-['Geist_Mono:SemiBold',sans-serif] font-semibold text-[18px]">
            {post.title}
          </p>
          <p className="font-['Geist_Mono:Regular',sans-serif] font-normal text-[14px]">
            {post.description}
          </p>
        </div>

        {/* Source */}
        <div className="flex items-center gap-[4px] w-full flex-wrap">
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium leading-[1.2] text-[14px] text-[rgba(17,17,17,0.8)] whitespace-nowrap">
            Source:
          </p>
          <div className="bg-neutral-100 flex gap-[6px] items-center justify-center px-2 py-[6px]">
            <div className="bg-[#160d22] shrink-0 size-[8px]" />
            {isUrl(post.source) ? (
              <a 
                href={post.source.startsWith('http') ? post.source : `https://${post.source}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#160d22] text-[12px] break-all hover:underline"
              >
                {post.source}
              </a>
            ) : (
              <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#160d22] text-[12px] break-all">
                {post.source}
              </p>
            )}
          </div>
        </div>

        {/* Reactions */}
        <div className="flex gap-4 items-start">
          <button
            onClick={handleLike}
            className={`
              flex gap-1 items-center group transition-opacity
              ${hasLiked ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
            `}
            aria-label="Like"
          >
            <ThumbsUp className={`size-6 ${hasLiked ? 'fill-[#160d22]' : ''}`} color="#160d22" />
            <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[14px] text-[rgba(17,17,17,0.8)]">
              {post.likes}
            </p>
          </button>
          
          <button
            onClick={handleDislike}
            className={`
              flex gap-1 items-center group transition-opacity
              ${hasDisliked ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
            `}
            aria-label="Dislike"
          >
            <ThumbsDown className={`size-6 ${hasDisliked ? 'fill-[#160d22]' : ''}`} color="#160d22" />
            <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[14px] text-[rgba(17,17,17,0.8)]">
              {post.dislikes}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}