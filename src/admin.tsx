import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Card } from './components/ui/card';
import { StatsBarChart } from './components/StatsBarChart';
import { toast, Toaster } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from './utils/supabase/info';
import { 
  CheckCircle, 
  Plus, 
  Sparkles, 
  ArrowLeft, 
  BarChart3, 
  FileText,
  Users,
  TrendingUp,
  Eye,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-1c111436`;

type AdminView = 'create' | 'stats';

interface Stats {
  totalVisits: number;
  totalPosts: number;
  verifiedPosts: number;
  unverifiedPosts: number;
  officialFeedPosts: number;
  communityFeedPosts: number;
  totalLikes: number;
  totalDislikes: number;
  totalEngagement: number;
  avgEngagement: number;
  recentPosts: number;
  categoryStats: Record<string, number>;
  mostLikedPost: {
    title: string;
    likes: number;
    category: string;
  } | null;
  lastUpdated: string;
}

/**
 * Admin Panel for Managing Solana Breakpoint Alpha Scanner
 * 
 * Features:
 * - Create official, verified Alpha posts
 * - View comprehensive analytics and stats
 */
export default function AdminPanel() {
  const [activeView, setActiveView] = useState<AdminView>('stats');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Announcements');
  const [source, setSource] = useState('Solana Breakpoint Team');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(false);

  const categories = [
    'Announcements',
    'Rumors',
    'DeFi',
    'Jobs & Hiring'
  ];

  // Fetch stats when stats view is active
  useEffect(() => {
    if (activeView === 'stats') {
      fetchStats();
    }
  }, [activeView]);

  const fetchStats = async () => {
    setIsLoadingStats(true);
    try {
      const response = await fetch(`${API_URL}/analytics/stats`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();
      setStats(data.stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
      toast.error('Failed to load statistics');
    } finally {
      setIsLoadingStats(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('Title is required');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/posts/official`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          category,
          source: source.trim() || 'Solana Breakpoint Team'
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create post');
      }

      const data = await response.json();
      
      toast.success('Official Alpha post created!', {
        description: `"${data.post.title}" has been added to the Official Feed`,
        duration: 5000
      });

      // Reset form
      setTitle('');
      setDescription('');
      setCategory('Announcements');
      setSource('Solana Breakpoint Team');

    } catch (error) {
      console.error('Error creating official post:', error);
      toast.error('Failed to create post', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickPosts = [
    {
      title: "Solana Breakpoint 2025 Schedule Released",
      description: "Check out the full lineup of speakers and workshops for this year's event",
      category: "Announcements"
    },
    {
      title: "New Phantom Wallet Update Incoming",
      description: "Rumored to include improved transaction batching and lower fees",
      category: "Rumors"
    },
    {
      title: "Jupiter Aggregator V4 Beta Launch",
      description: "New version promises 30% better routing and reduced slippage",
      category: "DeFi"
    }
  ];

  const fillQuickPost = (post: typeof quickPosts[0]) => {
    setTitle(post.title);
    setDescription(post.description);
    setCategory(post.category);
  };

  return (
    <div className="min-h-screen bg-[#160d22] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back to Main App Link */}
        <div className="mb-6">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-[#ac66fd] hover:text-[#9b55ec] transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Main App
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="size-8 text-[#ac66fd]" />
            <h1 className="text-[#ac66fd]">Admin Panel</h1>
          </div>
          <p className="text-[#857a8f]">
            Manage official posts and view analytics
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#ac66fd]/20">
          <button
            onClick={() => setActiveView('stats')}
            className={`flex items-center gap-2 px-6 py-3 transition-colors ${
              activeView === 'stats'
                ? 'text-[#ac66fd] border-b-2 border-[#ac66fd]'
                : 'text-[#857a8f] hover:text-white'
            }`}
          >
            <BarChart3 className="size-4" />
            Statistics
          </button>
          <button
            onClick={() => setActiveView('create')}
            className={`flex items-center gap-2 px-6 py-3 transition-colors ${
              activeView === 'create'
                ? 'text-[#ac66fd] border-b-2 border-[#ac66fd]'
                : 'text-[#857a8f] hover:text-white'
            }`}
          >
            <FileText className="size-4" />
            Create Post
          </button>
        </div>

        {/* Stats View */}
        {activeView === 'stats' && (
          <div className="space-y-6">
            {/* Refresh Button */}
            <div className="flex justify-end">
              <Button
                onClick={fetchStats}
                disabled={isLoadingStats}
                className="bg-[#ac66fd] hover:bg-[#9b55ec] text-[#160d22]"
              >
                {isLoadingStats ? 'Refreshing...' : 'Refresh Stats'}
              </Button>
            </div>

            {isLoadingStats && !stats ? (
              <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-12">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="size-8 border-2 border-[#ac66fd]/30 border-t-[#ac66fd] rounded-full animate-spin" />
                  <p className="text-[#857a8f]">Loading statistics...</p>
                </div>
              </Card>
            ) : stats ? (
              <>
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Total Visits */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[#857a8f] text-sm mb-2">Total Visits</p>
                        <p className="text-3xl text-white">{stats.totalVisits.toLocaleString()}</p>
                      </div>
                      <Eye className="size-8 text-[#ac66fd] opacity-50" />
                    </div>
                  </Card>

                  {/* Total Alphas Shared */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[#857a8f] text-sm mb-2">Alphas Shared</p>
                        <p className="text-3xl text-white">{stats.totalPosts}</p>
                      </div>
                      <MessageSquare className="size-8 text-[#ac66fd] opacity-50" />
                    </div>
                  </Card>

                  {/* Verified Alphas */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[#857a8f] text-sm mb-2">Verified Alphas</p>
                        <p className="text-3xl text-[#4ade80]">{stats.verifiedPosts}</p>
                      </div>
                      <CheckCircle2 className="size-8 text-[#4ade80] opacity-50" />
                    </div>
                  </Card>

                  {/* Unverified Alphas */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[#857a8f] text-sm mb-2">Unverified Alphas</p>
                        <p className="text-3xl text-[#f59e0b]">{stats.unverifiedPosts}</p>
                      </div>
                      <XCircle className="size-8 text-[#f59e0b] opacity-50" />
                    </div>
                  </Card>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Feed Distribution */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <p className="text-white">Feed Distribution</p>
                      <Users className="size-5 text-[#ac66fd]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Official Feed</span>
                        <span className="text-white">{stats.officialFeedPosts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Community Feed</span>
                        <span className="text-white">{stats.communityFeedPosts}</span>
                      </div>
                    </div>
                  </Card>

                  {/* Engagement */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <p className="text-white">Total Engagement</p>
                      <TrendingUp className="size-5 text-[#ac66fd]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Total Likes</span>
                        <span className="text-[#4ade80]">{stats.totalLikes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Total Dislikes</span>
                        <span className="text-[#ef4444]">{stats.totalDislikes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Total Engagement</span>
                        <span className="text-[#ac66fd]">{stats.totalEngagement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Avg Engagement</span>
                        <span className="text-[#ac66fd]">{stats.avgEngagement.toFixed(2)}</span>
                      </div>
                    </div>
                  </Card>

                  {/* Recent Activity */}
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <p className="text-white">Recent Activity</p>
                      <Clock className="size-5 text-[#ac66fd]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#857a8f] text-sm">Last 24 Hours</span>
                        <span className="text-white">{stats.recentPosts} posts</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Category Breakdown */}
                <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                  <h3 className="text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="size-5 text-[#ac66fd]" />
                    Category Breakdown
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(stats.categoryStats).map(([category, count]) => (
                      <div key={category} className="space-y-1">
                        <p className="text-[#857a8f] text-sm">{category}</p>
                        <p className="text-2xl text-white">{count}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Most Popular Post */}
                {stats.mostLikedPost && (
                  <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6">
                    <h3 className="text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="size-5 text-[#ac66fd]" />
                      Most Popular Post
                    </h3>
                    <div className="bg-[#160d22] p-4 border border-[#ac66fd]/20">
                      <p className="text-white mb-2">{stats.mostLikedPost.title}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-[#857a8f]">
                          Category: <span className="text-[#ac66fd]">{stats.mostLikedPost.category}</span>
                        </span>
                        <span className="text-[#4ade80]">
                          {stats.mostLikedPost.likes} likes
                        </span>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Last Updated */}
                <p className="text-center text-[#857a8f] text-sm">
                  Last updated: {new Date(stats.lastUpdated).toLocaleString()}
                </p>
              </>
            ) : (
              <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-12">
                <p className="text-center text-[#857a8f]">No statistics available</p>
              </Card>
            )}
          </div>
        )}

        {/* Create Post View */}
        {activeView === 'create' && (
          <div className="space-y-6">
            {/* Main Form Card */}
            <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-[#ac66fd]">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value.slice(0, 100))}
                    placeholder="e.g., Solana Mobile Chapter 2 Pre-orders Open"
                    maxLength={100}
                    className="bg-[#160d22] border-[#ac66fd]/30 text-white placeholder:text-[#857a8f] focus:border-[#ac66fd]"
                    required
                  />
                  <p className="text-xs text-[#857a8f]">
                    {title.length}/100 characters
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-[#ac66fd]">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                    placeholder="Provide more details about this Alpha..."
                    maxLength={500}
                    rows={4}
                    className="bg-[#160d22] border-[#ac66fd]/30 text-white placeholder:text-[#857a8f] focus:border-[#ac66fd] resize-none"
                  />
                  <p className="text-xs text-[#857a8f]">
                    {description.length}/500 characters
                  </p>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-[#ac66fd]">
                    Category
                  </Label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#160d22] border border-[#ac66fd]/30 text-white px-3 py-2 focus:outline-none focus:border-[#ac66fd] transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Source */}
                <div className="space-y-2">
                  <Label htmlFor="source" className="text-[#ac66fd]">
                    Source
                  </Label>
                  <Input
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="e.g., https://twitter.com/solana or Solana Breakpoint Team"
                    className="bg-[#160d22] border-[#ac66fd]/30 text-white placeholder:text-[#857a8f] focus:border-[#ac66fd]"
                  />
                  <p className="text-xs text-[#857a8f]">
                    Default: Solana Breakpoint Team
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !title.trim()}
                  className="w-full bg-[#ac66fd] hover:bg-[#9b55ec] text-[#160d22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="size-4 border-2 border-[#160d22]/30 border-t-[#160d22] rounded-full animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="size-4" />
                      Add Official Alpha Post
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Quick Post Templates */}
            <Card className="bg-[#1f1429] border-[#ac66fd]/20 p-6 md:p-8">
              <h3 className="text-white mb-4">Quick Post Templates</h3>
              <p className="text-[#857a8f] text-sm mb-4">
                Click to fill the form with example data
              </p>
              <div className="space-y-3">
                {quickPosts.map((post, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => fillQuickPost(post)}
                    className="w-full text-left bg-[#160d22] hover:bg-[#241833] border border-[#ac66fd]/20 hover:border-[#ac66fd]/40 p-4 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Plus className="size-4 text-[#ac66fd] mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white mb-1">{post.title}</p>
                        <p className="text-[#857a8f] text-sm truncate">
                          {post.description}
                        </p>
                        <span className="inline-block mt-2 text-xs text-[#ac66fd]">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Info Box */}
            <div className="p-4 bg-[#ac66fd]/10 border border-[#ac66fd]/20 text-[#857a8f] text-sm">
              <p className="mb-2">
                ℹ️ Posts created here will:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Be marked as <span className="text-[#ac66fd]">verified ✓</span></li>
                <li>Appear in the <span className="text-[#ac66fd]">Official Feed</span></li>
                <li>Be visible immediately to all users</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}