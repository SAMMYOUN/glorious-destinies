# GitHub Integration Guide - Glorious Destinies Website

This guide will help you connect your Glorious Destinies website to GitHub and deploy it for free using GitHub Pages.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step-by-Step Setup](#step-by-step-setup)
3. [Deploying with GitHub Pages](#deploying-with-github-pages)
4. [Managing Your Repository](#managing-your-repository)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you start, you'll need:

1. **GitHub Account** - Sign up at https://github.com (free)
2. **Git Installed** - Download from https://git-scm.com
3. **Your Website Files** - The Glorious Destinies folder
4. **Text Editor** - VS Code, Sublime Text, or any code editor (optional)

### Verify Git Installation

Open your terminal/command prompt and type:
```bash
git --version
```

You should see a version number like `git version 2.x.x`

---

## Step-by-Step Setup

### Step 1: Create a GitHub Account

1. Visit https://github.com
2. Click "Sign up"
3. Enter your email and create a password
4. Choose a username (e.g., `sammyoun` or similar)
5. Complete the verification process
6. You're now ready to create repositories!

### Step 2: Create a New Repository on GitHub

1. Log in to GitHub
2. Click the **+** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `glorious-destinies` (or any name you prefer)
   - **Description**: "Website for Glorious Destinies charity organization"
   - **Visibility**: Choose **"Public"** (so it can be accessed online)
   - **Initialize with README**: Leave unchecked (we'll add our own)
5. Click **"Create repository"**

### Step 3: Set Up Git on Your Computer

#### On Windows:

1. Open **Command Prompt** or **PowerShell**
2. Configure your Git identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### On Mac/Linux:

1. Open **Terminal**
2. Configure your Git identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Upload Your Website to GitHub

#### Option A: Using Command Line (Recommended)

1. **Navigate to your website folder**:
```bash
cd path/to/glorious-destinies
```

2. **Initialize a Git repository**:
```bash
git init
```

3. **Add all files**:
```bash
git add .
```

4. **Create your first commit**:
```bash
git commit -m "Initial commit: Glorious Destinies website"
```

5. **Add the remote repository** (replace `YOUR_USERNAME` with your GitHub username):
```bash
git remote add origin https://github.com/YOUR_USERNAME/glorious-destinies.git
```

6. **Push to GitHub**:
```bash
git branch -M main
git push -u origin main
```

7. **Enter your GitHub credentials** when prompted

#### Option B: Using GitHub Desktop (Easier for Beginners)

1. Download GitHub Desktop from https://desktop.github.com
2. Install and open it
3. Sign in with your GitHub account
4. Click **"Create a New Repository"**
5. Fill in:
   - **Name**: `glorious-destinies`
   - **Local Path**: Choose where to save it
6. Click **"Create Repository"**
7. Click **"Publish repository"** to push to GitHub

#### Option C: Using GitHub Web Interface (Easiest)

1. Go to your newly created repository on GitHub
2. Click **"uploading an existing file"** (or the upload button)
3. Drag and drop your website files
4. Add a commit message: "Initial commit: Glorious Destinies website"
5. Click **"Commit changes"**

---

## Deploying with GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top right)
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **"Save"**

### Step 2: Wait for Deployment

GitHub will automatically build and deploy your site. This takes about 1-2 minutes.

### Step 3: Access Your Live Website

After deployment, you'll see a message like:
> "Your site is live at https://YOUR_USERNAME.github.io/glorious-destinies"

Visit this URL to see your website live!

---

## Managing Your Repository

### Updating Your Website

After you make changes to your website:

#### Using Command Line:

```bash
# Navigate to your project
cd path/to/glorious-destinies

# Check what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Update: Added new images to gallery"

# Push to GitHub
git push origin main
```

#### Using GitHub Desktop:

1. Make changes to your files
2. Open GitHub Desktop
3. You'll see the changes listed
4. Enter a commit message
5. Click **"Commit to main"**
6. Click **"Push origin"**

### Common Git Commands

```bash
# Check status of your repository
git status

# See commit history
git log

# View changes before committing
git diff

# Undo changes to a file
git checkout -- filename

# Remove a file from tracking
git rm filename

# Update from GitHub (if working with others)
git pull origin main
```

---

## Troubleshooting

### Issue: "fatal: not a git repository"

**Solution**: Make sure you're in the correct directory:
```bash
cd path/to/glorious-destinies
git init
```

### Issue: "Permission denied (publickey)"

**Solution**: Set up SSH keys:
1. Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```
2. Add the public key to GitHub:
   - Go to GitHub Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key

### Issue: Website not updating after push

**Solution**:
1. Wait 1-2 minutes for GitHub Pages to rebuild
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Check that you pushed to the `main` branch
4. Verify Settings → Pages shows the correct branch

### Issue: 404 Error on GitHub Pages

**Solution**:
1. Make sure `index.html` is in the root directory
2. Check that the repository is public
3. Verify GitHub Pages is enabled in Settings
4. Wait a few minutes for deployment

### Issue: Images not loading

**Solution**:
1. Check that image paths are correct (use relative paths)
2. Ensure images are in the `public/` folder
3. Make sure you pushed the images to GitHub

---

## Best Practices

### 1. Regular Commits
Make small, meaningful commits frequently:
```bash
git commit -m "Fix: Corrected contact form validation"
```

### 2. Meaningful Messages
Use clear commit messages:
- ✅ "Add carousel to home page"
- ❌ "update"

### 3. Keep Sensitive Data Safe
Never commit:
- API keys
- Passwords
- Private information

### 4. Use .gitignore
Create a `.gitignore` file to exclude files:
```
node_modules/
.env
.DS_Store
```

### 5. Backup Important Changes
Always keep a local backup of your website files.

---

## Advanced: Custom Domain

To use a custom domain (e.g., gloriousdestinies.org):

1. **Purchase a domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Any domain registrar

2. **Configure DNS**:
   - Go to your domain registrar's settings
   - Add GitHub's IP addresses as A records:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Add domain to GitHub**:
   - Go to Repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Click "Save"
   - GitHub will create a CNAME file

4. **Wait for DNS propagation** (can take 24 hours)

---

## Collaboration

### Adding Team Members

1. Go to Repository Settings → Collaborators
2. Click "Add people"
3. Search for their GitHub username
4. They'll receive an invitation

### Protecting Main Branch

To prevent accidental changes:

1. Go to Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable "Require pull request reviews"
5. Save

---

## Useful Resources

- **GitHub Documentation**: https://docs.github.com
- **Git Tutorial**: https://git-scm.com/book/en/v2
- **GitHub Pages Guide**: https://pages.github.com
- **Markdown Guide**: https://www.markdownguide.org

---

## Quick Reference

| Task | Command |
|------|---------|
| Initialize repository | `git init` |
| Add all files | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push origin main` |
| Pull from GitHub | `git pull origin main` |
| Check status | `git status` |
| View history | `git log` |
| Create branch | `git checkout -b branch-name` |
| Switch branch | `git checkout branch-name` |

---

## Summary

1. ✅ Create GitHub account
2. ✅ Create new repository
3. ✅ Upload website files
4. ✅ Enable GitHub Pages
5. ✅ Access your live website
6. ✅ Update and maintain regularly

Your Glorious Destinies website is now on GitHub and live on the internet!

---

**Need Help?**
- Check GitHub's official documentation
- Visit Stack Overflow for common issues
- Contact GitHub Support

**Happy Coding! 🚀**
