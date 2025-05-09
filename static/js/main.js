// Matrix rain animation for hacker theme
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('matrix-background');
        
        // Set canvas styles
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.15'; // Subtle effect
        this.canvas.style.pointerEvents = 'none'; // Don't interfere with clicks
        
        document.body.prepend(this.canvas);
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.columns = 0;
        this.drops = [];
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}/\\[]<>?!@#$%^&*()_-+=';
        this.fontSize = 14;
        this.init();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.init(); // Reinitialize when resized
    }
    
    init() {
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];
        
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100; // Start above screen at random positions
        }
    }
    
    draw() {
        // Semi-transparent overlay to create trailing effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Green text
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = this.fontSize + 'px monospace';
        
        // Draw each character
        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const text = this.characters[Math.floor(Math.random() * this.characters.length)];
            
            // x coordinate is index * font size, y coordinate is the drop position
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            // Reset if drop reaches bottom or randomly for some drops
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            // Increment y coordinate
            this.drops[i]++;
        }
    }
    
    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Glitch text effect for hacker theme
class GlitchText {
    constructor(elements) {
        this.elements = elements;
        this.originalTexts = [];
        
        // Store original text content
        this.elements.forEach((el, i) => {
            this.originalTexts[i] = el.textContent;
        });
        
        // Start glitch effect
        this.glitchInterval = setInterval(() => this.glitchEffect(), 3000);
    }
    
    getRandomChar() {
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}[]|;:,./<>?';
        return chars[Math.floor(Math.random() * chars.length)];
    }
    
    glitchEffect() {
        this.elements.forEach((el, index) => {
            const originalText = this.originalTexts[index];
            
            // Skip if element no longer exists
            if (!el) return;
            
            // Only glitch sometimes
            if (Math.random() < 0.3) {
                let iterations = 0;
                const intervalId = setInterval(() => {
                    el.textContent = originalText.split('')
                        .map((char, i) => {
                            if (i < iterations) {
                                return originalText[i];
                            }
                            return this.getRandomChar();
                        })
                        .join('');
                    
                    if (iterations >= originalText.length) {
                        clearInterval(intervalId);
                        el.textContent = originalText;
                    }
                    
                    iterations += 1 / 3; // Control speed
                }, 30);
            }
        });
    }
}

// More professional subtle animation effects
class ProfessionalEffects {
    constructor() {
        // Create subtle grid in background for professional look
        this.gridContainer = document.createElement('div');
        this.gridContainer.classList.add('grid-container');
        document.body.appendChild(this.gridContainer);
        this.createGrid();
    }
    
    // Create a subtle grid pattern in the background for professional appearance
    createGrid() {
        const gridSize = 60; // Larger grid for more subtle effect
        const width = Math.max(document.documentElement.scrollWidth, window.innerWidth);
        const height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
        
        // Calculate grid points
        const cols = Math.ceil(width / gridSize);
        const rows = Math.ceil(height / gridSize);
        
        // Create only some random grid points for a subtle professional effect
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // Only create about 3% of possible grid points - much more subtle
                if (Math.random() > 0.97) {
                    const gridPoint = document.createElement('div');
                    gridPoint.classList.add('grid-point');
                    
                    // Position
                    gridPoint.style.top = `${i * gridSize}px`;
                    gridPoint.style.left = `${j * gridSize}px`;
                    
                    // Smaller, more subtle size and lower opacity
                    const size = 1 + Math.random() * 2;
                    const opacity = 0.05 + Math.random() * 0.15;
                    
                    gridPoint.style.width = `${size}px`;
                    gridPoint.style.height = `${size}px`;
                    gridPoint.style.opacity = opacity.toString();
                    
                    this.gridContainer.appendChild(gridPoint);
                }
            }
        }
    }
}

// Handle mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Matrix rain effect
    const matrixRain = new MatrixRain();
    
    // Initialize professional effects
    const professionalEffects = new ProfessionalEffects();
    
    // Initialize glitch effect on headings
    const headings = document.querySelectorAll('h1, h2, h3');
    const glitchText = new GlitchText(headings);
    
    // Set animation order for cards
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        card.style.setProperty('--animation-order', index);
    });
    
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.setProperty('--animation-order', index);
    });
    
    // Parallax scrolling effect
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Apply parallax to hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollY * 0.5 + 'px';
        }
        
        // Fade in elements on scroll
        document.querySelectorAll('.skill-card, .project-card, .expertise-item').forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= viewportHeight * 0.8 && rect.bottom >= 0) {
                el.classList.add('fade-in-element');
            }
        });
    });
    
    // Add mobile menu toggle if it exists
    const mobileMenuButton = document.querySelector('.mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skill progress animation
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%';
            });
        };

        // Animate on page load
        animateSkills();

        // Animate on scroll if elements are in viewport
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const skillsSection = document.querySelector('.skills-section');
            
            if (skillsSection && scrollPosition > skillsSection.offsetTop) {
                animateSkills();
            }
        });
    }

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                const projects = document.querySelectorAll('.project-card');
                
                projects.forEach(project => {
                    if (filterValue === 'all') {
                        project.style.display = 'block';
                    } else if (project.classList.contains(filterValue)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    }

    // Add encrypted content to project images
    const encryptedImages = document.querySelectorAll('[data-encrypt]');
    const encryptionMessages = [
        'ACCESSING RESTRICTED DATA...\n01001110 01101111 01110111 00100000\n10110011 10101010 10110101\nDECRYPTING...\nACCESS GRANTED',
        'BYPASS SECURITY PROTOCOL...\n01010011 01100101 01100011 01110101\n10101100 10011010 11010101\nFIREWALL DISABLED\nINITIATING ROOTKIT',
        'INJECTING PAYLOAD...\n01001000 01100001 01100011 01101011\n11001010 10101011 11010101\nEXPLOIT SUCCESSFUL\nGAINING SHELL ACCESS',
        'INTERCEPTING TRAFFIC...\n01001110 01100101 01110100 01110111\n10110101 10001010 10110101\nPACKET ANALYSIS COMPLETE\nDISCOVERED VULNERABILITY',
        'BRUTE FORCE ATTACK...\n01010000 01100001 01110011 01110011\n11010101 10101010 11010101\nPASSWORD RECOVERED\nACCESS: ROOT'
    ];
    
    encryptedImages.forEach(image => {
        // Set a random encryption message
        const randomMessage = encryptionMessages[Math.floor(Math.random() * encryptionMessages.length)];
        image.setAttribute('data-encrypt', randomMessage);
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            
            if (name && name.value.trim() === '') {
                isValid = false;
                name.classList.add('error');
            } else if (name) {
                name.classList.remove('error');
            }
            
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    isValid = false;
                    email.classList.add('error');
                } else {
                    email.classList.remove('error');
                }
            }
            
            if (message && message.value.trim() === '') {
                isValid = false;
                message.classList.add('error');
            } else if (message) {
                message.classList.remove('error');
            }
            
            if (isValid) {
                // Here you would normally send the form data to your server
                alert('Form submitted successfully! (This is just a demo)');
                contactForm.reset();
            } else {
                alert('Please fill out all required fields correctly.');
            }
        });
    }
});