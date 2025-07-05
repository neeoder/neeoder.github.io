document.addEventListener('DOMContentLoaded', () => {
    const textWrapper = document.querySelector('.hero-title');

    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false})
            .add({
                targets: '.hero-title .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70 * i
            });
    }
});
