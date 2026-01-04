# EcoMart Website Testing Documentation

## Test Case 1: Navigation Functionality
**Test ID:** TC001
**Test Description:** Verify that all navigation links work correctly and lead to the appropriate pages
**Test Steps:**
1. Open the EcoMart website homepage
2. Click on each navigation link (Home, Products, Blog, About Us, Research)
3. Verify that each link loads the correct page
4. Check that the active page is highlighted in the navigation
**Expected Result:** All navigation links work and highlight the current page correctly
**Actual Result:** ✅ PASS - All navigation links function properly
**Status:** PASS

## Test Case 2: Cart Functionality
**Test ID:** TC002
**Test Description:** Verify that the shopping cart adds items and updates the counter correctly
**Test Steps:**
1. Navigate to the Products page
2. Click "Add to Cart" on any product
3. Check that the cart counter in the header updates to show "1"
4. Add another item to the cart
5. Verify the counter shows "2"
6. Click on the cart icon and verify items are displayed in cart
**Expected Result:** Cart counter updates correctly and cart page shows added items
**Actual Result:** ✅ PASS - Cart functionality works as expected
**Status:** PASS

## Test Case 3: Form Validation
**Test ID:** TC003
**Test Description:** Test contact form validation functionality
**Test Steps:**
1. Navigate to the Contact page
2. Leave all form fields empty and click "Send Message"
3. Verify that appropriate error messages appear
4. Fill in invalid email format and submit
5. Verify email validation error appears
6. Fill all fields correctly and submit
7. Verify success message appears
**Expected Result:** Form validation prevents submission with errors and allows valid submissions
**Actual Result:** ✅ PASS - Form validation works correctly with proper error handling
**Status:** PASS

## Test Case 4: Newsletter Subscription
**Test ID:** TC004
**Test Description:** Test newsletter subscription popup functionality
**Test Steps:**
1. Scroll to footer on any page
2. Enter an email address in the newsletter form
3. Click "Subscribe" button
4. Verify confirmation popup appears
5. Click "OK" to confirm subscription
6. Verify success popup and notification appear
**Expected Result:** Newsletter subscription shows confirmation popup and success message
**Actual Result:** ✅ PASS - Newsletter subscription with popup confirmations works
**Status:** PASS

## Test Case 5: Blog Expansion Feature
**Test ID:** TC005
**Test Description:** Test dynamic blog content expansion functionality
**Test Steps:**
1. Navigate to the Blog page
2. Click "Read Full Article" on any blog post
3. Verify the blog post expands to show full content
4. Click "Read Less" button
5. Verify the blog post collapses to show original content
**Expected Result:** Blog posts expand and collapse dynamically as expected
**Actual Result:** ✅ PASS - Blog expansion functionality works correctly
**Status:** PASS

## Test Case 6: Responsive Design
**Test ID:** TC006
**Test Description:** Test website responsiveness on different screen sizes
**Test Steps:**
1. Open website in browser
2. Resize browser window to mobile size (width < 768px)
3. Verify navigation becomes mobile-friendly
4. Check that footer sections stack vertically
5. Test on actual mobile device if available
**Expected Result:** Website layout adapts to different screen sizes
**Actual Result:** ✅ PASS - Responsive design works correctly
**Status:** PASS

## Test Case 7: Cross-browser Compatibility
**Test ID:** TC007
**Test Description:** Test website functionality across different browsers
**Test Steps:**
1. Open website in Chrome
2. Test all functionality (navigation, forms, cart)
3. Repeat in Firefox
4. Repeat in Edge/Safari if available
5. Verify consistent behavior across browsers
**Expected Result:** Website works consistently across different browsers
**Actual Result:** ✅ PASS - Cross-browser compatibility maintained
**Status:** PASS

## Test Case 8: Accessibility Check
**Test ID:** TC008
**Test Description:** Basic accessibility testing for screen readers and keyboard navigation
**Test Steps:**
1. Use Tab key to navigate through all interactive elements
2. Verify all links and buttons are accessible via keyboard
3. Check that form fields have proper labels
4. Verify sufficient color contrast for text readability
**Expected Result:** Website is accessible to users with disabilities
**Actual Result:** ✅ PASS - Basic accessibility requirements met
**Status:** PASS

## Test Case 9: Theme Toggle Functionality
**Test ID:** TC009
**Test Description:** Test dark/light theme toggle functionality
**Test Steps:**
1. Look for theme toggle button in header (moon/sun icon)
2. Click to toggle between light and dark themes
3. Verify theme changes apply to entire page
4. Refresh page and verify theme preference is saved
**Expected Result:** Theme toggle works and preference persists
**Actual Result:** ✅ PASS - Theme toggle functionality works correctly
**Status:** PASS

## Test Case 10: Image Loading and Display
**Test ID:** TC010
**Test Description:** Verify all images load correctly and display properly
**Test Steps:**
1. Navigate through all pages
2. Check that all product images load
3. Verify team member photos display correctly
4. Test on slow connection to ensure graceful loading
**Expected Result:** All images load and display correctly
**Actual Result:** ✅ PASS - All images load properly
**Status:** PASS

## Summary
**Total Test Cases:** 10
**Passed:** 10
**Failed:** 0
**Pass Rate:** 100%

All core functionality has been tested and verified to work correctly. The website meets all basic usability and functionality requirements.
