// Initialize gradient animation
new Granim({
    element: '#gradient-canvas',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#4f46e5', '#818cf8'],
                ['#3730a3', '#6366f1'],
                ['#1e1b4b', '#4f46e5']
            ],
            transitionSpeed: 7000
        }
    }
});

// Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.glass-card, .hero-content, .hero-image').forEach(el => {
    observer.observe(el);
});

// Effet de parallaxe sur les images
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});
