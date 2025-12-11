# 🚀 Complete Step-by-Step Guide

## 📌 What You Have

A **Solana Breakpoint Alpha Scanner** with:
- ✅ Full frontend (React app)
- ✅ Full backend (Supabase Edge Functions)
- ✅ Database (Key-Value store)
- ✅ Admin panel for adding official posts
- ✅ Community submissions
- ✅ Like/dislike system
- ✅ Content moderation

---

## Part 1: How to Add Posts RIGHT NOW

### **🎯 Easiest Method: Admin Panel**

**Step 1:** Add `?admin=true` to your URL
```
Current URL: https://your-app.com
Admin URL:   https://your-app.com?admin=true
```

**Step 2:** Fill out the form
- Title: "Solana Mobile Chapter 2 Pre-orders Open"
- Description: "Next gen phone at $450"
- Category: "Announcements"
- Source: "https://solanamobile.com"

**Step 3:** Click "Add Official Alpha Post"

**Done!** Post is live with verified badge ✓

---

## Part 2: Deploy to GitHub + Vercel

### **Step 1: Push to GitHub**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Solana Alpha Scanner"

# Create repo on GitHub (do this first at github.com)
# Then connect and push:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Checklist:**
- [ ] Code is on GitHub
- [ ] All files visible
- [ ] No errors

---

### **Step 2: Deploy Frontend to Vercel**

1. **Go to [vercel.com](https://vercel.com)**

2. **Click "Add New Project"**

3. **Select your GitHub repo**

4. **Configure settings:**
   - Framework: Vite (or auto-detect)
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Add Environment Variables:**
   
   Click "Environment Variables" and add:
   
   ```
   Name:  VITE_SUPABASE_URL
   Value: https://YOUR_PROJECT_ID.supabase.co
   
   Name:  VITE_SUPABASE_ANON_KEY  
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

6. **Click "Deploy"**

7. **Wait for build to complete**

8. **Get your URL:** `https://your-app.vercel.app`

**Checklist:**
- [ ] Build succeeded
- [ ] App loads at Vercel URL
- [ ] No errors in browser console

---

### **Step 3: Deploy Backend to Supabase**

The backend CANNOT go on Vercel. It must stay on Supabase.

```bash
# Install Supabase CLI (one time only)
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_ID

# Deploy the edge function
supabase functions deploy make-server-1c111436
```

**Verify it works:**
```bash
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health

# Should return: {"status":"ok"}
```

**Checklist:**
- [ ] Function deployed
- [ ] Health check passes
- [ ] No deployment errors

---

### **Step 4: Test Everything**

1. **Open your Vercel app:**
   ```
   https://your-app.vercel.app
   ```

2. **Check posts load:**
   - If you have existing posts, they should appear
   - If not, it should show "No posts yet"

3. **Try community submission:**
   - Click floating + button
   - Fill out form
   - Submit
   - Post appears in Community Feed

4. **Try admin panel:**
   ```
   https://your-app.vercel.app?admin=true
   ```
   - Form loads
   - Fill it out
   - Submit
   - Post appears in Official Feed with ✓

**Checklist:**
- [ ] Main app works
- [ ] Admin panel works
- [ ] Posts persist
- [ ] No errors

---

## Part 3: Using Your App

### **For Regular Users**

**URL:** `https://your-app.vercel.app`

**They can:**
- View all Alpha posts
- Filter by category (All, Announcements, Rumors, DeFi, Jobs)
- Switch between Official and Community feeds
- Like/dislike posts
- Submit their own Alpha (community feed, unverified)

---

### **For You (Admin)**

**URL:** `https://your-app.vercel.app?admin=true`

**You can:**
- Add official verified posts
- Use quick templates
- Posts instantly appear in Official Feed
- All posts get verified badge ✓

**🔖 Bookmark this URL for quick access!**

---

## Part 4: Common Tasks

### **Task: Add a New Official Post**

```
1. Go to: https://your-app.vercel.app?admin=true
2. Fill in title (required)
3. Fill in description (optional)
4. Select category
5. Add source
6. Click submit
7. See success notification
```

---

### **Task: Add Multiple Posts via API**

```bash
# Post 1
curl -X POST \
  "https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts/official" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{"title":"Post 1","category":"Announcements"}'

# Post 2
curl -X POST \
  "https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts/official" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{"title":"Post 2","category":"DeFi"}'
```

---

### **Task: Check What Posts Exist**

```bash
curl https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

Returns JSON array of all posts.

---

### **Task: Delete a Post**

```bash
curl -X DELETE \
  "https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts/POST_ID" \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

---

## Part 5: Where to Find Your Credentials

### **Supabase Project URL and Keys**

1. Go to [supabase.com](https://supabase.com)
2. Click on your project
3. Go to **Settings** → **API**
4. Copy:

**Project URL:**
```
https://YOUR_PROJECT_ID.supabase.co
```

**anon/public key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ Use the **anon key**, NOT the service_role_key!

---

## Part 6: Update Your Code with Real Values

### **Option 1: Hardcode (Quick)**

Edit `/utils/supabase/info.tsx`:

```typescript
export const projectId = 'abcdefghijklmnop'; // Your real project ID
export const publicAnonKey = 'eyJhbGci...';   // Your real anon key
```

### **Option 2: Environment Variables (Recommended)**

Create `.env` file:
```
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

Update `/utils/supabase/info.tsx`:
```typescript
export const projectId = import.meta.env.VITE_SUPABASE_URL?.split('//')[1]?.split('.')[0] || '';
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
```

Add to Vercel dashboard: Settings → Environment Variables

---

## Part 7: Troubleshooting

### **Problem: "Failed to fetch posts"**

**Possible causes:**
- Backend not deployed
- Wrong Supabase credentials
- CORS error

**Solutions:**
1. Test backend health: `curl https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health`
2. Check browser console for exact error
3. Verify environment variables in Vercel
4. Redeploy backend: `supabase functions deploy make-server-1c111436`

---

### **Problem: Admin panel not loading**

**Solutions:**
- Make sure URL has `?admin=true` or `#admin`
- Clear browser cache
- Check if `/admin.tsx` and `/index.tsx` exist
- Check browser console for errors

---

### **Problem: Posts not persisting**

**Solutions:**
- Verify backend is deployed
- Check Supabase dashboard → Table Editor → kv_store_1c111436
- Test API endpoint directly with cURL
- Check backend logs: `supabase functions logs make-server-1c111436`

---

### **Problem: Build fails on Vercel**

**Solutions:**
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Make sure environment variables are set
- Try local build: `npm run build`

---

## Part 8: API Reference

### **All Endpoints**

Base URL: `https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/posts` | Get all posts |
| POST | `/posts` | Create community post |
| **POST** | **`/posts/official`** | **Create official verified post** ⭐ |
| PUT | `/posts/:id/verify` | Update verification |
| PUT | `/posts/:id/like` | Update likes |
| PUT | `/posts/:id/dislike` | Update dislikes |
| DELETE | `/posts/:id` | Delete post |

### **Headers Required**

```
Content-Type: application/json
Authorization: Bearer YOUR_ANON_KEY
```

---

## Part 9: File Structure

```
your-project/
├── App.tsx                 # Main application
├── admin.tsx              # Admin panel ⭐
├── index.tsx              # Router
├── components/            # UI components
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx       # API routes ⭐
│           ├── add-alpha.tsx   # Helper functions
│           └── kv_store.tsx    # DB utilities
├── utils/
│   └── supabase/
│       └── info.tsx       # Config ⭐
├── README.md              # Project overview
├── DEPLOYMENT_GUIDE.md    # Full deployment guide
├── HOW_TO_ADD_POSTS.md   # Visual guide
└── QUICK_START.md         # Quick reference
```

**⭐ = Files you might need to edit**

---

## Part 10: Quick Reference

### **URLs You Need**

| Purpose | URL |
|---------|-----|
| **Main App** | `https://your-app.vercel.app` |
| **Admin Panel** | `https://your-app.vercel.app?admin=true` |
| **Backend API** | `https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436` |
| **Supabase Dashboard** | `https://supabase.com/dashboard/project/PROJECT_ID` |
| **Vercel Dashboard** | `https://vercel.com/your-username/your-project` |

### **Commands You Need**

```bash
# Deploy backend
supabase functions deploy make-server-1c111436

# Test health
curl https://PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health

# View backend logs
supabase functions logs make-server-1c111436

# Push to GitHub
git add .
git commit -m "Update"
git push

# Local development
npm run dev
```

---

## 🎉 You're All Set!

You now know:
- ✅ How to add official Alpha posts (admin panel)
- ✅ How to deploy to GitHub
- ✅ How to deploy to Vercel + Supabase
- ✅ How to troubleshoot common issues
- ✅ How to use the API
- ✅ Where everything is

---

## 📚 Next Steps

1. **Deploy your app** using Part 2
2. **Test everything** using Part 4
3. **Bookmark admin panel** for quick access
4. **Add your first official post**
5. **Share with your community**

---

## 🆘 Need More Help?

**Documentation:**
- [README.md](./README.md) - Project overview
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detailed deployment
- [HOW_TO_ADD_POSTS.md](./HOW_TO_ADD_POSTS.md) - Visual guide
- [QUICK_START.md](./QUICK_START.md) - Quick reference
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details

**External Resources:**
- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs

---

**🚀 Happy deploying!**
