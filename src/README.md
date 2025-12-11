# Solana Breakpoint Alpha Scanner

A responsive web application for sharing and discovering Solana Breakpoint alphas. Features dual feeds (Official & Community), category filtering, content moderation, and comprehensive admin analytics.

## Features

### User Features
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🔄 **Dual Feed System** - Switch between Official Feed and Community Alpha Feed
- 🏷️ **Category Filtering** - Filter by All, Announcements, Rumors, DeFi, Jobs & Hiring
- ✅ **Verified Posts** - Official posts are marked with verification badges
- 👍👎 **Engagement** - React to posts with likes/dislikes
- 📝 **User Submissions** - Share your own alphas with source/evidence required
- 🛡️ **Content Moderation** - Automatic blocking of scammy/inappropriate content
- 🎨 **Solana Breakpoint Branding** - Purple theme with welcome modal

### Admin Features
- 📊 **Analytics Dashboard** - Comprehensive stats tracking:
  - Total visits
  - Alphas shared (verified/unverified)
  - Feed distribution
  - Engagement metrics
  - Category breakdown
  - Most popular posts
  - Recent activity (24h)
- ✏️ **Admin Panel** - Easily create official verified posts via UI
- 🔧 **Backend Scripts** - Helper functions for bulk post creation
- 🔄 **Real-time Stats** - Refresh button for latest metrics

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Backend**: Supabase (Edge Functions with Hono)
- **Database**: Supabase KV Store
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/solana-breakpoint-alpha-scanner.git
cd solana-breakpoint-alpha-scanner
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Admin Access

Access the admin panel at:
```
http://localhost:5173/?admin=true
```

Features:
- **Statistics Tab**: View comprehensive analytics
- **Create Post Tab**: Add official verified alphas

## Backend Helper Scripts

Use the helper functions in `/supabase/functions/server/add-alpha.tsx`:

```typescript
// Add a single official post
await addOfficialAlpha({
  title: "Solana Mobile Chapter 2 Pre-orders Open",
  description: "The next generation Solana Saga phone is now available",
  category: "Announcements",
  source: "https://solanamobile.com"
});

// Add multiple posts at once
await addMultipleAlphas([
  { title: "...", category: "Rumors" },
  { title: "...", category: "DeFi" }
]);
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import project in Vercel

3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

4. Deploy!

### Supabase Setup

The app uses Supabase Edge Functions. Make sure your Supabase project has:
- Edge Functions deployed (`/supabase/functions/server/`)
- KV Store enabled (automatically configured)

## API Endpoints

### Posts
- `GET /posts` - Fetch all posts
- `POST /posts` - Create community post (requires source)
- `POST /posts/official` - Create official verified post
- `PUT /posts/:id/verify` - Update verification status
- `PUT /posts/:id/like` - Update likes
- `PUT /posts/:id/dislike` - Update dislikes
- `DELETE /posts/:id` - Delete a post

### Analytics
- `POST /analytics/visit` - Track page visit
- `GET /analytics/stats` - Get comprehensive statistics

## Project Structure

```
├── components/          # React components
│   ├── AlphaFeed.tsx   # Main feed component
│   ├── AlphaForm.tsx   # Submission form
│   ├── PostCard.tsx    # Individual post card
│   ├── Header.tsx      # App header
│   ├── Footer.tsx      # App footer
│   └── ui/             # UI components
├── supabase/
│   └── functions/
│       └── server/     # Backend API
├── admin.tsx           # Admin panel
├── App.tsx             # Main app
└── index.tsx           # Router

```

## Content Moderation

The app automatically blocks posts containing:
- Scam indicators (pump, guaranteed returns, etc.)
- Inappropriate content
- Common spam phrases

See `/components/AlphaForm.tsx` for the full moderation logic.

## Character Limits

- **Title**: 100 characters
- **Description**: 500 characters
- **Source**: Required for community posts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for the Solana community
