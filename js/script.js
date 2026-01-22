/**
 * script.js - General website logic and Form Validation
 * Fulfills coursework requirement for scripted validation and user feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent default form submission
            event.preventDefault();

            // Clear previous errors
            clearErrors();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const subject = document.getElementById('subject');
            let isValid = true;

            // Name validation: At least 3 characters
            if (name.value.trim().length < 3) {
                showError(name, "Name must be at least 3 characters long.");
                isValid = false;
            }

            // Email validation: Valid format
            if (!validateEmail(email.value)) {
                showError(email, "Please enter a valid email address.");
                isValid = false;
            }

            // Message validation: At least 10 characters
            if (message.value.trim().length < 10) {
                showError(message, "Message must be at least 10 characters long.");
                isValid = false;
            }

            if (isValid) {
                // Show success message and hide form
                const successDiv = document.createElement('div');
                successDiv.className = 'form-success';
                successDiv.textContent = "Thank you! Your message has been sent successfully.";
                contactForm.style.display = 'none';
                contactForm.parentElement.insertBefore(successDiv, contactForm.nextSibling);

                // Clear the form
                contactForm.reset();
            }
        });
    }

    // Dynamic greeting (kept from original for consistency/extra marks)
    const heading = document.querySelector('.wrapper h1');
    if (heading && window.location.pathname.includes('index.html')) {
        const hour = new Date().getHours();
        let greeting = (hour < 12) ? "Good Morning!" : (hour < 18) ? "Good Afternoon!" : "Good Evening!";
        heading.innerHTML = greeting + "<br>" + heading.innerHTML;
    }
});

/**
 * Validates email format using regex
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Shows error message for a specific input
 */
function showError(input, message) {
    const parent = input.parentElement;
    input.style.borderColor = '#d32f2f';
    input.classList.add('error-input');

    const errorDisplay = document.createElement('small');
    errorDisplay.className = 'error-message';
    errorDisplay.style.color = '#d32f2f';
    errorDisplay.style.fontSize = '0.8rem';
    errorDisplay.style.marginTop = '2px';
    errorDisplay.style.display = 'block';
    errorDisplay.textContent = message;
    parent.appendChild(errorDisplay);
}

/**
 * Clears all error messages and styles
 */
function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());

    const fields = document.querySelectorAll('#contactForm input, #contactForm textarea');
    fields.forEach(field => {
        field.style.borderColor = '';
        field.classList.remove('error-input');
    });
}

/**
 * Promo code functionality (Required for Kursuswork popup)
 */
function showPromo() {
    alert("Special Offer: Use code ECO2026 for 10% off your first purchase!");
}
