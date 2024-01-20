// Configura ScrollReveal
const sb = ScrollReveal();
sb.reveal('.scroll-bttn', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease',
    reset: true,
});

// Agrega un listener para mostrar el botón después de desplazarse
window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const isInHomeSection = window.scrollY < homeSection.offsetHeight;

    if (!isInHomeSection) {
        scrollBttn.style.opacity = '1';
    } else {
        scrollBttn.style.opacity = '0';
    }
});
