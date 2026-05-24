// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Validate form
            if (!validateForm(data)) {
                showMessage('Please fill in all required fields correctly.', 'error');
                return;
            }

            // Simulate form submission
            submitForm(data);
        });
    }
});

// Form validation
function validateForm(data) {
    // Check required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }

    return true;
}

// Submit form
function submitForm(data) {
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call with timeout
    setTimeout(() => {
        // Success message
        showMessage('Thank you for your message! We will get back to you soon.', 'success');

        // Reset form
        document.getElementById('contactForm').reset();

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Log the data (in a real application, this would be sent to a server)
        console.log('Form submitted with data:', data);
    }, 1500);
}

// Show message
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// Smooth scroll to form on error
function scrollToForm() {
    const form = document.querySelector('.contact-form-wrapper');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}
