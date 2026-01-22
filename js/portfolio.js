// Portfolio Modal JavaScript for About Us page

const teamMembers = [
    {
        name: "Shubham Sedai",
        role: "Lead Developer",
        image: "images/shubham.jpeg",
        skills: "HTML, CSS, JavaScript",
        expertise: "Problem solving, Team coordination",
        education: "BSc (Hons) Computing",
        contribution: "Core coding and architecture"
    },
    {
        name: "Monika Khatri",
        role: "Designer & Researcher",
        image: "images/monika.jpeg",
        skills: "Layout planning, UI Design",
        expertise: "Creative thinking, Market research",
        education: "BSc (Hons) Computing",
        contribution: "UI design and competitor research"
    },
    {
        name: "Babisha Karki",
        role: "Content Writer",
        image: "images/babisha.PNG",
        skills: "Writing, SEO basics",
        expertise: "Communication, Organization",
        education: "BSc (Hons) Computing",
        contribution: "Website text and product descriptions"
    },
    {
        name: "Arayan Timalsena",
        role: "Testing & Documentation",
        image: "images/arayan.jpeg",
        skills: "QA Testing, Documentation",
        expertise: "Attention to detail, Patience",
        education: "BSc (Hons) Computing",
        contribution: "Quality assurance and process docs"
    },
    {
        name: "Pershek Chaudhary",
        role: "Backend & Database Support",
        image: "images/pershek.jpg",
        skills: "Database Management, API Integration",
        expertise: "SQL, Server-side logic",
        education: "BSc (Hons) Computing",
        contribution: "Backend support and data integrity"
    }
];

let currentMemberIndex = 0;

// Open modal and show specific member
function openPortfolio(memberIndex) {
    currentMemberIndex = memberIndex;
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'flex';
    updatePortfolioDisplay();
}

// Close modal
function closePortfolio() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
}

// Navigate to previous member
function prevMember() {
    currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
    updatePortfolioDisplay();
}

// Navigate to next member
function nextMember() {
    currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
    updatePortfolioDisplay();
}

// Update modal content
function updatePortfolioDisplay() {
    const member = teamMembers[currentMemberIndex];

    document.getElementById('portfolioImage').src = member.image;
    document.getElementById('portfolioImage').alt = member.name;
    document.getElementById('portfolioName').textContent = member.name;
    document.getElementById('portfolioRole').textContent = member.role;
    document.getElementById('portfolioSkills').textContent = member.skills;
    document.getElementById('portfolioExpertise').textContent = member.expertise;
    document.getElementById('portfolioEducation').textContent = member.education;
    document.getElementById('portfolioContribution').textContent = member.contribution;

    // Update counter
    document.getElementById('memberCounter').textContent = `${currentMemberIndex + 1} / ${teamMembers.length}`;
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target === modal) {
        closePortfolio();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('portfolioModal');
    if (modal.style.display === 'flex') {
        if (event.key === 'Escape') {
            closePortfolio();
        } else if (event.key === 'ArrowLeft') {
            prevMember();
        } else if (event.key === 'ArrowRight') {
            nextMember();
        }
    }
});
