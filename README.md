# Glorious Destinies Website

A professional, responsive website for **Glorious Destinies**, a non-profit charitable organization dedicated to supporting vulnerable children in Ghana through education, humanitarian services, and social welfare programs.

## Project Overview

Glorious Destinies is a charitable organization based in Greater Accra Region, Ghana, committed to assisting orphaned, abused, and abandoned children. This website serves as the organization's digital presence, providing information about their mission, services, and ways to get involved.

## Website Structure

```
glorious-destinies/
├── index.html                          # Home page
├── src/
│   ├── pages/
│   │   ├── home/                       # Home page components
│   │   ├── about/
│   │   │   └── index.html              # About Us page
│   │   └── contact/
│   │       ├── index.html              # Contact Us page
│   │       ├── contact.css             # Contact page styles
│   │       └── contact.js              # Contact form handler
│   ├── components/
│   │   └── navigation.js               # Navigation functionality
│   └── styles/
│       ├── main.css                    # Main stylesheet
│       └── responsive.css              # Mobile responsive styles
├── public/                             # Static assets
└── README.md                           # Project documentation
```

## Pages

### 1. Home Page (`index.html`)
The landing page featuring:
- Hero section with organization tagline
- Mission statement
- Core services and values
- Organization information
- Call-to-action sections
- Footer with contact information

### 2. About Us (`src/pages/about/index.html`)
Comprehensive information about the organization:
- Foundation and preamble
- Organization details and location
- Aims and objectives
- Commitment and impact areas
- Call-to-action for involvement

### 3. Contact Us (`src/pages/contact/index.html`)
Contact and engagement page featuring:
- Contact information (address, email, phone, hours)
- Ways to get involved
- Contact form with validation
- Map placeholder
- Call-to-action buttons

## Features

### Design Features
- **Professional Design**: Clean, modern interface with a color scheme reflecting the organization's values
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Accessibility**: Semantic HTML and proper contrast ratios for accessibility
- **User-Friendly Navigation**: Intuitive navigation with active page indicators

### Technical Features
- **HTML5**: Semantic markup for better structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript**: Form validation and interactive elements
- **Mobile-First Approach**: Optimized for all device sizes
- **No External Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks required)

## Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Color | Dark Green | #2c5f2d |
| Secondary Color | Orange | #f39c12 |
| Accent Color | Red | #e74c3c |
| Text Dark | Dark Gray | #2c3e50 |
| Text Light | Light Gray | #ecf0f1 |
| Background Light | Off-White | #f8f9fa |

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (optional, for modifications)
- A local web server (optional, for testing)

### Running Locally

1. **Navigate to the project directory**:
   ```bash
   cd glorious-destinies
   ```

2. **Open in a browser**:
   - Simply double-click `index.html` to open in your default browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **Navigate through pages**:
   - Use the navigation menu to explore different sections
   - Test responsive design by resizing your browser window

## Contact Form

The contact form includes:
- **Fields**: Name, Email, Phone, Subject, Message
- **Validation**: Client-side validation for required fields and email format
- **Feedback**: Success and error messages
- **Newsletter**: Optional newsletter subscription checkbox

### Form Submission
Currently, the form displays a success message and logs data to the browser console. To implement actual form submission:

1. Set up a backend server (Node.js, Python, PHP, etc.)
2. Update the `submitForm()` function in `contact.js` to send data to your backend
3. Implement email notification or database storage on the backend

## Customization

### Changing Colors
Edit the CSS variables in `src/styles/main.css`:
```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #f39c12;
    --accent-color: #e74c3c;
    /* ... other colors ... */
}
```

### Adding Images
1. Place images in the `public/` directory
2. Reference them in HTML:
   ```html
   <img src="public/image-name.jpg" alt="Description">
   ```

### Updating Content
Edit the HTML files directly to update text, headings, and content sections.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: No external dependencies or frameworks
- **Fast Loading**: Minimal CSS and JavaScript
- **Optimized Images**: Recommended to optimize images before deployment
- **Caching**: Static files can be cached for better performance

## Deployment

### Static Hosting Options
1. **GitHub Pages**: Free hosting with GitHub repository
2. **Netlify**: Easy deployment with drag-and-drop
3. **Vercel**: Optimized for static sites
4. **AWS S3**: Scalable cloud storage
5. **Traditional Web Hosting**: Any hosting provider supporting static files

### Deployment Steps
1. Upload all files to your hosting provider
2. Ensure the root file is `index.html`
3. Test all links and pages
4. Set up a custom domain (optional)

## Future Enhancements

- [ ] Add image gallery or slideshow
- [ ] Implement actual email notifications for contact form
- [ ] Add blog section for updates and stories
- [ ] Integrate donation system
- [ ] Add social media links and integration
- [ ] Implement multi-language support
- [ ] Add testimonials section
- [ ] Create event calendar
- [ ] Add volunteer application form
- [ ] Implement child sponsorship program details

## Maintenance

### Regular Updates
- Update contact information as needed
- Keep content current and relevant
- Monitor and fix any broken links
- Update browser compatibility as needed

### Backup
- Regularly backup all files
- Version control with Git (recommended)
- Document any custom modifications

## Support and Contact

For questions or support regarding this website:
- **Email**: info@gloriousdestinies.org
- **Phone**: +233 (0) 000 000 000
- **Address**: HNO3, 2nd Street Sakaman, Greater Accra Region, Ghana

## License

This website is created for Glorious Destinies. All rights reserved © 2024.

## Credits

- **Design & Development**: Professional Web Development
- **Organization**: Glorious Destinies
- **Purpose**: Supporting vulnerable children in Ghana

---

**Last Updated**: May 2024

For more information about Glorious Destinies and their mission, visit the website or contact them directly.
