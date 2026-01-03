// Dynamic content functionality for EcoMart website

// Blog expansion functionality
const blogContent = {
    0: {
        title: "How Technology Affects Daily Life",
        fullContent: `
            <p>Technology has revolutionized the way we live, work, and interact. From smart homes to sustainable energy solutions, we explore the impact of tech on our ecological footprint and how we can use it for good.</p>

            <p>In today's digital age, technology touches every aspect of our daily lives. Smartphones keep us connected, renewable energy systems power our homes, and electric vehicles reduce our carbon footprint. However, this technological advancement comes with both benefits and challenges.</p>

            <h4>Positive Impacts:</h4>
            <ul>
                <li><strong>Communication:</strong> Instant global connectivity through social media and video calls</li>
                <li><strong>Remote Work:</strong> Flexibility to work from anywhere, reducing commute emissions</li>
                <li><strong>Smart Homes:</strong> Energy-efficient appliances and automated systems</li>
                <li><strong>E-commerce:</strong> Convenient shopping with reduced need for physical stores</li>
            </ul>

            <h4>Environmental Considerations:</h4>
            <ul>
                <li><strong>E-waste:</strong> Proper disposal of old electronics is crucial</li>
                <li><strong>Energy Consumption:</strong> Data centers and cryptocurrency mining use significant power</li>
                <li><strong>Rare Earth Minerals:</strong> Mining impacts for device manufacturing</li>
            </ul>

            <p>At EcoMart, we believe in using technology responsibly. Our solar-powered gadgets and sustainable materials help balance technological advancement with environmental stewardship.</p>

            <p><em>What technological changes have you noticed in your daily life? Share your thoughts in the comments!</em></p>
        `
    },
    1: {
        title: "Top 10 Tips for a Zero-Waste Kitchen",
        fullContent: `
            <p>Reducing waste starts at home. Learn simple, effective ways to minimize plastic usage, compost food scraps, and choose sustainable products for a greener kitchen.</p>

            <h4>1. Invest in Reusable Containers</h4>
            <p>Replace plastic wrap and containers with glass or stainless steel alternatives. Our silicone food bags are perfect for storing leftovers and preventing food waste.</p>

            <h4>2. Use Beeswax Wraps</h4>
            <p>Natural beeswax wraps provide an eco-friendly alternative to plastic wrap and can be reused for up to a year.</p>

            <h4>3. Compost Food Scraps</h4>
            <p>Start a compost bin for vegetable peels, coffee grounds, and other organic waste. This reduces landfill contributions and creates nutrient-rich soil.</p>

            <h4>4. Buy in Bulk</h4>
            <p>Purchase grains, nuts, and spices from bulk bins to avoid unnecessary packaging.</p>

            <h4>5. Choose Products with Minimal Packaging</h4>
            <p>Look for items sold in recyclable or minimal packaging. Our bamboo products come in eco-friendly packaging.</p>

            <h4>6. Use Reusable Shopping Bags</h4>
            <p>Our organic cotton tote bags are durable and perfect for grocery shopping.</p>

            <h4>7. Make Your Own Cleaning Products</h4>
            <p>Use vinegar, baking soda, and essential oils for natural cleaning solutions.</p>

            <h4>8. Repair Instead of Replace</h4>
            <p>Fix broken kitchen tools rather than buying new ones. Our bamboo dish brushes are designed to last.</p>

            <h4>9. Plan Meals Ahead</h4>
            <p>Reduce food waste by planning meals and using leftovers creatively.</p>

            <h4>10. Educate and Advocate</h4>
            <p>Share your zero-waste journey with others and support policies that reduce plastic use.</p>

            <p>Small changes in the kitchen can make a big difference for the planet. Start with one or two tips and build from there!</p>
        `
    },
    2: {
        title: "Why Bamboo is the Future of Sustainable Materials",
        fullContent: `
            <p>Bamboo is fast-growing, biodegradable, and incredibly versatile. Discover why we use bamboo in our bottles, brushes, and textiles, and why it's a superior alternative to plastic.</p>

            <h4>The Amazing Growth Rate of Bamboo</h4>
            <p>Unlike traditional hardwoods that take decades to mature, bamboo can grow up to 35 inches in a single day! This rapid growth makes bamboo one of the most sustainable resources available.</p>

            <h4>Environmental Benefits</h4>
            <ul>
                <li><strong>Carbon Sequestration:</strong> Bamboo absorbs CO2 at a rate of up to 1 ton per acre annually</li>
                <li><strong>Soil Health:</strong> Extensive root system prevents soil erosion and improves water retention</li>
                <li><strong>Minimal Water Use:</strong> Requires significantly less water than cotton or other crops</li>
                <li><strong>No Chemical Pesticides:</strong> Naturally resistant to pests and diseases</li>
            </ul>

            <h4>Versatility in Products</h4>
            <p>Bamboo can be transformed into everything from textiles to construction materials. Our bamboo water bottles combine durability with sustainability, while our bamboo dish brushes provide an eco-friendly alternative to plastic scrubbers.</p>

            <h4>Biodegradable and Renewable</h4>
            <p>Unlike plastic that persists in landfills for centuries, bamboo products will naturally decompose. When harvested responsibly, bamboo regrows without replanting, making it truly renewable.</p>

            <h4>Economic Benefits</h4>
            <p>Bamboo farming creates jobs in rural communities and provides a sustainable income source. Many bamboo products can be manufactured locally, reducing transportation emissions.</p>

            <p>At EcoMart, we're committed to bamboo innovation. Our research continues to explore new ways to utilize this remarkable plant for a more sustainable future.</p>

            <p><strong>Try our bamboo products today and join the sustainable revolution!</strong></p>
        `
    }
};

/**
 * Toggles the expanded view of a blog post
 * @param {number} index - Index of the blog post in the array
 */
function toggleBlogPost(index) {
    const blogCard = document.querySelectorAll('.blog-card')[index];
    const readMoreLink = blogCard.querySelector('.read-more');
    const content = blogCard.querySelector('p');

    // Check if already expanded
    if (blogCard.classList.contains('expanded')) {
        // Collapse
        content.innerHTML = content.dataset.shortContent;
        readMoreLink.textContent = 'Read Full Article →';
        blogCard.classList.remove('expanded');
    } else {
        // Expand
        if (!content.dataset.shortContent) {
            content.dataset.shortContent = content.innerHTML;
        }

        content.innerHTML = blogContent[index].fullContent;
        readMoreLink.textContent = 'Read Less ←';
        blogCard.classList.add('expanded');
    }
}

/**
 * Updates cart counter display in header
 */
function updateCartCounter() {
    let cartCounter = document.getElementById('cart-counter');
    if (!cartCounter) {
        // Create cart counter if it doesn't exist
        const nav = document.querySelector('nav ul');
        if (nav) {
            const cartItem = document.createElement('li');
            cartItem.innerHTML = '<a href="cart.html" id="cart-link">Cart <span id="cart-counter" class="cart-counter">0</span></a>';
            nav.appendChild(cartItem);
            cartCounter = document.getElementById('cart-counter');
        }
    }

    // Get cart count from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = count;
}

/**
 * Creates a theme toggle button
 */
function createThemeToggle() {
    const header = document.querySelector('header');
    if (!header) return;

    const themeButton = document.createElement('button');
    themeButton.id = 'theme-toggle';
    themeButton.innerHTML = '🌙';
    themeButton.title = 'Toggle Dark Mode';
    themeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        transition: background-color 0.3s;
    `;

    themeButton.addEventListener('mouseenter', () => {
        themeButton.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });

    themeButton.addEventListener('mouseleave', () => {
        themeButton.style.backgroundColor = 'transparent';
    });

    header.style.position = 'relative';
    header.appendChild(themeButton);

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeButton.innerHTML = '☀️';
    }

    themeButton.addEventListener('click', toggleTheme);
}

/**
 * Toggles between light and dark themes
 */
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeButton.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        themeButton.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize dynamic content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to blog read more links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            toggleBlogPost(index);
        });
    });

    // Update cart counter
    updateCartCounter();

    // Create theme toggle
    createThemeToggle();

    // Add dark theme styles
    const style = document.createElement('style');
    style.textContent = `
        .dark-theme {
            background-color: #1a1a1a;
            color: #ffffff;
        }

        .dark-theme .blog-card,
        .dark-theme .contact-container {
            background-color: #2d2d2d;
            color: #ffffff;
        }

        .dark-theme .blog-card h3,
        .dark-theme label {
            color: #90EE90;
        }

        .dark-theme input,
        .dark-theme textarea {
            background-color: #3d3d3d;
            border-color: #555;
            color: #ffffff;
        }

        .dark-theme input:focus,
        .dark-theme textarea:focus {
            border-color: #90EE90;
            box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.2);
        }

        .cart-counter {
            background-color: #ff6b6b;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-left: 5px;
        }

        .blog-card.expanded {
            animation: expand 0.3s ease-in-out;
        }

        @keyframes expand {
            from { opacity: 0.8; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// Update cart counter when cart changes (for other pages)
window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        updateCartCounter();
    }
});
