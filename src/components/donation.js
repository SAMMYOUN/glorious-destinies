// ===========================
// Donation Section Functionality
// ===========================

class DonationManager {
    constructor() {
        this.accountNumber = '1091000110143701';
        this.accountName = 'GLORIOUS DESTINIES';
        this.bankName = 'ADB (African Development Bank)';
        this.init();
    }

    init() {
        this.setupCopyButtons();
        this.setupSocialSharing();
    }

    setupCopyButtons() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const textToCopy = btn.getAttribute('data-copy');
                this.copyToClipboard(textToCopy, btn);
            });
        });
    }

    copyToClipboard(text, button) {
        // Use the modern Clipboard API
        navigator.clipboard.writeText(text).then(() => {
            // Change button appearance
            const originalText = button.textContent;
            button.textContent = '✓ Copied!';
            button.classList.add('copied');

            // Revert after 2 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            const originalText = button.textContent;
            button.textContent = '✓ Copied!';
            button.classList.add('copied');

            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        });
    }

    setupSocialSharing() {
        const socialButtons = document.querySelectorAll('.social-btn');
        socialButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = btn.getAttribute('data-platform');
                this.shareOnSocial(platform);
            });
        });
    }

    shareOnSocial(platform) {
        const pageUrl = window.location.href;
        const pageTitle = 'Glorious Destinies - Supporting Vulnerable Children in Ghana';
        const pageDescription = 'Join us in building brighter futures for vulnerable children. Support education, health, and humanitarian services.';

        let shareUrl = '';

        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                break;
            case 'instagram':
                // Instagram doesn't support direct sharing via URL, show message
                alert('To share on Instagram, please take a screenshot and share it directly on the app!');
                return;
            case 'email':
                shareUrl = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(pageDescription + '\n\n' + pageUrl)}`;
                break;
            case 'tiktok':
                // TikTok doesn't support direct sharing, show message
                alert('To share on TikTok, please copy the link and share it in your TikTok bio or messages!');
                return;
            case 'youtube':
                // YouTube sharing
                shareUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent('Glorious Destinies')}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }
}

// ===========================
// Social Share Button Generator
// ===========================

function generateSocialButtons() {
    const platforms = [
        { name: 'Facebook', icon: '📘', class: 'facebook' },
        { name: 'Twitter', icon: '𝕏', class: 'twitter' },
        { name: 'WhatsApp', icon: '💬', class: 'whatsapp' },
        { name: 'LinkedIn', icon: '💼', class: 'linkedin' },
        { name: 'Instagram', icon: '📷', class: 'instagram' },
        { name: 'Email', icon: '✉️', class: 'email' },
        { name: 'TikTok', icon: '🎵', class: 'tiktok' },
        { name: 'YouTube', icon: '▶️', class: 'youtube' }
    ];

    return platforms;
}

// ===========================
// Initialize on Page Load
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize donation manager
    const donationManager = new DonationManager();
});

// ===========================
// Utility Functions
// ===========================

// Function to update donation information dynamically
function updateDonationInfo(accountNumber, accountName, bankName) {
    const accountNumberElement = document.querySelector('[data-account-number]');
    const accountNameElement = document.querySelector('[data-account-name]');
    const bankNameElement = document.querySelector('[data-bank-name]');

    if (accountNumberElement) {
        accountNumberElement.textContent = accountNumber;
        accountNumberElement.parentElement.querySelector('.copy-btn').setAttribute('data-copy', accountNumber);
    }
    if (accountNameElement) {
        accountNameElement.textContent = accountName;
    }
    if (bankNameElement) {
        bankNameElement.textContent = bankName;
    }
}

// Function to track donation clicks
function trackDonationClick(method) {
    console.log(`Donation method clicked: ${method}`);
    // You can send this data to analytics service
}

// Function to show donation success message
function showDonationMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'donation-message success';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
