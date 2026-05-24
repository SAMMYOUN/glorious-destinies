# Quick Start: GitHub + GitHub Pages Deployment

Get your Glorious Destinies website live on GitHub in 5 minutes!

## The Fastest Way (Recommended)

### Step 1: Create GitHub Account (1 minute)
1. Go to https://github.com
2. Click "Sign up"
3. Follow the steps to create your account

### Step 2: Create Repository (1 minute)
1. Click the **+** icon (top right) → "New repository"
2. Name it: `glorious-destinies`
3. Choose "Public"
4. Click "Create repository"

### Step 3: Upload Files (2 minutes)
1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files from your `glorious-destinies` folder
3. Add message: "Initial commit: Glorious Destinies website"
4. Click "Commit changes"

### Step 4: Enable GitHub Pages (1 minute)
1. Go to Settings → Pages
2. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click "Save"

### Step 5: Access Your Website
Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/glorious-destinies
```

**That's it! Your website is now live! 🎉**

---

## Using Command Line (For Advanced Users)

If you prefer using the terminal:

```bash
# 1. Navigate to your website folder
cd path/to/glorious-destinies

# 2. Initialize Git
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: Glorious Destinies website"

# 5. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/glorious-destinies.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

Then follow Step 4 above to enable GitHub Pages.

---

## Updating Your Website

### Using Web Interface:
1. Go to your repository
2. Click the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"

### Using Command Line:
```bash
# Make changes to your files, then:
git add .
git commit -m "Update: Description of changes"
git push origin main
```

---

## Your Website URLs

| What | URL |
|------|-----|
| GitHub Repository | `https://github.com/YOUR_USERNAME/glorious-destinies` |
| Live Website | `https://YOUR_USERNAME.github.io/glorious-destinies` |
| Custom Domain | `https://yourdomain.com` (after setup) |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Website not showing | Wait 2-3 minutes and refresh |
| 404 Error | Make sure `index.html` is in root folder |
| Images not loading | Check that paths are correct (use relative paths) |
| Changes not updating | Clear browser cache (Ctrl+Shift+Delete) |

---

## Next Steps

1. ✅ Website is live!
2. 📝 Read `GITHUB_GUIDE.md` for advanced features
3. 🖼️ Add your own images to `public/` folder
4. 🎨 Customize colors and content
5. 🌐 Set up custom domain (optional)

---

## Need Help?

- **GitHub Docs**: https://docs.github.com
- **GitHub Pages**: https://pages.github.com
- **Git Guide**: https://git-scm.com/book

**Your website is now on GitHub! Share the link with everyone! 🚀**
