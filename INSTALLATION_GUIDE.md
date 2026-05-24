# Glorious Destinies Website - Installation & Deployment Guide

## Quick Start

### Option 1: Local Testing (Easiest)

1. **Extract the files** from the downloaded archive to your computer
2. **Open `index.html`** in your web browser
   - Simply double-click the `index.html` file
   - Or right-click and select "Open with" → your preferred browser

That's it! The website will work immediately.

### Option 2: Using a Local Web Server

If you want to test with a local server:

**On Windows (using Python):**
```bash
cd glorious-destinies
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**On Mac/Linux:**
```bash
cd glorious-destinies
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node.js (if installed):**
```bash
cd glorious-destinies
npx http-server
```

## Deployment Options

### Option 1: GitHub Pages (FREE & EASY)

1. Create a GitHub account at https://github.com
2. Create a new repository named `glorious-destinies`
3. Upload all files from the `glorious-destinies` folder
4. Go to Settings → Pages → Select "main" branch as source
5. Your site will be live at: `https://yourusername.github.io/glorious-destinies`

### Option 2: Netlify (FREE & RECOMMENDED)

1. Visit https://www.netlify.com
2. Sign up with GitHub or email
3. Click "New site from Git" or drag & drop the folder
4. Netlify will automatically deploy
5. Your site gets a free domain like: `glorious-destinies-xyz.netlify.app`

**Advantages:**
- Free SSL certificate
- Automatic deployments
- Custom domain support
- Easy to use

### Option 3: Vercel (FREE)

1. Visit https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Vercel automatically deploys
5. Get a free domain: `glorious-destinies.vercel.app`

### Option 4: Traditional Web Hosting

Upload files via FTP to your hosting provider:
- Bluehost
- GoDaddy
- HostGator
- Namecheap
- Any web hosting service

**Steps:**
1. Upload all files to the `public_html` folder
2. Make sure `index.html` is in the root directory
3. Access your site via your domain

### Option 5: AWS S3 (Scalable)

1. Create an S3 bucket
2. Enable static website hosting
3. Upload all files
4. Set bucket policy to public
5. Access via S3 endpoint or custom domain

## File Structure Explanation

```
glorious-destinies/
├── index.html                          # Home page - START HERE
├── README.md                           # Project documentation
├── INSTALLATION_GUIDE.md               # This file
│
├── src/
│   ├── pages/
│   │   ├── about/
│   │   │   └── index.html              # About Us page
│   │   ├── contact/
│   │   │   ├── index.html              # Contact page
│   │   │   ├── contact.css             # Contact page styles
│   │   │   └── contact.js              # Contact form handler
│   │   ├── services/
│   │   │   ├── index.html              # Services page
│   │   │   └── services.css            # Services page styles
│   │   └── home/                       # Placeholder for future content
│   │
│   ├── components/
│   │   └── navigation.js               # Navigation functionality
│   │
│   └── styles/
│       ├── main.css                    # Main stylesheet
│       └── responsive.css              # Mobile responsive styles
│
└── public/                             # Folder for images & assets
```

## Customization Guide

### 1. Update Contact Information

**File:** `src/pages/contact/index.html`

Find and replace:
- Email: `info@gloriousdestinies.org`
- Phone: `+233 (0) 000 000 000`
- Address: `HNO3, 2nd Street Sakaman, Greater Accra Region, Ghana`
- Hours: Update the hours section

### 2. Change Colors

**File:** `src/styles/main.css`

Find the `:root` section at the top and update:
```css
:root {
    --primary-color: #2c5f2d;        /* Dark Green */
    --secondary-color: #f39c12;      /* Orange */
    --accent-color: #e74c3c;         /* Red */
    /* ... other colors ... */
}
```

### 3. Add Images

1. Place images in the `public/` folder
2. Reference in HTML:
```html
<img src="public/image-name.jpg" alt="Description">
```

### 4. Update Organization Name

Search and replace "Glorious Destinies" with your organization name throughout the files.

### 5. Add New Pages

1. Create a new folder: `src/pages/newpage/`
2. Create `index.html` in that folder
3. Copy structure from existing pages
4. Update navigation links in all pages

## Contact Form Setup

The contact form currently shows a success message but doesn't send emails.

### To Enable Email Notifications:

**Option A: Using Formspree (Easiest)**
1. Visit https://formspree.io
2. Sign up and create a new form
3. Get your form endpoint
4. Update the form in `src/pages/contact/contact.js`:
```javascript
// Replace the submitForm function with:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData
})
```

**Option B: Using Backend Service**
- Set up a backend with Node.js, Python, or PHP
- Configure email service (SendGrid, Mailgun, etc.)
- Update the form submission endpoint

## Browser Compatibility

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Performance Tips

1. **Optimize Images**: Use tools like TinyPNG to compress images
2. **Enable Caching**: Most hosting providers have built-in caching
3. **Use CDN**: For faster global delivery
4. **Minify CSS/JS**: Use online tools to reduce file sizes

## SEO Optimization

Add to `index.html` head section:
```html
<meta name="description" content="Glorious Destinies - Supporting vulnerable children in Ghana through education and humanitarian services.">
<meta name="keywords" content="charity, children, Ghana, education, support">
<meta name="author" content="Glorious Destinies">
<meta property="og:title" content="Glorious Destinies">
<meta property="og:description" content="Building brighter futures for vulnerable children in Ghana">
```

## Troubleshooting

### Links Not Working
- Check that file paths are correct
- Ensure folder structure matches the provided layout
- Use relative paths (e.g., `../pages/about/index.html`)

### Styles Not Loading
- Verify CSS file paths in HTML
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)

### Form Not Submitting
- Check browser console for JavaScript errors
- Ensure all form fields are properly filled
- Verify form handler is connected

### Mobile Layout Issues
- Test on different devices
- Clear browser cache
- Check that responsive.css is linked

## Support Resources

- **HTML/CSS Help**: https://www.w3schools.com
- **JavaScript Help**: https://developer.mozilla.org
- **Web Hosting**: https://www.hostinger.com
- **Domain Registration**: https://www.namecheap.com

## Next Steps

1. ✅ Extract and test locally
2. ✅ Customize content and colors
3. ✅ Add your images to `public/` folder
4. ✅ Set up contact form email
5. ✅ Deploy to your chosen platform
6. ✅ Set up custom domain (optional)
7. ✅ Monitor and maintain

## License & Rights

This website template is created for Glorious Destinies. All rights reserved © 2024.

---

**Need Help?**
- Review the README.md file for more details
- Check the HTML files for inline comments
- Test in different browsers
- Use browser developer tools (F12) for debugging

**Happy Deploying! 🚀**
