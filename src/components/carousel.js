// ===========================
// Carousel/Slideshow Functionality
// ===========================

class Carousel {
    constructor(carouselSelector) {
        this.carousel = document.querySelector(carouselSelector);
        if (!this.carousel) return;

        this.slides = this.carousel.querySelectorAll('.carousel-slide');
        this.dots = this.carousel.querySelectorAll('.carousel-dot');
        this.prevBtn = this.carousel.querySelector('.carousel-arrow.prev');
        this.nextBtn = this.carousel.querySelector('.carousel-arrow.next');

        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Event listeners for buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Event listeners for dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Start auto-play
        this.startAutoPlay();

        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Show first slide
        this.showSlide(0);
    }

    showSlide(index) {
        // Handle wrapping
        if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = index;
        }

        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active class from all dots
        this.dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current slide
        this.slides[this.currentSlide].classList.add('active');

        // Highlight current dot
        if (this.dots[this.currentSlide]) {
            this.dots[this.currentSlide].classList.add('active');
        }
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
        this.resetAutoPlay();
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// ===========================
// Gallery Filter Functionality
// ===========================

class GalleryFilter {
    constructor(filterBtnSelector, galleryItemSelector) {
        this.filterBtns = document.querySelectorAll(filterBtnSelector);
        this.galleryItems = document.querySelectorAll(galleryItemSelector);

        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterGallery(e.target);
            });
        });

        // Set first button as active
        if (this.filterBtns.length > 0) {
            this.filterBtns[0].classList.add('active');
        }
    }

    filterGallery(btn) {
        // Remove active class from all buttons
        this.filterBtns.forEach(b => {
            b.classList.remove('active');
        });

        // Add active class to clicked button
        btn.classList.add('active');

        // Get filter value
        const filterValue = btn.getAttribute('data-filter');

        // Filter gallery items
        this.galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                // Trigger animation
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
}

// ===========================
// Initialize on Page Load
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel if it exists
    const carousel = new Carousel('.carousel-container');

    // Initialize gallery filter if it exists
    const galleryFilter = new GalleryFilter('.filter-btn', '.gallery-item');
});

// ===========================
// Utility Functions
// ===========================

// Function to add images to carousel dynamically
function addCarouselSlide(imageUrl, caption = '', description = '') {
    const carousel = document.querySelector('.carousel-inner');
    if (!carousel) return;

    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    slide.innerHTML = `
        <img src="${imageUrl}" alt="${caption}">
        ${caption ? `<div class="carousel-caption">
            <h3>${caption}</h3>
            ${description ? `<p>${description}</p>` : ''}
        </div>` : ''}
    `;

    carousel.appendChild(slide);

    // Add corresponding dot
    const dotsContainer = document.querySelector('.carousel-controls');
    if (dotsContainer) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        dot.addEventListener('click', function() {
            const carousel = new Carousel('.carousel-container');
            carousel.goToSlide(Array.from(dotsContainer.children).indexOf(this));
        });
        dotsContainer.appendChild(dot);
    }
}

// Function to add gallery item dynamically
function addGalleryItem(imageUrl, title = '', description = '', category = 'all') {
    const gallery = document.querySelector('.photo-grid');
    if (!gallery) return;

    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', category);

    item.innerHTML = `
        <img src="${imageUrl}" alt="${title}" class="gallery-item-image">
        <div class="gallery-item-overlay">
            <div class="gallery-item-info">
                ${title ? `<h3>${title}</h3>` : ''}
                ${description ? `<p>${description}</p>` : ''}
            </div>
        </div>
    `;

    gallery.appendChild(item);
}
