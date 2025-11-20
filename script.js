// Mobile navigation toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('.nav-links a');
for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Contact form animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.reset();
        contactForm.querySelector('button').textContent = 'Message Sent!';
        setTimeout(() => {
            contactForm.querySelector('button').textContent = 'Send Message';
        }, 2000);
    });
}
