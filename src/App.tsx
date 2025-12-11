import { useState, useEffect } from 'react';
import { AlphaFeed } from './components/AlphaFeed';
import { AlphaForm } from './components/AlphaForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DisclaimerModal } from './components/DisclaimerModal';
import { WelcomeModal } from './components/WelcomeModal';
import { Banner } from './components/Banner';
import { Plus } from 'lucide-react';
import { projectId, publicAnonKey } from './utils/supabase/info';
import AdminPanel from './admin';

export interface AlphaPost {
  id: string;
  title: string;
  description: string;
  category: string;
  source: string;
  verified: boolean;
  timestamp: Date;
  likes: number;
  dislikes: number;
  feed: 'official' | 'community';
}

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-1c111436`;

export default function App() {
  // Check if admin mode is enabled via URL parameter
  const isAdminMode = new URLSearchParams(window.location.search).get('admin') === 'true';
  
  // If admin mode, render the admin panel instead
  if (isAdminMode) {
    return <AdminPanel />;
  }

  const [posts, setPosts] = useState<AlphaPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFeed, setSelectedFeed] = useState<'official' | 'community'>('official');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [savedFormData, setSavedFormData] = useState<{
    title: string;
    description: string;
    category: string;
    source: string;
  } | null>(null);

  // Fetch posts from backend on mount
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/posts`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      
      // Convert timestamp strings to Date objects
      const postsWithDates = data.posts.map((post: any) => ({
        ...post,
        timestamp: new Date(post.timestamp)
      }));
      
      setPosts(postsWithDates);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Set up social meta tags
  useEffect(() => {
    // Update document title
    document.title = 'Breakpoint Alpha Scanner - Solana Ecosystem Insights';
    
    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Primary Meta Tags
    setMetaTag('title', 'Breakpoint Alpha Scanner - Solana Ecosystem Insights');
    setMetaTag('description', 'Live insights, announcements & early signals from the Solana ecosystem. Community-driven alpha.');
    
    // Open Graph / Facebook
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://breakpointalphascanner.vercel.app/', true);
    setMetaTag('og:title', 'Breakpoint Alpha Scanner - Solana Ecosystem Insights', true);
    setMetaTag('og:description', 'Live insights, announcements & early signals from the Solana ecosystem. Community-driven alpha.', true);
    setMetaTag('og:image', 'https://breakpointalphascanner.vercel.app/assets/social-card.png', true);
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://breakpointalphascanner.vercel.app/', true);
    setMetaTag('twitter:title', 'Breakpoint Alpha Scanner - Solana Ecosystem Insights', true);
    setMetaTag('twitter:description', 'Live insights, announcements & early signals from the Solana ecosystem. Community-driven alpha.', true);
    setMetaTag('twitter:image', 'https://breakpointalphascanner.vercel.app/assets/social-card.png', true);
  }, []);

  // Track page visit on mount
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch(`${API_URL}/analytics/visit`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        });
      } catch (error) {
        // Silently fail - analytics shouldn't break the app
        console.log('Analytics tracking failed:', error);
      }
    };
    
    trackVisit();
  }, []);

  const handleAddPost = async (newPost: Omit<AlphaPost, 'id' | 'timestamp' | 'likes' | 'dislikes' | 'verified' | 'feed'>) => {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(newPost)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      
      const data = await response.json();
      
      // Convert timestamp string to Date object
      const postWithDate = {
        ...data.post,
        timestamp: new Date(data.post.timestamp)
      };
      
      setPosts([postWithDate, ...posts]);
      setIsFormOpen(false);
      setSavedFormData(null);
      setSelectedFeed('community');
    } catch (error) {
      console.error('Error creating post:', error);
      throw error; // Re-throw to let the form handle the error
    }
  };

  const handleLike = async (id: string, increment: boolean = true) => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}/like`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ increment })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update likes');
      }
      
      const data = await response.json();
      
      // Update the post in the local state
      setPosts(posts.map(post => {
        if (post.id === id) {
          return { ...post, likes: data.post.likes };
        }
        return post;
      }));
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleDislike = async (id: string, increment: boolean = true) => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}/dislike`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ increment })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update dislikes');
      }
      
      const data = await response.json();
      
      // Update the post in the local state
      setPosts(posts.map(post => {
        if (post.id === id) {
          return { ...post, dislikes: data.post.dislikes };
        }
        return post;
      }));
    } catch (error) {
      console.error('Error updating dislikes:', error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <Banner />
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <Header />
        
        <AlphaFeed 
          posts={posts}
          selectedCategory={selectedCategory}
          selectedFeed={selectedFeed}
          onCategoryChange={setSelectedCategory}
          onFeedChange={setSelectedFeed}
          onLike={handleLike}
          onDislike={handleDislike}
        />
        
        <Footer onDisclaimerClick={() => setIsDisclaimerOpen(true)} />
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 bg-[#ac66fd] p-3 md:p-4 hover:bg-[#9b55ec] transition-colors z-40"
        aria-label="Add new alpha"
      >
        <Plus className="size-6 text-[#160d22]" />
      </button>

      {/* Form Modal */}
      {isFormOpen && (
        <AlphaForm 
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddPost}
          savedFormData={savedFormData}
          setSavedFormData={setSavedFormData}
        />
      )}

      {/* Disclaimer Modal */}
      {isDisclaimerOpen && (
        <DisclaimerModal onClose={() => setIsDisclaimerOpen(false)} />
      )}

      {/* Welcome Modal */}
      {isWelcomeOpen && (
        <WelcomeModal onClose={() => setIsWelcomeOpen(false)} />
      )}
    </div>
  );
}
