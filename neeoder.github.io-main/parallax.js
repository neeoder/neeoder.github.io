const parallax_el = document.querySelectorAll('.parallax');

const revealOnScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    parallax_el.forEach(el => {
        if (scrollPos + window.innerHeight > el.offsetTop) {
            el.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
