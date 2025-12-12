/**
 * Royal Doors & Windows - Main JavaScript File
 *
 * This file contains all interactive functionality including:
 * - Mobile menu toggle
 * - FAQ accordion
 * - Form validation
 * - Smooth scroll behavior
 * - Navbar scroll effects
 */

// ========================================
// MOBILE MENU TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// ========================================
// FAQ ACCORDION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (question && answer && icon) {
            question.addEventListener('click', function() {
                const isOpen = item.classList.contains('active');

                // Close all FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                    }
                    if (otherIcon) {
                        otherIcon.textContent = '+';
                    }
                });

                // Open clicked item if it wasn't open
                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.textContent = '−';
                }
            });
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('shadow-xl');
        } else {
            navbar.classList.remove('shadow-xl');
        }
    }

    lastScroll = currentScroll;
});

// ========================================
// CONTACT FORM VALIDATION
// ========================================
function validateContactForm(formId) {
    const form = document.getElementById(formId);

    if (!form) return false;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form fields
        const name = form.querySelector('[name="name"]');
        const phone = form.querySelector('[name="phone"]');
        const email = form.querySelector('[name="email"]');
        const location = form.querySelector('[name="location"]');
        const message = form.querySelector('[name="message"]');

        // Clear previous error messages
        clearErrors(form);

        let isValid = true;

        // Validate Name
        if (!name.value.trim()) {
            showError(name, 'Please enter your name');
            isValid = false;
        } else if (name.value.trim().length < 3) {
            showError(name, 'Name must be at least 3 characters');
            isValid = false;
        }

        // Validate Phone
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phone.value.trim()) {
            showError(phone, 'Please enter your phone number');
            isValid = false;
        } else if (!phoneRegex.test(phone.value.trim())) {
            showError(phone, 'Please enter a valid 10-digit phone number');
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Please enter your email');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate Location
        if (!location.value.trim()) {
            showError(location, 'Please enter your location');
            isValid = false;
        }

        // Validate Message
        if (!message.value.trim()) {
            showError(message, 'Please enter your message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }

        // If form is valid, show success message
        if (isValid) {
            showSuccessMessage(form);
            // Here you can add code to submit form to backend/API
            // Example: submitFormToAPI(form);
        }
    });
}

// Show error message for a field
function showError(field, message) {
    // Add error styling to field
    field.classList.add('border-red-500');
    field.classList.remove('border-gray-300');

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1 error-message';
    errorDiv.textContent = message;

    // Insert error message after field
    field.parentElement.appendChild(errorDiv);
}

// Clear all error messages
function clearErrors(form) {
    // Remove error styling
    const fields = form.querySelectorAll('input, textarea, select');
    fields.forEach(field => {
        field.classList.remove('border-red-500');
        field.classList.add('border-gray-300');
    });

    // Remove error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

// Show success message after form submission
function showSuccessMessage(form) {
    // Create success modal/alert
    const successModal = document.createElement('div');
    successModal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    successModal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p class="text-gray-600 mb-6">
                Your message has been received. We'll get back to you within 24 hours.
            </p>
            <button onclick="this.closest('.fixed').remove()" class="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                Close
            </button>
        </div>
    `;

    document.body.appendChild(successModal);

    // Reset form
    form.reset();

    // Auto-close after 5 seconds
    setTimeout(() => {
        successModal.remove();
    }, 5000);
}

// ========================================
// INITIALIZE CONTACT FORM
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    validateContactForm('contact-form');
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Only handle if it's a valid anchor (not just "#")
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.add('hidden');
                    }

                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ========================================
// IMAGE LAZY LOADING (Optional Enhancement)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ========================================
// FORM SUBMISSION TO API (Template for later integration)
// ========================================
/**
 * Submit form data to external API
 * Uncomment and modify this function when you're ready to integrate with:
 * - Google Sheets API
 * - WhatsApp API
 * - Email services
 * - WebForms
 */
/*
async function submitFormToAPI(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
        // Example: Submit to Google Sheets
        const response = await fetch('YOUR_GOOGLE_SHEETS_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('Form submitted successfully');
            return true;
        } else {
            console.error('Form submission failed');
            return false;
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return false;
    }
}

// Example: WhatsApp API Integration
function sendToWhatsApp(data) {
    const phone = '919148546403';
    const message = `New Contact Form Submission:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Location: ${data.location}
Message: ${data.message}`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
*/

// ========================================
// PRODUCT FILTER (For products page)
// ========================================
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// ========================================
// GALLERY LIGHTBOX (For gallery page)
// ========================================
function openLightbox(imageSrc, caption) {
    const lightbox = document.createElement('div');
    lightbox.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4';
    lightbox.innerHTML = `
        <div class="relative max-w-5xl w-full">
            <button onclick="this.closest('.fixed').remove()" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10">
                ×
            </button>
            <img src="${imageSrc}" alt="${caption}" class="w-full h-auto rounded-lg">
            ${caption ? `<p class="text-white text-center mt-4 text-lg">${caption}</p>` : ''}
        </div>
    `;

    document.body.appendChild(lightbox);

    // Close on click outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.remove();
        }
    });
}

// ========================================
// ANIMATION ON SCROLL
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Format phone number for display
 */
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3];
    }
    return phone;
}

/**
 * Scroll to top button
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.classList.remove('hidden');
        } else {
            scrollButton.classList.add('hidden');
        }
    }
});

// ========================================
// MOBILE ACCORDION FOR PRODUCT MENUS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.mobile-accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('svg');

            // Close all other accordions
            document.querySelectorAll('.mobile-accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.add('hidden');
                    const otherIcon = item.previousElementSibling.querySelector('svg');
                    if (otherIcon) {
                        otherIcon.classList.remove('rotate-180');
                    }
                }
            });

            // Toggle current accordion
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
});

// ========================================
// CONSOLE LOG - Development Info
// ========================================
console.log('%c Royal Doors & Windows ', 'background: #0F5E43; color: #D1A94D; font-size: 20px; padding: 10px;');
console.log('%c Premium uPVC Solutions ', 'background: #D1A94D; color: #0F5E43; font-size: 16px; padding: 5px;');
console.log('Website powered by HTML + Tailwind CSS + JavaScript');
