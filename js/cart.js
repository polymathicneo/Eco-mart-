// Cart functionality for EcoMart website
// This module handles shopping cart operations including adding items,
// persisting cart data, and updating cart display across the website

let cart = JSON.parse(localStorage.getItem('cart')) || [];

/**
 * Adds a product to the shopping cart
 * Handles both new items and quantity increases for existing items
 * @param {string} productName - The name of the product
 * @param {string} price - The price string (e.g., "NPR20")
 * @param {string} imageSrc - The URL of the product image
 */
function addToCart(productName, price, imageSrc) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        // Increase quantity for existing item
        existingItem.quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            name: productName,
            price: parseFloat(price.replace(/NPR|Rs\.?\s*/g, '')), // Extract numeric price
            image: imageSrc,
            quantity: 1
        });
    }

    // Persist cart data to localStorage for cross-session availability
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart display elements across the site
    updateCartDisplay();

    // Provide user feedback with popup notification
    alert(`${productName} added to cart!`);
}

// Function to update cart display (can be expanded later)
function updateCartDisplay() {
    // Update cart counter in navigation if available
    if (typeof updateCartCounter === 'function') {
        updateCartCounter();
    }

    // Log cart status for debugging
    console.log('Cart updated:', cart);
}

// Function to get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to get cart items count
function getCartItemsCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Export functions for potential use in other scripts
window.cartFunctions = {
    addToCart,
    getCartTotal,
    getCartItemsCount,
    updateCartDisplay
};
