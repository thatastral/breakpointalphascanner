# 🏗️ Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER'S BROWSER                          │
└────────────┬───────────────────────────────────┬────────────────┘
             │                                   │
             │                                   │
    ┌────────▼────────┐                 ┌────────▼────────┐
    │   Main App      │                 │  Admin Panel    │
    │   (/)           │                 │  (?admin=true)  │
    │                 │                 │                 │
    │ - View Posts    │                 │ - Add Official  │
    │ - Submit Alpha  │                 │   Posts         │
    │ - Like/Dislike  │                 │ - Verified ✓    │
    │ - Filter/Sort   │                 │ - Templates     │
    └────────┬────────┘                 └────────┬────────┘
             │                                   │
             │                                   │
             └───────────┬───────────────────────┘
                         │
                         │ API Requests
                         │
            ┌────────────▼────────────┐
            │                         │
            │  VERCEL (Frontend Host) │
            │  Static React App       │
            │                         │
            └────────────┬────────────┘
                         │
                         │ Fetch API
                         │
            ┌────────────▼────────────────────────────────┐
            │                                             │
            │  SUPABASE (Backend)                         │
            │                                             │
            │  ┌─────────────────────────────────────┐   │
            │  │  Edge Function                      │   │
            │  │  /make-server-1c111436              │   │
            │  │                                     │   │
            │  │  Routes:                            │   │
            │  │  - GET    /posts                    │   │
            │  │  - POST   /posts (community)        │   │
            │  │  - POST   /posts/official ✨        │   │
            │  │  - PUT    /posts/:id/verify         │   │
            │  │  - PUT    /posts/:id/like           │   │
            │  │  - PUT    /posts/:id/dislike        │   │
            │  │  - DELETE /posts/:id                │   │
            │  └──────────────┬──────────────────────┘   │
            │                 │                           │
            │                 │ Read/Write                │
            │                 │                           │
            │  ┌──────────────▼──────────────────────┐   │
            │  │  Key-Value Store (Database)         │   │
            │  │                                     │   │
            │  │  Table: kv_store_1c111436          │   │
            │  │  Stores: All Alpha posts            │   │
            │  │  Prefix: alpha_post:                │   │
            │  └─────────────────────────────────────┘   │
            │                                             │
            └─────────────────────────────────────────────┘
```

---

## Data Flow

### **1. User Views Posts (Main App)**

```
User → Main App → GET /posts → Supabase Edge Function
                                      ↓
                                 KV Database
                                      ↓
                           Returns all posts sorted
                                      ↓
                                Display in feed
```

### **2. User Submits Community Post**

```
User → Fill Form → Submit
         ↓
    POST /posts
         ↓
    Supabase Edge Function
         ↓
    Validates content (moderation)
         ↓
    Creates post with:
    - verified: false
    - feed: 'community'
         ↓
    Saves to KV Database
         ↓
    Returns new post → Updates UI
```

### **3. Admin Adds Official Post**

```
Admin → Admin Panel (?admin=true) → Fill Form
         ↓
    POST /posts/official ✨
         ↓
    Supabase Edge Function
         ↓
    Creates post with:
    - verified: true ✓
    - feed: 'official'
         ↓
    Saves to KV Database
         ↓
    Returns new post → Success notification
```

### **4. User Likes a Post**

```
User → Click Like Button
         ↓
    PUT /posts/:id/like
         ↓
    Supabase Edge Function
         ↓
    Get post from database
         ↓
    Increment like count
         ↓
    Save updated post
         ↓
    Returns updated post → Updates UI
```

---

## Post Structure

```typescript
interface AlphaPost {
  id: string;              // Unique: timestamp_randomstring
  title: string;           // Max 100 chars
  description: string;     // Max 500 chars
  category: string;        // Announcements | Rumors | DeFi | Jobs & Hiring
  source: string;          // URL or attribution
  verified: boolean;       // true = official, false = community
  timestamp: string;       // ISO 8601 format
  likes: number;           // Engagement metric
  dislikes: number;        // Engagement metric
  feed: 'official' | 'community';  // Which feed to display in
}
```

---

## API Authentication

All API requests require:

```typescript
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
}
```

The `anon key` is:
- ✅ Safe to expose in frontend code
- ✅ Used for read/write operations
- ❌ Not for admin operations (would need service_role_key)

---

## Deployment Strategy

### **Frontend (Vercel)**

**Why Vercel?**
- ✅ Automatic deployments from GitHub
- ✅ Great for React/Next.js apps
- ✅ Edge network (fast global access)
- ✅ Free tier available

**Files deployed:**
- All React components
- Static assets
- Client-side routing

### **Backend (Supabase)**

**Why Supabase?**
- ✅ Built-in database (KV store)
- ✅ Edge Functions (serverless API)
- ✅ Authentication ready
- ✅ Real-time capabilities
- ✅ Free tier available

**Files deployed:**
- `/supabase/functions/server/index.tsx` (API routes)
- Edge Function configuration

---

## Content Moderation

Built-in filtering for:

```typescript
const scamKeywords = [
  'airdrop', 'free tokens', 'doubling',
  'guaranteed profit', 'click here to claim',
  'limited time offer', 'send me', 'dm me'
];

const inappropriateKeywords = [
  // ... offensive language ...
];

const phishingPatterns = [
  'verify your wallet', 'confirm your seed phrase',
  'urgent: your account'
];
```

If detected → User sees error modal → Post not created

---

## Scalability Considerations

**Current Setup (MVP):**
- Single Supabase project
- Key-Value store (simple, fast)
- No pagination (loads all posts)

**For Production:**
- Add pagination (limit posts per request)
- Add caching layer (Redis)
- Implement full-text search
- Add rate limiting
- Move to dedicated database tables

**When to upgrade:**
- More than 1,000 posts
- High traffic (>1000 req/min)
- Need advanced querying

---

## Security Features

✅ **Frontend:**
- Input validation (max lengths)
- XSS prevention (React escaping)
- Content moderation

✅ **Backend:**
- CORS enabled for web access
- Request logging
- Error handling
- Anon key (limited permissions)

❌ **Not Implemented (Would Need):**
- User authentication
- Admin roles/permissions
- Rate limiting
- IP blocking
- Advanced spam detection

---

## Environment Variables Flow

```
Development (Local):
  .env → App reads → Connects to Supabase

Production (Vercel):
  Vercel Dashboard → Environment Variables
         ↓
  Build time → Injected into app
         ↓
  App reads → Connects to Supabase
```

**Required Variables:**
```bash
VITE_SUPABASE_URL=https://PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

---

## Request/Response Examples

### **Create Official Post**

**Request:**
```bash
POST /posts/official
Content-Type: application/json
Authorization: Bearer {anon_key}

{
  "title": "Solana Mobile Chapter 2 Launch",
  "description": "Pre-orders now open at $450",
  "category": "Announcements",
  "source": "https://solanamobile.com"
}
```

**Response:**
```json
{
  "post": {
    "id": "1702234567890_abc123",
    "title": "Solana Mobile Chapter 2 Launch",
    "description": "Pre-orders now open at $450",
    "category": "Announcements",
    "source": "https://solanamobile.com",
    "verified": true,
    "timestamp": "2025-12-11T10:30:00.000Z",
    "likes": 0,
    "dislikes": 0,
    "feed": "official"
  },
  "message": "Official post created successfully"
}
```

---

## Monitoring & Debugging

**Frontend (Browser Console):**
```javascript
// Check API calls
console.log('Fetching posts...');
console.error('Error creating post:', error);
```

**Backend (Supabase Logs):**
```bash
# View logs
supabase functions logs make-server-1c111436

# Live tail
supabase functions logs make-server-1c111436 --tail
```

**Health Check:**
```bash
curl https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health

# Should return: {"status":"ok"}
```

---

## Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | React + TypeScript | UI components |
| **Styling** | Tailwind CSS | Responsive design |
| **Icons** | Lucide React | UI icons |
| **Notifications** | Sonner | Toast messages |
| **Frontend Host** | Vercel | Static site hosting |
| **Backend Framework** | Hono | API routing |
| **Backend Runtime** | Deno (Supabase Edge Functions) | Serverless functions |
| **Database** | Supabase KV Store | Data persistence |
| **API Protocol** | REST (JSON) | Client-server communication |

---

## Future Enhancements

**Potential Features:**
- 🔐 User authentication (login/signup)
- 👤 User profiles & avatars
- 💬 Comments on posts
- 📊 Analytics dashboard
- 🔔 Real-time notifications
- 🔍 Full-text search
- 📱 Mobile app (React Native)
- 🤖 AI content moderation
- 📈 Trending algorithm
- 🏷️ User-created tags

---

## Performance Metrics

**Target Benchmarks:**
- API response time: < 200ms
- Page load time: < 2s
- Time to interactive: < 3s
- Database query time: < 50ms

**Monitoring Tools:**
- Vercel Analytics (frontend)
- Supabase Dashboard (backend)
- Browser DevTools (network tab)

---

**This architecture is designed for rapid prototyping and MVP deployment.** 🚀
