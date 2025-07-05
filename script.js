import { createTimeline, stagger, animate } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
})

const textWrapper = document.querySelector('.hero-title');
if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const tl = createTimeline({loop: false, direction: 'alternate'});
    tl.add('.hero-title .letter', {
        opacity: [0, 1],
        translateY: [-200, 0],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: stagger(70),
    });
}

if (document.querySelector('.project-grid')) {
    animate('.project-card', {
        translateY: [50, 0],
        easing: 'easeOutExpo',
        opacity: [0, 1],
        delay: stagger(100),
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

const revealElements = document.querySelectorAll('.reveal-section');
revealElements.forEach(el => observer.observe(el));
