# 🚀 Solana Breakpoint Alpha Scanner - Deployment Guide

## 📋 Table of Contents
1. [How to Add Official Alpha Posts](#how-to-add-official-alpha-posts)
2. [GitHub & Vercel Deployment](#github--vercel-deployment)
3. [Important Environment Variables](#important-environment-variables)

---

## 🎯 How to Add Official Alpha Posts

You have **3 methods** to add verified, official Alpha posts that appear in the Official Feed:

### **Method 1: Admin Panel (Recommended)** ⭐

The easiest way to add posts through a web interface.

**Steps:**

1. **Access the Admin Panel:**
   - Add `?admin=true` or `#admin` to your URL
   - Example: `https://your-app.vercel.app?admin=true`
   - Or: `https://your-app.vercel.app#admin`

2. **Fill out the form:**
   - **Title** (required, max 100 chars): The main headline
   - **Description** (optional, max 500 chars): Additional details
   - **Category**: Choose from Announcements, Rumors, DeFi, Jobs & Hiring
   - **Source**: URL or attribution (defaults to "Solana Breakpoint Team")

3. **Click "Add Official Alpha Post"**
   - Post is instantly created as verified ✓
   - Appears immediately in the Official Feed
   - Success notification confirms creation

4. **Quick Templates:**
   - Click any template to auto-fill the form with example data
   - Customize and submit

---

### **Method 2: API Endpoint (cURL/Postman)**

Make direct API calls to create posts programmatically.

**Endpoint:**
```
POST https://{PROJECT_ID}.supabase.co/functions/v1/make-server-1c111436/posts/official
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {SUPABASE_ANON_KEY}
```

**Request Body:**
```json
{
  "title": "Solana Mobile Chapter 2 Pre-orders Open",
  "description": "The next generation Solana Saga phone is now available for pre-order at $450",
  "category": "Announcements",
  "source": "https://solanamobile.com"
}
```

**Example with cURL:**
```bash
curl -X POST "https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts/official" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "title": "Jito Airdrop Season 2 Announcement",
    "description": "Official confirmation of second airdrop for MEV stakers",
    "category": "DeFi",
    "source": "https://twitter.com/jito_sol"
  }'
```

**Example with JavaScript/fetch:**
```javascript
const response = await fetch(
  `https://${PROJECT_ID}.supabase.co/functions/v1/make-server-1c111436/posts/official`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ANON_KEY}`
    },
    body: JSON.stringify({
      title: "Marinade Finance Hiring Rust Developers",
      description: "Remote positions available for experienced Solana developers",
      category: "Jobs & Hiring",
      source: "https://jobs.marinade.finance"
    })
  }
);

const data = await response.json();
console.log('Post created:', data.post);
```

**Response:**
```json
{
  "post": {
    "id": "1702234567890_abc123",
    "title": "Solana Mobile Chapter 2 Pre-orders Open",
    "description": "The next generation Solana Saga phone...",
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

### **Method 3: Backend Helper Functions**

Use the helper script for batch operations or automation.

**File:** `/supabase/functions/server/add-alpha.tsx`

**Single Post:**
```typescript
import { addOfficialAlpha } from './add-alpha.tsx';

await addOfficialAlpha({
  title: "Solana Mobile Chapter 2 Pre-orders Open",
  description: "Next generation Saga phone available at $450",
  category: "Announcements",
  source: "https://solanamobile.com"
});
```

**Multiple Posts:**
```typescript
import { addMultipleAlphas } from './add-alpha.tsx';

await addMultipleAlphas([
  {
    title: "Jito Airdrop Season 2 Rumors",
    description: "Community speculation about potential second airdrop",
    category: "Rumors"
  },
  {
    title: "Marinade Finance Hiring Rust Developers",
    description: "Remote positions available",
    category: "Jobs & Hiring",
    source: "https://jobs.marinade.finance"
  }
]);
```

**Other Helper Functions:**
```typescript
// Get all posts
const posts = await getAllPosts();

// Delete a post
await deletePost("post_id_here");
```

---

## 🚀 GitHub & Vercel Deployment

### **Architecture Overview**

Your app has a **split architecture**:
- **Frontend**: React app → Deploy to **Vercel**
- **Backend**: Supabase Edge Functions → Deploy to **Supabase**

```
┌─────────────────┐      ┌─────────────────────┐
│  Vercel         │      │  Supabase           │
│  (Frontend)     │─────▶│  (Backend)          │
│  React App      │ API  │  Edge Functions     │
└─────────────────┘      │  Database (KV)      │
                         └─────────────────────┘
```

---

### **Step 1: Push to GitHub**

1. **Create a new GitHub repository**
   ```bash
   # In your project directory
   git init
   git add .
   git commit -m "Initial commit: Solana Breakpoint Alpha Scanner"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/solana-alpha-scanner.git
   git push -u origin main
   ```

2. **Files to include:**
   - All frontend files (App.tsx, components, etc.)
   - Backend files (/supabase/functions/server/)
   - Configuration files

3. **Create a `.gitignore` file:**
   ```
   node_modules/
   .env
   .env.local
   .DS_Store
   dist/
   build/
   *.log
   ```

---

### **Step 2: Deploy Frontend to Vercel**

1. **Go to [vercel.com](https://vercel.com)**

2. **Import your GitHub repository:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings:**
   - **Framework Preset**: Vite (or React, depending on your setup)
   - **Build Command**: `npm run build` or `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   ```
   VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```
   
   ⚠️ **Important:** Replace with your actual Supabase values!

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-app.vercel.app`

---

### **Step 3: Deploy Backend to Supabase**

The backend **cannot** be deployed to Vercel. It must run on Supabase Edge Functions.

1. **Install Supabase CLI:**
   ```bash
   npm install -g supabase
   ```

2. **Login to Supabase:**
   ```bash
   supabase login
   ```

3. **Link your project:**
   ```bash
   supabase link --project-ref YOUR_PROJECT_ID
   ```

4. **Deploy Edge Functions:**
   ```bash
   supabase functions deploy make-server-1c111436
   ```

5. **Verify deployment:**
   ```bash
   # Test health endpoint
   curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health
   
   # Should return: {"status":"ok"}
   ```

---

### **Step 4: Update Frontend Environment Variables**

After backend deployment, ensure your Vercel frontend has the correct environment variables:

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables

2. **Verify these are set:**
   ```
   VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. **Redeploy if needed:**
   - Go to Deployments tab
   - Click "Redeploy" on latest deployment

---

## 🔑 Important Environment Variables

### **Where to find your Supabase credentials:**

1. **Go to [supabase.com](https://supabase.com)**
2. **Select your project**
3. **Go to Settings → API**
4. **Copy:**
   - **Project URL**: `https://YOUR_PROJECT_ID.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### **Update `/utils/supabase/info.tsx`:**

If not using environment variables, you can hardcode them:

```typescript
export const projectId = 'YOUR_PROJECT_ID';
export const publicAnonKey = 'YOUR_ANON_KEY';
```

⚠️ **Security Note:** The `anon key` is safe to expose in frontend code. Do NOT expose the `service_role_key`.

---

## 🎯 Quick Reference

### **URLs after deployment:**

| Resource | URL |
|----------|-----|
| **Main App** | `https://your-app.vercel.app` |
| **Admin Panel** | `https://your-app.vercel.app?admin=true` |
| **Backend API** | `https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436` |
| **Health Check** | `https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health` |

### **API Endpoints:**

| Method | Endpoint | Purpose |
|--------|----------|---------|
| **GET** | `/posts` | Get all posts |
| **POST** | `/posts` | Create community post (unverified) |
| **POST** | `/posts/official` | Create official post (verified) ✨ |
| **PUT** | `/posts/:id/verify` | Update verification status |
| **PUT** | `/posts/:id/like` | Update likes |
| **PUT** | `/posts/:id/dislike` | Update dislikes |
| **DELETE** | `/posts/:id` | Delete post |

---

## 🐛 Troubleshooting

### **Issue: "Failed to fetch posts"**
- Check that environment variables are set in Vercel
- Verify Supabase Edge Function is deployed
- Test backend health endpoint

### **Issue: "Unauthorized" errors**
- Ensure `Authorization: Bearer ${publicAnonKey}` header is set
- Verify anon key is correct in environment variables

### **Issue: Admin panel not accessible**
- Make sure you're using `?admin=true` or `#admin` in URL
- Check that `/admin.tsx` and `/index.tsx` are deployed

### **Issue: Posts not appearing**
- Check browser console for errors
- Verify API URL in code matches your Supabase project
- Test backend endpoint directly with cURL

---

## 🎉 You're Ready!

You now have:
- ✅ A fully deployed frontend on Vercel
- ✅ A working backend on Supabase
- ✅ Three ways to add official Alpha posts
- ✅ Real-time updates and persistence

**Next steps:**
- Share the admin panel URL with your team
- Start adding official Breakpoint content
- Monitor posts via the main app

**Need help?** Check the console logs or test the health endpoint first!
