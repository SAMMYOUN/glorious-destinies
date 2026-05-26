// ===========================
// Donation Page JavaScript
// ===========================

class DonationPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupCopyButtons();
        this.setupDonateButtons();
        this.setupFAQ();
        this.setupCustomDonate();
    }

    // Copy to Clipboard Functionality
    setupCopyButtons() {
        const copyButtons = document.querySelectorAll('.copy-icon');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const textToCopy = btn.getAttribute('data-copy');
                this.copyToClipboard(textToCopy, btn);
            });
        });
    }

    copyToClipboard(text, button) {
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = button.innerHTML;
            button.innerHTML = '✓';
            button.style.backgroundColor = '#27ae60';

            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            const originalHTML = button.innerHTML;
            button.innerHTML = '✓';
            button.style.backgroundColor = '#27ae60';

            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.backgroundColor = '';
            }, 2000);
        });
    }

    // Donate Button Functionality
    setupDonateButtons() {
        const donateButtons = document.querySelectorAll('.donate-btn:not(#custom-donate)');
        donateButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const amount = btn.getAttribute('data-amount');
                this.showDonationModal(amount);
            });
        });
    }

    // Custom Donation
    setupCustomDonate() {
        const customDonateBtn = document.getElementById('custom-donate');
        if (customDonateBtn) {
            customDonateBtn.addEventListener('click', () => {
                const customAmountInput = document.querySelector('.custom-amount');
                const amount = customAmountInput.value;
                
                if (amount && amount > 0) {
                    this.showDonationModal(amount);
                } else {
                    alert('Please enter a valid amount');
                    customAmountInput.focus();
                }
            });
        }
    }

    // Show Donation Modal
    showDonationModal(amount) {
        const modal = document.createElement('div');
        modal.className = 'donation-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h2>Thank You for Your Generosity!</h2>
                <p>You're about to donate <strong>$${amount}</strong></p>
                
                <div class="modal-section">
                    <h3>Bank Transfer Details</h3>
                    <div class="modal-detail">
                        <label>Bank:</label>
                        <span>ADB (African Development Bank)</span>
                    </div>
                    <div class="modal-detail">
                        <label>Account Name:</label>
                        <span>GLORIOUS DESTINIES</span>
                    </div>
                    <div class="modal-detail">
                        <label>Account Number:</label>
                        <span class="account-highlight">1091000110143701</span>
                        <button class="copy-modal-btn" data-copy="1091000110143701">📋 Copy</button>
                    </div>
                </div>

                <div class="modal-impact">
                    <h3>Your Impact</h3>
                    <p>Your donation of $${amount} will help us:</p>
                    <ul>
                        <li>Provide education to vulnerable children</li>
                        <li>Ensure access to healthcare and nutrition</li>
                        <li>Build safe spaces for children in need</li>
                        <li>Support families in crisis</li>
                    </ul>
                </div>

                <div class="modal-actions">
                    <button class="modal-btn primary">Proceed to Payment</button>
                    <button class="modal-btn secondary">Close</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'flex';

        // Add styles
        this.addModalStyles();

        // Setup modal interactions
        const closeBtn = modal.querySelector('.modal-close');
        const secondaryBtn = modal.querySelector('.modal-btn.secondary');
        const copyBtn = modal.querySelector('.copy-modal-btn');

        closeBtn.addEventListener('click', () => modal.remove());
        secondaryBtn.addEventListener('click', () => modal.remove());

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyToClipboard(copyBtn.getAttribute('data-copy'), copyBtn);
            });
        }

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Add Modal Styles
    addModalStyles() {
        if (document.getElementById('modal-styles')) return;

        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .donation-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeIn 0.3s ease;
            }

            .modal-content {
                background: white;
                border-radius: 20px;
                padding: 3rem;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                position: relative;
                animation: slideUp 0.3s ease;
            }

            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #999;
                transition: color 0.3s ease;
            }

            .modal-close:hover {
                color: #333;
            }

            .modal-content h2 {
                color: #2c5f2d;
                margin-bottom: 1rem;
                font-size: 1.8rem;
            }

            .modal-content > p {
                color: #666;
                margin-bottom: 2rem;
                font-size: 1.1rem;
            }

            .modal-section {
                background-color: #f8f9fa;
                padding: 1.5rem;
                border-radius: 12px;
                margin-bottom: 1.5rem;
            }

            .modal-section h3 {
                color: #2c5f2d;
                margin-bottom: 1rem;
                font-size: 1.1rem;
            }

            .modal-detail {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.8rem;
                padding-bottom: 0.8rem;
                border-bottom: 1px solid #ddd;
            }

            .modal-detail:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }

            .modal-detail label {
                font-weight: 600;
                color: #333;
            }

            .modal-detail span {
                color: #666;
            }

            .account-highlight {
                background-color: #fff3cd;
                padding: 0.3rem 0.6rem;
                border-radius: 4px;
                font-family: 'Courier New', monospace;
                font-weight: 600;
            }

            .copy-modal-btn {
                background-color: #f39c12;
                color: white;
                border: none;
                padding: 0.4rem 0.8rem;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.3s ease;
                margin-left: 0.5rem;
            }

            .copy-modal-btn:hover {
                background-color: #e8860a;
            }

            .modal-impact {
                background-color: #e8f5e9;
                padding: 1.5rem;
                border-radius: 12px;
                margin-bottom: 1.5rem;
                border-left: 4px solid #2c5f2d;
            }

            .modal-impact h3 {
                color: #2c5f2d;
                margin-bottom: 0.8rem;
                font-size: 1.1rem;
            }

            .modal-impact p {
                color: #333;
                margin-bottom: 1rem;
            }

            .modal-impact ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .modal-impact li {
                color: #555;
                padding-left: 1.5rem;
                margin-bottom: 0.5rem;
                position: relative;
            }

            .modal-impact li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #2c5f2d;
                font-weight: bold;
            }

            .modal-actions {
                display: flex;
                gap: 1rem;
            }

            .modal-btn {
                flex: 1;
                padding: 0.8rem 1.5rem;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.3s ease;
            }

            .modal-btn.primary {
                background-color: #2c5f2d;
                color: white;
            }

            .modal-btn.primary:hover {
                background-color: #1e4620;
                transform: translateY(-2px);
            }

            .modal-btn.secondary {
                background-color: #f0f0f0;
                color: #333;
            }

            .modal-btn.secondary:hover {
                background-color: #e0e0e0;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // FAQ Accordion
    setupFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');

                // Close other items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new DonationPage();
});
