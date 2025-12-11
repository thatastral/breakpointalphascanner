import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

interface AlphaPost {
  id: string;
  title: string;
  description: string;
  category: string;
  source: string;
  verified: boolean;
  timestamp: string;
  likes: number;
  dislikes: number;
  feed: 'official' | 'community';
}

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-1c111436/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all posts
app.get("/make-server-1c111436/posts", async (c) => {
  try {
    const posts = await kv.getByPrefix<AlphaPost>("alpha_post:");
    
    // Sort by timestamp descending (newest first)
    const sortedPosts = posts.sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    return c.json({ posts: sortedPosts });
  } catch (error) {
    console.log("Error fetching posts:", error);
    return c.json({ error: "Failed to fetch posts", details: String(error) }, 500);
  }
});

// Create a new post (community submission)
app.post("/make-server-1c111436/posts", async (c) => {
  try {
    const body = await c.req.json();
    const { title, description, category, source } = body;
    
    if (!source || !source.trim()) {
      return c.json({ error: "Source is required" }, 400);
    }
    
    const post: AlphaPost = {
      id: `${Date.now()}_${Math.random().toString(36).substring(7)}`,
      title: title || 'Untitled Alpha',
      description: description || '',
      category: category || 'Announcements',
      source,
      verified: false, // All community posts start unverified
      timestamp: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      feed: 'community'
    };
    
    await kv.set(`alpha_post:${post.id}`, post);
    
    return c.json({ post });
  } catch (error) {
    console.log("Error creating post:", error);
    return c.json({ error: "Failed to create post", details: String(error) }, 500);
  }
});

// Update post verification status
app.put("/make-server-1c111436/posts/:id/verify", async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    const { verified } = body;
    
    const post = await kv.get<AlphaPost>(`alpha_post:${id}`);
    
    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    const updatedPost: AlphaPost = {
      ...post,
      verified: verified === true
    };
    
    await kv.set(`alpha_post:${id}`, updatedPost);
    
    return c.json({ post: updatedPost });
  } catch (error) {
    console.log("Error updating post verification:", error);
    return c.json({ error: "Failed to update post", details: String(error) }, 500);
  }
});

// Update post likes
app.put("/make-server-1c111436/posts/:id/like", async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    const { increment } = body; // true to increment, false to decrement
    
    const post = await kv.get<AlphaPost>(`alpha_post:${id}`);
    
    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    const updatedPost: AlphaPost = {
      ...post,
      likes: post.likes + (increment ? 1 : -1)
    };
    
    await kv.set(`alpha_post:${id}`, updatedPost);
    
    return c.json({ post: updatedPost });
  } catch (error) {
    console.log("Error updating post likes:", error);
    return c.json({ error: "Failed to update likes", details: String(error) }, 500);
  }
});

// Update post dislikes
app.put("/make-server-1c111436/posts/:id/dislike", async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    const { increment } = body; // true to increment, false to decrement
    
    const post = await kv.get<AlphaPost>(`alpha_post:${id}`);
    
    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    const updatedPost: AlphaPost = {
      ...post,
      dislikes: post.dislikes + (increment ? 1 : -1)
    };
    
    await kv.set(`alpha_post:${id}`, updatedPost);
    
    return c.json({ post: updatedPost });
  } catch (error) {
    console.log("Error updating post dislikes:", error);
    return c.json({ error: "Failed to update dislikes", details: String(error) }, 500);
  }
});

// Delete a post
app.delete("/make-server-1c111436/posts/:id", async (c) => {
  try {
    const id = c.req.param('id');
    
    await kv.del(`alpha_post:${id}`);
    
    return c.json({ success: true });
  } catch (error) {
    console.log("Error deleting post:", error);
    return c.json({ error: "Failed to delete post", details: String(error) }, 500);
  }
});

// Create an official verified post (backend only)
app.post("/make-server-1c111436/posts/official", async (c) => {
  try {
    const body = await c.req.json();
    const { title, description, category, source } = body;
    
    if (!title || !title.trim()) {
      return c.json({ error: "Title is required" }, 400);
    }
    
    const post: AlphaPost = {
      id: `${Date.now()}_${Math.random().toString(36).substring(7)}`,
      title: title.trim(),
      description: description?.trim() || '',
      category: category || 'Announcements',
      source: source?.trim() || 'Solana Breakpoint Team',
      verified: true, // Official posts are verified
      timestamp: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      feed: 'official'
    };
    
    await kv.set(`alpha_post:${post.id}`, post);
    
    return c.json({ post, message: "Official post created successfully" });
  } catch (error) {
    console.log("Error creating official post:", error);
    return c.json({ error: "Failed to create official post", details: String(error) }, 500);
  }
});

// Track a page visit
app.post("/make-server-1c111436/analytics/visit", async (c) => {
  try {
    // Get current visit count
    const visitData = await kv.get<{ count: number; lastVisit: string }>("analytics:visits") || { 
      count: 0, 
      lastVisit: new Date().toISOString() 
    };
    
    // Increment visit count
    const updatedData = {
      count: visitData.count + 1,
      lastVisit: new Date().toISOString()
    };
    
    await kv.set("analytics:visits", updatedData);
    
    return c.json({ success: true, visits: updatedData.count });
  } catch (error) {
    console.log("Error tracking visit:", error);
    return c.json({ error: "Failed to track visit", details: String(error) }, 500);
  }
});

// Get analytics stats
app.get("/make-server-1c111436/analytics/stats", async (c) => {
  try {
    // Get all posts
    const posts = await kv.getByPrefix<AlphaPost>("alpha_post:");
    
    // Calculate stats
    const totalPosts = posts.length;
    const verifiedPosts = posts.filter(p => p.verified).length;
    const unverifiedPosts = posts.filter(p => !p.verified).length;
    const officialFeedPosts = posts.filter(p => p.feed === 'official').length;
    const communityFeedPosts = posts.filter(p => p.feed === 'community').length;
    
    // Category breakdown
    const categoryStats = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Total engagement
    const totalLikes = posts.reduce((sum, post) => sum + (post.likes || 0), 0);
    const totalDislikes = posts.reduce((sum, post) => sum + (post.dislikes || 0), 0);
    const totalEngagement = totalLikes + totalDislikes;
    const avgEngagement = totalPosts > 0 ? (totalEngagement / totalPosts).toFixed(1) : '0';
    
    // Get visit count
    const visitData = await kv.get<{ count: number; lastVisit: string }>("analytics:visits");
    const totalVisits = visitData?.count || 0;
    
    // Recent activity (posts in last 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentPosts = posts.filter(p => new Date(p.timestamp) > oneDayAgo).length;
    
    // Most popular post
    const mostLikedPost = posts.reduce((max, post) => 
      (post.likes || 0) > (max.likes || 0) ? post : max
    , posts[0] || null);
    
    return c.json({
      stats: {
        totalVisits,
        totalPosts,
        verifiedPosts,
        unverifiedPosts,
        officialFeedPosts,
        communityFeedPosts,
        totalLikes,
        totalDislikes,
        totalEngagement,
        avgEngagement: parseFloat(avgEngagement),
        recentPosts,
        categoryStats,
        mostLikedPost: mostLikedPost ? {
          title: mostLikedPost.title,
          likes: mostLikedPost.likes,
          category: mostLikedPost.category
        } : null,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    console.log("Error fetching analytics stats:", error);
    return c.json({ error: "Failed to fetch stats", details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);