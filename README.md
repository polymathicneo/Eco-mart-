# EcoMart - Sustainable E-Commerce Website

## Coursework Project for Introduction to Information Systems

### Project Overview
EcoMart is a multi-page e-commerce website designed to sell sustainable lifestyle products including bamboo water bottles, organic cotton tote bags, and reusable kitchen items. The website demonstrates the impact of technology on daily life through its blog section and provides comprehensive product information, team details, and research analysis.

### Team Members
- **Shubham Sedai** - Lead Developer
- **Monika Khatri** - Content Creator & Researcher
- **Babisha Karki** - Content Writer & Voice-over Artist
- **Arayan Timalsena** - UI/UX Designer

### Technologies Used
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with internal, inline, and external approaches
- **JavaScript** - Interactive functionality and form validation

### File Structure
```
EcoMart_Website/
├── index.html              # Homepage with hero section and site overview
├── products.html           # Product catalog with shopping cart functionality
├── blog.html              # Blog posts about technology's impact on daily life
├── about.html             # Team member portfolios and project information
├── research.html          # Comparative analysis of e-commerce websites
├── contact.html           # Contact form with validation
├── cart.html              # Shopping cart management
├── css/
│   └── style.css          # External CSS with comprehensive styling
├── js/
│   ├── cart.js            # Shopping cart functionality
│   ├── validation.js      # Form validation functions
│   └── dynamic-content.js # Dynamic content and UI interactions
├── images/                # Product and team member images
├── testing.md             # Comprehensive testing documentation
└── README.md              # Project documentation
```

### Key Features Implemented

#### 1. Multi-page Website Structure (7 pages)
- **Homepage**: Hero section, feature overview, navigation
- **Products Page**: E-commerce catalog with add-to-cart functionality
- **Blog Page**: Technology impact articles with expandable content
- **About Us**: Team member portfolios with detailed information
- **Research**: Comparative website analysis with table formatting
- **Contact**: Functional form with validation
- **Cart**: Shopping cart management with quantity controls

#### 2. HTML5 Implementation
- **Semantic Tags**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`, `<table>`
- **Meta Tags**: Complete meta information for SEO and responsiveness
- **Attributes**: Proper use of attributes for forms, images, and links
- **Comments**: Comprehensive commenting throughout HTML files
- **Structure**: Well-organized and properly nested HTML elements

#### 3. CSS3 Implementation
- **External CSS**: Main styling in `css/style.css` with comments
- **Internal CSS**: Page-specific styles within `<style>` tags
- **Inline CSS**: Direct style attributes on elements
- **Responsive Design**: Mobile-first approach with media queries
- **Modern Features**: CSS Grid, Flexbox, transitions, and animations

#### 4. JavaScript Functionality
- **Functions**: Multiple reusable functions with proper documentation
- **Popup Features**: Alert dialogs and confirmation prompts
- **Dynamic Content**: Blog post expansion, cart counter updates
- **Form Validation**: Client-side validation with error handling
- **Event Handling**: Interactive elements with event listeners

#### 5. Advanced Features
- **Shopping Cart**: Add/remove items, quantity management, localStorage persistence
- **Newsletter Subscription**: Form with popup confirmations
- **Theme Toggle**: Dark/light mode switching with localStorage
- **Responsive Navigation**: Cart icon with live counter
- **Blog Expansion**: Dynamic content loading

### CSS Implementation Details

#### External CSS (css/style.css)
```css
/* Color Palette and Variables */
:root {
    --primary-color: #2E7D32;
    --secondary-color: #8D6E63;
    --accent-color: #FBC02D;
    /* ... additional variables */
}

/* Global Styles */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Lato', sans-serif; }

/* Component-specific styles with comments */
/* HEADER & NAVIGATION */
/* HERO SECTION */
/* FEATURES GRID */
/* FOOTER */
/* RESPONSIVE */
```

#### Internal CSS (Within HTML pages)
```html
<style>
    /* Page-specific customizations */
    .hero {
        background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
        /* Custom hero styling */
    }
</style>
```

#### Inline CSS (Style attributes)
```html
<h2 style="font-size: 3rem; margin-bottom: 1rem; color: white;">Welcome</h2>
<a style="display: inline-block; background-color: #FBC02D; color: #2E7D32;">Button</a>
```

### JavaScript Implementation Details

#### Core Functions
- `updateCartCounter()`: Updates cart icon counter across pages
- `toggleBlogPost(index)`: Expands/collapses blog content
- `validateContactForm(form)`: Comprehensive form validation
- `handleNewsletterSubscription(event)`: Newsletter signup with popups
- `showNotification(message, type)`: User feedback notifications

#### Popup Features
- Alert dialogs for form validation errors
- Confirmation prompts for newsletter subscription
- Success messages for completed actions
- Interactive confirmations for cart operations

### Testing Documentation
Comprehensive testing has been conducted with 10 test cases covering:
- Navigation functionality
- Cart operations
- Form validation
- Newsletter subscription
- Blog expansion
- Responsive design
- Cross-browser compatibility
- Accessibility
- Theme toggle
- Image loading

All tests passed successfully with 100% pass rate.

### Impact of Technology (Blog Content)
The blog section demonstrates how technology affects daily life through:
- Communication advancements
- Remote work capabilities
- Smart home integration
- E-commerce convenience
- Environmental considerations and sustainable tech solutions

### Research Analysis
Comparative analysis of e-commerce websites including:
- Design aesthetics comparison
- Navigation complexity assessment
- Product focus evaluation
- User experience analysis
- Performance metrics

### Accessibility & Usability
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Mobile-responsive design
- Clear form labels and error messages

### Installation & Usage
1. Clone or download the project files
2. Ensure proper folder structure is maintained
3. Open `index.html` in a web browser
4. Navigate through all pages using the header menu
5. Test shopping cart functionality
6. Try the newsletter subscription in the footer

### Browser Compatibility
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari (desktop and mobile)

### Future Enhancements
- Backend integration for real e-commerce functionality
- User authentication and accounts
- Payment gateway integration
- Advanced search and filtering
- Social media integration
- Analytics and tracking

---

**Course**: Introduction to Information Systems (CC4057NI/CC4058NI)
**Academic Year**: 2025/2026
**Submission Date**: January 30, 2026
**Group Members**: Shubham Sedai, Monika Khatri, Babisha Karki, Arayan Timalsena
