# ✅ Deployment Checklist

Use this checklist to ensure smooth deployment to GitHub and Vercel.

---

## 📋 Pre-Deployment

### **1. Code Preparation**

- [ ] All files saved and committed locally
- [ ] No console errors in development mode
- [ ] App works correctly on localhost
- [ ] Admin panel accessible at `?admin=true`
- [ ] All components render properly

### **2. Environment Setup**

- [ ] Supabase project created
- [ ] Copied Project URL from Supabase dashboard
- [ ] Copied Anon Key from Supabase dashboard
- [ ] Updated `/utils/supabase/info.tsx` with real values (or using env vars)
- [ ] Created `.env` file with actual values (if using env vars)
- [ ] Added `.env` to `.gitignore`

### **3. Backend Verification**

- [ ] Supabase Edge Function deployed (`supabase functions deploy make-server-1c111436`)
- [ ] Health endpoint working: `/health` returns `{"status":"ok"}`
- [ ] Can create posts via API (tested with cURL or Postman)
- [ ] Database (KV store) accessible

---

## 🚀 GitHub Deployment

### **1. Create Repository**

- [ ] Created new repository on GitHub
- [ ] Repository is public or private (your choice)
- [ ] No files added yet (empty repo)

### **2. Initialize Git**

```bash
# In your project directory
git init
git add .
git commit -m "Initial commit: Solana Breakpoint Alpha Scanner"
```

- [ ] Git initialized
- [ ] All files staged
- [ ] Initial commit created

### **3. Push to GitHub**

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

- [ ] Remote added
- [ ] Code pushed to GitHub
- [ ] Files visible on GitHub

---

## 🌐 Vercel Deployment

### **1. Connect Repository**

- [ ] Logged into [vercel.com](https://vercel.com)
- [ ] Clicked "Add New Project"
- [ ] Selected GitHub repository
- [ ] Authorized Vercel to access repo

### **2. Configure Project**

- [ ] **Framework Preset**: Auto-detected or set to "Vite"
- [ ] **Root Directory**: `.` (default)
- [ ] **Build Command**: `npm run build` or auto-detected
- [ ] **Output Directory**: `dist` or auto-detected
- [ ] **Install Command**: `npm install` or auto-detected

### **3. Environment Variables**

Add these in Vercel dashboard:

- [ ] `VITE_SUPABASE_URL` = `https://YOUR_PROJECT_ID.supabase.co`
- [ ] `VITE_SUPABASE_ANON_KEY` = `eyJhbGci...` (your anon key)

### **4. Deploy**

- [ ] Clicked "Deploy" button
- [ ] Build completed successfully (no errors)
- [ ] Deployment succeeded
- [ ] Got deployment URL: `https://your-app.vercel.app`

---

## 🧪 Post-Deployment Testing

### **1. Frontend Tests**

- [ ] Main app loads: `https://your-app.vercel.app`
- [ ] Admin panel loads: `https://your-app.vercel.app?admin=true`
- [ ] No console errors in browser DevTools
- [ ] All images/assets load correctly
- [ ] Responsive design works (mobile/tablet/desktop)

### **2. Backend Integration**

- [ ] Posts load from database
- [ ] Can create community post (via main app)
- [ ] Can create official post (via admin panel)
- [ ] Like/dislike buttons work
- [ ] Posts persist after page refresh
- [ ] Category filtering works
- [ ] Feed switching works (Official/Community)

### **3. API Endpoint Tests**

Test with cURL or browser:

```bash
# Health check
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/health

# Get all posts
curl https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

- [ ] Health endpoint returns `{"status":"ok"}`
- [ ] Posts endpoint returns array of posts
- [ ] No CORS errors
- [ ] Authorization works

---

## 🎯 Admin Panel Testing

### **1. Access Admin Panel**

- [ ] Navigated to `https://your-app.vercel.app?admin=true`
- [ ] Admin panel UI loads correctly
- [ ] Form is visible and functional

### **2. Create Test Post**

- [ ] Filled in title: "Test Alpha Post"
- [ ] Added description
- [ ] Selected category
- [ ] Added source
- [ ] Clicked "Add Official Alpha Post"
- [ ] Success notification appeared
- [ ] Post created successfully

### **3. Verify Post**

- [ ] Navigated back to main app (`https://your-app.vercel.app`)
- [ ] New post appears in Official Feed
- [ ] Post has verified badge ✓
- [ ] Timestamp is correct
- [ ] Category matches

---

## 🔧 Troubleshooting Common Issues

### **Build Failed on Vercel**

- [ ] Check build logs for errors
- [ ] Verify `package.json` has correct scripts
- [ ] Ensure all dependencies are in `package.json`
- [ ] Check Node version compatibility

### **Environment Variables Not Working**

- [ ] Variables added in Vercel dashboard (Settings → Environment Variables)
- [ ] Variable names start with `VITE_` prefix
- [ ] Redeployed after adding variables
- [ ] No typos in variable names

### **Backend API Not Responding**

- [ ] Edge function deployed to Supabase
- [ ] Function name matches: `make-server-1c111436`
- [ ] Health endpoint tested and working
- [ ] CORS enabled in backend code

### **Posts Not Appearing**

- [ ] Check browser console for errors
- [ ] Verify Supabase credentials in code
- [ ] Test API endpoint directly with cURL
- [ ] Check that KV store has data

---

## 📊 Final Verification

### **Complete User Flow Test**

1. **Main App (User Perspective)**
   - [ ] Load app
   - [ ] See existing posts (if any)
   - [ ] Click floating + button
   - [ ] Fill out community submission form
   - [ ] Submit post
   - [ ] See post appear in Community Feed (unverified)

2. **Admin Panel (Admin Perspective)**
   - [ ] Access admin panel `?admin=true`
   - [ ] Create official post
   - [ ] See success notification
   - [ ] Return to main app
   - [ ] See post in Official Feed (verified ✓)

3. **Engagement Features**
   - [ ] Click like button → count increases
   - [ ] Click dislike button → count increases
   - [ ] Refresh page → counts persist

4. **Filtering & Sorting**
   - [ ] Click category pills → posts filter correctly
   - [ ] Switch between Official/Community feeds
   - [ ] All filters work as expected

---

## 🎉 Launch Checklist

### **Before Going Live**

- [ ] All features tested and working
- [ ] No critical bugs
- [ ] Admin panel accessible only to you (bookmark URL)
- [ ] Sample official posts created
- [ ] Welcome modal appears for new users
- [ ] Content moderation working (test scam keywords)
- [ ] Mobile responsive confirmed

### **Share With Users**

- [ ] Main app URL: `https://your-app.vercel.app`
- [ ] Admin panel URL (keep private): `https://your-app.vercel.app?admin=true`
- [ ] Social media posts prepared
- [ ] Instructions shared with team

---

## 📚 Documentation

- [ ] README.md reviewed and accurate
- [ ] DEPLOYMENT_GUIDE.md available for team
- [ ] QUICK_START.md bookmarked for quick reference
- [ ] Environment variables documented

---

## 🔄 Continuous Deployment

### **Future Updates**

When you make changes:

```bash
# 1. Make changes locally
# 2. Test on localhost
# 3. Commit changes
git add .
git commit -m "Description of changes"
git push

# 4. Vercel automatically redeploys (if configured)
# 5. Or manually trigger deployment in Vercel dashboard
```

- [ ] Automatic deployments enabled in Vercel
- [ ] Test on staging before production (if applicable)
- [ ] Monitor deployment logs

---

## 📞 Support Resources

**If you encounter issues:**

1. **Vercel Docs**: https://vercel.com/docs
2. **Supabase Docs**: https://supabase.com/docs
3. **Check Logs**:
   - Vercel: Project → Deployments → Click deployment → View logs
   - Supabase: Dashboard → Edge Functions → Logs

---

## ✅ Final Sign-Off

- [ ] **All tests passed**
- [ ] **No critical errors**
- [ ] **App is live and accessible**
- [ ] **Admin panel working**
- [ ] **Backend connected**
- [ ] **Ready for users**

---

**🎊 Congratulations! Your Solana Breakpoint Alpha Scanner is live!** 🚀

**App URL**: `https://your-app.vercel.app`

**Admin Panel**: `https://your-app.vercel.app?admin=true`

**Next Steps**:
- Share with your community
- Start adding official Alpha posts
- Monitor engagement
- Iterate based on feedback

---

**Date Deployed**: _______________

**Deployed By**: _______________

**Live URL**: _______________
