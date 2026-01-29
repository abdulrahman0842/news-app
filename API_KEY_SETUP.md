# NewsAPI Integration Setup Guide

## Step 1: Get Your Free API Key

1. Visit: **https://newsapi.org/register**
2. Click "Get API Key" button
3. Sign up with email (free tier available - no credit card needed)
4. Copy your API key from the dashboard
5. Send the API key to me, or follow Step 2 to add it yourself

## Step 2: Update the API Key in the App

Once you have your API key:

1. Open this file: `src/services/newsAPI.js`
2. Find this line (around line 3):
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```
3. Replace `'your-api-key-here'` with your actual API key from NewsAPI.org
4. Save the file
5. The app will automatically refresh and start fetching real news articles

## Example:
```javascript
// Before:
const API_KEY = 'a8d0be5e6be0420caf5e34bdbb69bdbc';

// After (with your key):
const API_KEY = 'YOUR_ACTUAL_API_KEY_FROM_NEWSAPI';
```

## Available NewsAPI Endpoints Used:

- **Top Headlines by Category**: `/v2/top-headlines?category={category}`
- **Top Headlines by Source**: `/v2/top-headlines?sources={sourceId}`
- **Everything (Search)**: `/v2/everything?q={query}`

## Troubleshooting:

If articles aren't loading:
1. Check browser console (F12) for error messages
2. Verify the API key is correct
3. Check NewsAPI.org dashboard to ensure key is active
4. Ensure you're using the free tier correctly (it has some limits)

## Features:

✅ Browse news by 7 categories (Business, Tech, Sports, etc.)
✅ Filter by 10+ news sources (BBC, CNN, Guardian, etc.)
✅ Search articles in real-time
✅ Read full articles on original news websites
✅ Sidebar navigation (responsive design)
✅ Breaking news section with latest headlines

---

Once your API key is added and working, all features will be fully functional!
