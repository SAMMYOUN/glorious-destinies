// Navigation Component
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if the link matches the current page
        if (currentLocation.includes(href) || 
            (currentLocation === '/' && href === 'index.html') ||
            (currentLocation.endsWith('/') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile menu toggle (if needed in future)
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        // Add any mobile menu functionality here
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener for navbar effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});
