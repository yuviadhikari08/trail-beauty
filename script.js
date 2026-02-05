// Scroll-triggered animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Lightbox for portfolio
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Testimonial slider auto-scroll (optional)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials[testimonialIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}, 5000);