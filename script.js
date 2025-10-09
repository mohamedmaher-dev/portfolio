// Portfolio JavaScript - Handles dynamic content loading and interactions

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the portfolio
    initializePortfolio();
});

function initializePortfolio() {
    // Initialize theme first
    initializeTheme();

    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Load portfolio data
    loadPortfolioData();

    // Initialize navigation
    initializeNavigation();

    // Initialize animations
    initializeAnimations();

    // Initialize interactive elements
    initializeInteractiveElements();

    // Initialize contact form
    initializeContactForm();

}

// Soft parallax for orbs background
(function initHeroParallax() {
    const hero = document.getElementById('home');
    const bg = document.querySelector('.bg-orbs');
    if (!hero || !bg) return;

    let rafId = null;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    function onMove(e) {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 20; // max 20px offset
        targetY = y * 20;
        if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function onLeave() {
        targetX = 0; targetY = 0;
        if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function tick() {
        // ease towards target
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;
        bg.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
            rafId = requestAnimationFrame(tick);
        } else {
            rafId = null;
        }
    }

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
})();

function loadPortfolioData() {
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not found. Make sure data.js is loaded.');
        return;
    }

    // Load personal information
    loadPersonalInfo();

    // Load about section
    loadAboutSection();

    // Load experience
    loadExperience();

    // Load projects
    loadProjects();

    // Load services
    loadServices();

    // Load contact information
    loadContactInfo();

    // Apply theme settings
    applyThemeSettings();

    // Update SEO
    updateSEO();
}

function loadPersonalInfo() {
    const { personal } = portfolioData;

    // Update navigation name
    const navName = document.getElementById('nav-name');
    if (navName) navName.textContent = personal.name;

    // Update hero section
    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = personal.name;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = personal.title;

    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.src = personal.profileImage;
        profileImage.alt = personal.name;
    }

    const cvBtn = document.getElementById('cv-download-btn');
    if (cvBtn) {
        cvBtn.href = personal.cv;
    }

    // Load social links
    loadSocialLinks();

    // Update footer name
    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = personal.name;
}

function loadSocialLinks() {
    const { social } = portfolioData.personal;

    // Hero social links
    const heroSocial = document.getElementById('hero-social');
    if (heroSocial) {
        heroSocial.innerHTML = createSocialLinks(social);
    }

    // Footer social links
    const footerSocial = document.getElementById('footer-social');
    if (footerSocial) {
        footerSocial.innerHTML = createSocialLinks(social);
    }
}

function createSocialLinks(social) {
    const socialIcons = {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        portfolio: 'fas fa-globe',
        mostaql: 'fas fa-briefcase'
    };

    return Object.entries(social)
        .map(([platform, url]) => {
            const icon = socialIcons[platform] || 'fas fa-link';
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${platform}">
                        <i class="${icon}"></i>
                    </a>`;
        })
        .join('');
}

function loadAboutSection() {
    const { about } = portfolioData;

    // Load about summary
    const aboutSummary = document.getElementById('about-summary');
    if (aboutSummary) {
        aboutSummary.textContent = about.summary;
    }

    // Load stats
    const statsContainer = document.getElementById('about-stats');
    if (statsContainer && about.stats) {
        statsContainer.innerHTML = about.stats.map(stat => `
            <div class="stat-item">
                <h3 class="stat-number">${stat.value}</h3>
                <p class="stat-label">${stat.label}</p>
            </div>
        `).join('');
    }

    // Load skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = Object.entries(about.skills)
            .map(([category, skills]) => `
                <div class="skill-category">
                    <h4>${category}</h4>
                    <div class="skill-tags">
                        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `).join('');
    }
}

function loadExperience() {
    const { experience } = portfolioData;
    const timeline = document.getElementById('experience-timeline');

    if (timeline) {
        timeline.innerHTML = experience.map((exp, index) => `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period">${exp.period} • ${exp.location}</div>
                    <div class="timeline-description">
                        <ul>
                            ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                        </ul>
                        ${exp.link ? `<a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 16px; display: inline-block;">View Profile</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function loadProjects() {
    const { projects } = portfolioData;
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map((project, index) => `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}" data-project-index="${index}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/default-project.svg'">
                    <div class="project-overlay">
                        <div class="project-links">
                            ${createProjectLinks(project.links)}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Add click event listeners to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function () {
                const projectIndex = this.dataset.projectIndex;
                openProjectModal(projects[projectIndex]);
            });
        });
    }
}

function createProjectLinks(links) {
    const linkIcons = {
        github: 'fab fa-github',
        demo: 'fas fa-external-link-alt',
        playstore: 'fab fa-google-play',
        apkpure: 'fas fa-download',
        drive: 'fab fa-google-drive'
    };

    return Object.entries(links)
        .filter(([key, url]) => url)
        .map(([platform, url]) => {
            const icon = linkIcons[platform] || 'fas fa-link';
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="project-link" title="${platform}" onclick="event.stopPropagation()">
                        <i class="${icon}"></i>
                    </a>`;
        })
        .join('');
}

function loadServices() {
    const { services } = portfolioData;
    const servicesGrid = document.getElementById('services-grid');

    if (servicesGrid) {
        servicesGrid.innerHTML = services.map((service, index) => `
            <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
            </div>
        `).join('');
    }
}

function loadContactInfo() {
    const { contact } = portfolioData;

    // Update contact section
    const contactTitle = document.getElementById('contact-title');
    if (contactTitle) contactTitle.textContent = contact.title;

    const contactDescription = document.getElementById('contact-description');
    if (contactDescription) contactDescription.textContent = contact.subtitle;

    const contactSubtitle = document.getElementById('contact-subtitle');
    if (contactSubtitle) contactSubtitle.textContent = contact.subtitle;

    // Load contact methods
    const contactMethods = document.getElementById('contact-methods');
    if (contactMethods) {
        contactMethods.innerHTML = contact.methods.map(method => `
            ${method.link ? `<a href="${method.link}" class="contact-method">` : '<div class="contact-method">'}
                <div class="contact-method-icon">${method.icon}</div>
                <div class="contact-method-info">
                    <h4>${method.type}</h4>
                    <p>${method.value}</p>
                </div>
            ${method.link ? '</a>' : '</div>'}
        `).join('');
    }
}

function initializeTheme() {
    // Get saved theme or use default
    const savedTheme = localStorage.getItem('portfolio-theme');
    const defaultTheme = portfolioData?.settings?.theme?.defaultMode || 'dark';
    const currentTheme = savedTheme || defaultTheme;

    // Apply theme
    setTheme(currentTheme);

    // Initialize theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        updateThemeIcon(currentTheme);
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
            themeIcon.parentElement.title = 'Switch to Light Mode';
        } else {
            themeIcon.className = 'fas fa-moon';
            themeIcon.parentElement.title = 'Switch to Dark Mode';
        }
    }
}

function applyThemeSettings() {
    // Theme is now handled by CSS custom properties and data attributes
    // This function is kept for compatibility but theme switching is handled by initializeTheme()
}

function updateSEO() {
    const { seo } = portfolioData.settings;

    // Update title
    document.title = seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = seo.description;

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.content = seo.keywords;
}

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function initializeAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Typing animation for hero subtitle
    const heroSubtitle = document.getElementById('hero-title');
    if (heroSubtitle) {
        typeWriter(heroSubtitle, portfolioData.personal.title, 100);
    }
}

function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    // Start typing after a delay
    setTimeout(type, 1500);
}

function initializeInteractiveElements() {
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Project filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter projects (simplified - you can enhance this based on project categories)
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    // You can add data-category attributes to project cards for better filtering
                    card.style.display = 'block';
                }
            });
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Create mailto link
            const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Thank you for your message! Your email client should open now.', 'success');

            // Reset form
            this.reset();
        });
    }
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    if (modal && modalBody) {
        modalBody.innerHTML = `
            <div style="padding: 40px;">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 24px;" onerror="this.src='assets/default-project.svg'">
                <h2 style="margin-bottom: 16px; color: var(--text-color);">${project.title}</h2>
                <p style="color: var(--light-text-color); line-height: 1.6; margin-bottom: 24px;">${project.description}</p>
                <div style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 12px; color: var(--text-color);">Technologies Used:</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    ${createProjectLinks(project.links)}
                </div>
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Modal event listeners
document.addEventListener('click', function (e) {
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');

    if (e.target === modal || e.target === modalClose) {
        closeProjectModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLazyLoading);
} else {
    initializeLazyLoading();
}

// Constellation background with connecting lines
function initializeConstellationBackground() {
    const hero = document.getElementById('home');
    const stars = document.querySelectorAll('.constellation-bg .star');
    const canvas = document.querySelector('.connections-canvas');

    if (!hero || stars.length === 0 || !canvas) return;

    const ctx = canvas.getContext('2d');
    let mouseX = 0;
    let mouseY = 0;
    let animationId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }

    // Star positions array
    const starPositions = [];

    // Initialize star positions
    function initializeStars() {
        starPositions.length = 0;
        stars.forEach(star => {
            const rect = star.getBoundingClientRect();
            const heroRect = hero.getBoundingClientRect();
            starPositions.push({
                x: rect.left + rect.width / 2 - heroRect.left,
                y: rect.top + rect.height / 2 - heroRect.top,
                element: star,
                baseX: rect.left + rect.width / 2 - heroRect.left,
                baseY: rect.top + rect.height / 2 - heroRect.top
            });
        });
    }

    // Draw connecting lines
    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const currentTheme = document.documentElement.getAttribute('data-theme');

        for (let i = 0; i < starPositions.length; i++) {
            for (let j = i + 1; j < starPositions.length; j++) {
                const star1 = starPositions[i];
                const star2 = starPositions[j];

                const dx = star2.x - star1.x;
                const dy = star2.y - star1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Only connect stars that are close enough
                if (distance < 250) {
                    const opacity = Math.max(0, 1 - distance / 250);

                    // Check if mouse is near the connection
                    const mouseDistance = Math.min(
                        distanceToLine(mouseX, mouseY, star1.x, star1.y, star2.x, star2.y),
                        distance
                    );

                    const mouseInfluence = Math.max(0, 1 - mouseDistance / 120);
                    const finalOpacity = opacity * (0.15 + mouseInfluence * 0.5);

                    if (currentTheme === 'dark') {
                        ctx.strokeStyle = `rgba(251, 191, 36, ${finalOpacity})`;
                    } else {
                        ctx.strokeStyle = `rgba(59, 130, 246, ${finalOpacity})`;
                    }

                    ctx.lineWidth = 1.5 + mouseInfluence * 3;
                    ctx.beginPath();
                    ctx.moveTo(star1.x, star1.y);
                    ctx.lineTo(star2.x, star2.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Distance from point to line segment
    function distanceToLine(px, py, x1, y1, x2, y2) {
        const A = px - x1;
        const B = py - y1;
        const C = x2 - x1;
        const D = y2 - y1;

        const dot = A * C + B * D;
        const lenSq = C * C + D * D;

        if (lenSq === 0) return Math.sqrt(A * A + B * B);

        let param = dot / lenSq;
        param = Math.max(0, Math.min(1, param));

        const xx = x1 + param * C;
        const yy = y1 + param * D;

        const dx = px - xx;
        const dy = py - yy;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Mouse interaction
    function updateMouse(e) {
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }

    function resetMouse() {
        mouseX = -1000;
        mouseY = -1000;
    }

    // Animation loop
    function animate() {
        // Update star positions based on their floating animation
        initializeStars();
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    initializeStars();
    animate();

    // Event listeners
    hero.addEventListener('mousemove', updateMouse);
    hero.addEventListener('mouseleave', resetMouse);
    window.addEventListener('resize', () => {
        resizeCanvas();
        initializeStars();
    });

    // Cleanup function
    return () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        hero.removeEventListener('mousemove', updateMouse);
        hero.removeEventListener('mouseleave', resetMouse);
        window.removeEventListener('resize', resizeCanvas);
    };
}

// Initialize constellation background when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeConstellationBackground);
} else {
    initializeConstellationBackground();
}

