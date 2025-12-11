import { useState } from 'react';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import imgImage3 from "figma:asset/003bfa408c57f997f054358d69b2c663beacbb83.png";
import { LoadingOverlay } from './LoadingOverlay';
import { ErrorModal } from './ErrorModal';

interface AlphaFormProps {
  onClose: () => void;
  onSubmit: (post: {
    title: string;
    description: string;
    category: string;
    source: string;
  }) => void;
  savedFormData?: {
    title: string;
    description: string;
    category: string;
    source: string;
  } | null;
  setSavedFormData?: (data: {
    title: string;
    description: string;
    category: string;
    source: string;
  } | null) => void;
}

const categories = ['Announcements', 'Rumors', 'DeFi', 'Jobs & Hiring'];

// Content moderation - flagged words and patterns
const FLAGGED_WORDS = [
  // Profanity
  'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'damn', 'crap', 'piss',
  // Hate speech
  'nigger', 'fag', 'retard', 'slut', 'whore',
  // Scam indicators
  'free money', 'get rich quick', 'guaranteed profit', 'double your',
  'send me', 'dm me your seed', 'private key', 'seed phrase',
  // Adult content
  'porn', 'xxx', 'sex', 'nude', 'naked', 'onlyfans'
];

const SUSPICIOUS_URL_PATTERNS = [
  /bit\.ly/i,
  /tinyurl/i,
  /goo\.gl/i,
  /adf\.ly/i,
  /(.+\.){3,}/i, // Multiple subdomains (e.g., a.b.c.d.com)
  /(\d{1,3}\.){3}\d{1,3}/i, // IP addresses
];

function validateContent(text: string): { isValid: boolean; reason?: string } {
  const lowerText = text.toLowerCase();
  
  // Check for flagged words
  for (const word of FLAGGED_WORDS) {
    if (lowerText.includes(word)) {
      return { isValid: false, reason: 'Content contains inappropriate language' };
    }
  }
  
  // Check for suspicious URLs
  for (const pattern of SUSPICIOUS_URL_PATTERNS) {
    if (pattern.test(text)) {
      return { isValid: false, reason: 'Suspicious or shortened URLs are not allowed' };
    }
  }
  
  // Check for excessive caps (spam indicator)
  const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
  if (text.length > 10 && capsRatio > 0.7) {
    return { isValid: false, reason: 'Excessive capital letters detected' };
  }
  
  return { isValid: true };
}

export function AlphaForm({ onClose, onSubmit, savedFormData, setSavedFormData }: AlphaFormProps) {
  const [title, setTitle] = useState(savedFormData?.title || '');
  const [description, setDescription] = useState(savedFormData?.description || '');
  const [category, setCategory] = useState(savedFormData?.category || '');
  const [source, setSource] = useState(savedFormData?.source || '');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contentError, setContentError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!source.trim()) {
      return;
    }
    
    // Validate all content
    const titleValidation = validateContent(title);
    const descriptionValidation = validateContent(description);
    const sourceValidation = validateContent(source);
    
    if (!titleValidation.isValid) {
      setContentError(titleValidation.reason || 'Content validation failed');
      return;
    }
    
    if (!descriptionValidation.isValid) {
      setContentError(descriptionValidation.reason || 'Content validation failed');
      return;
    }
    
    if (!sourceValidation.isValid) {
      setContentError(sourceValidation.reason || 'Content validation failed');
      return;
    }
    
    // Clear any previous content errors
    setContentError(null);
    setIsSubmitting(true);
  };

  const handleLoadingComplete = async () => {
    try {
      await onSubmit({
        title: title || 'Untitled Alpha',
        description,
        category: category || 'Announcements',
        source
      });
      setIsSubmitting(false);
    } catch (error) {
      // Show error if backend submission fails
      console.error('Error submitting post:', error);
      setIsSubmitting(false);
      setShowError(true);
    }
  };

  const handleRetry = () => {
    setShowError(false);
    // Keep form data, user can edit and resubmit
  };

  const getCurrentFormData = () => ({
    title,
    description,
    category,
    source
  });

  const isSubmitDisabled = !source.trim();

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-white/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Form Container - Only show when not submitting */}
      {!isSubmitting && (
        <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 p-4 pointer-events-none">
          <div 
            className="bg-[#160d22] w-full max-w-[450px] p-6 md:p-8 flex flex-col gap-8 pointer-events-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#e7d2f9] hover:text-white transition-colors"
              aria-label="Close form"
            >
              <X className="size-6" />
            </button>

            {/* Header */}
            <div className="flex flex-col gap-[18px] items-center w-full">
              <div className="flex flex-col gap-3 items-center w-full max-w-[200px]">
                <div className="aspect-[1396/165] relative w-full">
                  <img 
                    alt="Breakpoint Logo" 
                    className="absolute inset-0 w-full h-full object-contain" 
                    src={imgImage3} 
                  />
                </div>
                
                <div className="flex gap-[5px] items-center">
                  <div className="bg-[#e7d2f9] shrink-0 size-[7px]" />
                  <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[14px] text-white whitespace-nowrap">
                    Alpha Scanner Form
                  </p>
                  <div className="bg-[#e7d2f9] shrink-0 size-[7px]" />
                </div>
              </div>
              
              <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[12px] text-[rgba(255,255,255,0.8)] text-center">
                Spotted something big? Share it and add a source for the squad!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] w-full">
              {/* Title Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      setTitle(e.target.value);
                    }
                  }}
                  placeholder="Alpha Title"
                  maxLength={100}
                  className="w-full h-[36px] px-3 py-[10px] bg-transparent border-[0.5px] border-[#e7d2f9] text-[#e7d2f9] placeholder-[#e7d2f9] font-['Geist_Mono:Regular',sans-serif] font-normal text-[12px] leading-[1.1] focus:outline-none focus:border-[#ac66fd]"
                />
                <p className="font-['Geist_Mono:Regular',sans-serif] font-normal text-[10px] text-[rgba(255,255,255,0.5)] mt-1">
                  {title.length}/100
                </p>
              </div>

              {/* Description Input */}
              <div className="relative w-full">
                <textarea
                  value={description}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setDescription(e.target.value);
                    }
                  }}
                  placeholder="Description"
                  rows={3}
                  maxLength={500}
                  className="w-full px-3 py-[10px] bg-transparent border-[0.5px] border-[#e7d2f9] text-[#e7d2f9] placeholder-[#e7d2f9] font-['Geist_Mono:Regular',sans-serif] font-normal text-[12px] leading-[1.1] focus:outline-none focus:border-[#ac66fd] resize-none"
                />
                <p className="font-['Geist_Mono:Regular',sans-serif] font-normal text-[10px] text-[rgba(255,255,255,0.5)] mt-1">
                  {description.length}/500
                </p>
              </div>

              {/* Category Dropdown */}
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="w-full h-[36px] px-3 py-[10px] bg-transparent border-[0.5px] border-[#e7d2f9] text-[#e7d2f9] font-['Geist_Mono:Regular',sans-serif] font-normal text-[12px] leading-[1.1] flex items-center justify-between focus:outline-none focus:border-[#ac66fd]"
                >
                  <span className={category ? 'text-[#e7d2f9]' : 'text-[#e7d2f9]'}>
                    {category || 'Category dropdown'}
                  </span>
                  <ChevronDown className={`size-4 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 w-full bg-[#160d22] border-[0.5px] border-[#e7d2f9] mt-1 z-10">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setCategory(cat);
                          setShowCategoryDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-left text-[#e7d2f9] font-['Geist_Mono:Regular',sans-serif] font-normal text-[12px] hover:bg-[#ac66fd] hover:text-[#160d22] transition-colors"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Source Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Source or Evidence (required)"
                  required
                  className="w-full h-[36px] px-3 py-[10px] bg-transparent border-[0.5px] border-[#e7d2f9] text-[#e7d2f9] placeholder-[#e7d2f9] font-['Geist_Mono:Regular',sans-serif] font-normal text-[12px] leading-[1.1] focus:outline-none focus:border-[#ac66fd]"
                />
              </div>

              {/* Content Error Message */}
              {contentError && (
                <div className="w-full px-3 py-2 bg-red-500/10 border border-red-500/30">
                  <p className="font-['Geist_Mono:Regular',sans-serif] font-normal text-[11px] text-red-400 text-center">
                    {contentError}
                  </p>
                </div>
              )}

              {/* Submit Section */}
              <div className="flex flex-col gap-4 items-center w-full">
                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className={`
                    w-full flex items-center justify-center gap-1 px-4 py-[14px] transition-all
                    ${isSubmitDisabled 
                      ? 'bg-[#ac66fd] opacity-50 cursor-not-allowed' 
                      : 'bg-[#ac66fd] hover:bg-[#9b55ec]'
                    }
                  `}
                >
                  <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.1] text-[#160d22] text-[16px]">
                    Submit Alpha
                  </p>
                  <ArrowRight className="size-4 text-[#160d22] opacity-70" />
                </button>
                
                <p className="font-['Geist_Mono:Regular',sans-serif] font-normal leading-[1.2] text-[10px] text-[rgba(255,255,255,0.5)] text-center max-w-[215px]">
                  Posting inaccurate information may result in removal.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isSubmitting && <LoadingOverlay onComplete={handleLoadingComplete} />}
      
      {/* Error Modal */}
      {showError && (
        <ErrorModal
          onClose={() => setShowError(false)}
          onRetry={handleRetry}
          formData={getCurrentFormData()}
        />
      )}
    </>
  );
}