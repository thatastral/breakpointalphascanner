# ⚡ Quick Start Guide - Add Official Alpha Posts

## 🎯 3 Simple Steps

### **Step 1: Access Admin Panel**

Add `?admin=true` to your URL:

```
https://your-app.vercel.app?admin=true
```

or use the hash:

```
https://your-app.vercel.app#admin
```

---

### **Step 2: Fill Out the Form**

| Field | Required? | Max Length | Example |
|-------|-----------|------------|---------|
| **Title** | ✅ Yes | 100 chars | "Solana Mobile Chapter 2 Pre-orders Open" |
| **Description** | ❌ No | 500 chars | "Next gen Saga phone available at $450..." |
| **Category** | ✅ Yes | - | Announcements, Rumors, DeFi, Jobs & Hiring |
| **Source** | ❌ No | - | "https://solanamobile.com" |

---

### **Step 3: Submit**

Click **"Add Official Alpha Post"** button.

✅ **Done!** Your post is now live with:
- Verified badge ✓
- Appears in Official Feed
- Visible to all users immediately

---

## 🚀 Or Use the API

### **Quick Copy-Paste Template**

Replace `YOUR_PROJECT_ID` and `YOUR_ANON_KEY`:

```bash
curl -X POST \
  "https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-1c111436/posts/official" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "title": "YOUR_TITLE_HERE",
    "description": "YOUR_DESCRIPTION_HERE",
    "category": "Announcements",
    "source": "YOUR_SOURCE_URL"
  }'
```

### **Categories**
Choose one:
- `Announcements`
- `Rumors`
- `DeFi`
- `Jobs & Hiring`

---

## 📍 Where to Find Your Credentials

1. Go to [supabase.com](https://supabase.com)
2. Select your project
3. Click **Settings** → **API**
4. Copy:
   - **Project URL**: `https://YOUR_PROJECT_ID.supabase.co`
   - **anon key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## 💡 Pro Tips

✨ **Use Quick Templates** - Click any template in the admin panel to auto-fill the form

🔖 **Bookmark the Admin URL** - Save `?admin=true` URL for instant access

📱 **Works on Mobile** - Admin panel is fully responsive

⚡ **Instant Updates** - Posts appear in real-time, no refresh needed

---

## 🆘 Quick Troubleshooting

**Admin panel won't load?**
→ Make sure you typed `?admin=true` correctly in the URL

**Can't submit post?**
→ Title is required - add a title and try again

**Post not appearing?**
→ Check browser console (F12) for error messages

**API request failing?**
→ Verify your `Authorization` header includes `Bearer` prefix

---

## 📖 Need More Help?

See the full guides:
- **[README.md](./README.md)** - Project overview
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment steps

---

**That's it! You're ready to add Alpha posts** 🎉
