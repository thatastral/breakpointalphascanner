/**
 * Helper script to easily add official Alpha posts from the backend
 * 
 * Usage examples:
 * 
 * 1. Add a simple announcement:
 *    await addOfficialAlpha({
 *      title: "Breakpoint 2025 Dates Announced",
 *      description: "Join us in Singapore for the biggest Solana event of the year!",
 *      category: "Announcements"
 *    });
 * 
 * 2. Add a DeFi alpha with source:
 *    await addOfficialAlpha({
 *      title: "New Jupiter Aggregator V3 Launch",
 *      description: "Lower fees and better routing coming to Jupiter next week",
 *      category: "DeFi",
 *      source: "https://twitter.com/JupiterExchange"
 *    });
 * 
 * 3. Add multiple posts at once:
 *    await addMultipleAlphas([
 *      { title: "...", category: "Rumors" },
 *      { title: "...", category: "Jobs & Hiring" }
 *    ]);
 */

import * as kv from "./kv_store.tsx";

interface AlphaPostInput {
  title: string;
  description?: string;
  category?: 'Announcements' | 'Rumors' | 'DeFi' | 'Jobs & Hiring' | string;
  source?: string;
}

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

/**
 * Add a single official Alpha post
 */
export async function addOfficialAlpha(input: AlphaPostInput): Promise<AlphaPost> {
  if (!input.title || !input.title.trim()) {
    throw new Error("Title is required");
  }

  const post: AlphaPost = {
    id: `${Date.now()}_${Math.random().toString(36).substring(7)}`,
    title: input.title.trim(),
    description: input.description?.trim() || '',
    category: input.category || 'Announcements',
    source: input.source?.trim() || 'Solana Breakpoint Team',
    verified: true,
    timestamp: new Date().toISOString(),
    likes: 0,
    dislikes: 0,
    feed: 'official'
  };

  await kv.set(`alpha_post:${post.id}`, post);
  
  console.log(`✅ Official Alpha added: "${post.title}" (ID: ${post.id})`);
  
  return post;
}

/**
 * Add multiple official Alpha posts at once
 */
export async function addMultipleAlphas(inputs: AlphaPostInput[]): Promise<AlphaPost[]> {
  const posts: AlphaPost[] = [];
  
  for (const input of inputs) {
    const post = await addOfficialAlpha(input);
    posts.push(post);
  }
  
  console.log(`✅ Added ${posts.length} official Alpha posts`);
  
  return posts;
}

/**
 * Get all posts (for debugging)
 */
export async function getAllPosts(): Promise<AlphaPost[]> {
  const posts = await kv.getByPrefix<AlphaPost>("alpha_post:");
  return posts.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
}

/**
 * Delete a post by ID
 */
export async function deletePost(id: string): Promise<void> {
  await kv.del(`alpha_post:${id}`);
  console.log(`🗑️  Deleted post: ${id}`);
}

// Example usage (uncomment to test):
/*
// Add a single post
await addOfficialAlpha({
  title: "Solana Mobile Chapter 2 Pre-orders Open",
  description: "The next generation Solana Saga phone is now available for pre-order at $450",
  category: "Announcements",
  source: "https://solanamobile.com"
});

// Add multiple posts
await addMultipleAlphas([
  {
    title: "Jito Airdrop Season 2 Rumors",
    description: "Community speculation about potential second airdrop for MEV stakers",
    category: "Rumors"
  },
  {
    title: "Marinade Finance Hiring Rust Developers",
    description: "Remote positions available for experienced Solana developers",
    category: "Jobs & Hiring",
    source: "https://jobs.marinade.finance"
  }
]);
*/
