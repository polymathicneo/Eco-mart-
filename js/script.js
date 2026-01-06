// JavaScript for EcoMart
// Made by our group

// Popup function - shows a promo alert
function showPromo() {
    alert("Special Deal! Use code ECO10 for 10% off bamboo products!");
}

// Run this when page loads
document.addEventListener('DOMContentLoaded', function () {

    // Form validation
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            // Stop form from submitting
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Check if name is long enough
            if (name.trim().length < 3) {
                alert("Please enter your full name (at least 3 characters)");
                return;
            }

            // Show success message
            alert("Thanks " + name + "! We got your message and will reply to " + email + " soon.");

            // Clear form
            form.reset();
        });
    }

    // Dynamic greeting based on time
    const heading = document.querySelector('.hero h1');
    if (heading) {
        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good Morning!";
        } else if (hour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }

        heading.textContent = greeting + " " + heading.textContent;
    }

    console.log("EcoMart loaded!");
});
