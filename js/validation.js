// Form validation functions for EcoMart website

/**
 * Validates the contact form fields
 * @param {HTMLFormElement} form - The form element to validate
 * @returns {boolean} - True if form is valid, false otherwise
 */
function validateContactForm(form) {
    // Get form fields
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Clear previous error messages
    clearFormErrors(form);

    let isValid = true;
    let errors = [];

    // Validate name field
    if (!name) {
        showFieldError('name', 'Full name is required');
        isValid = false;
        errors.push('Name is required');
    } else if (name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters long');
        isValid = false;
        errors.push('Name too short');
    }

    // Validate email field
    if (!email) {
        showFieldError('email', 'Email address is required');
        isValid = false;
        errors.push('Email is required');
    } else if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
        errors.push('Invalid email format');
    }

    // Validate message field
    if (!message) {
        showFieldError('message', 'Message is required');
        isValid = false;
        errors.push('Message is required');
    } else if (message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
        errors.push('Message too short');
    }

    // If form is invalid, show summary alert
    if (!isValid) {
        alert('Please correct the following errors:\n' + errors.join('\n'));
    }

    return isValid;
}

/**
 * Validates email format using regex
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Shows error message for a specific field
 * @param {string} fieldId - ID of the field
 * @param {string} message - Error message to display
 */
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;

    // Insert error message after the field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

/**
 * Clears all error messages from the form
 * @param {HTMLFormElement} form - The form element
 */
function clearFormErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}

/**
 * Handles form submission with validation
 * @param {Event} event - Form submit event
 */
function handleContactFormSubmit(event) {
    event.preventDefault();

    const form = event.target;

    if (validateContactForm(form)) {
        // Form is valid, show success message
        alert('Thank you! Your message has been sent successfully.');
        form.reset();
    }
    // If invalid, validation function will show errors
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});
