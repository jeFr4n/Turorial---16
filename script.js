
// barra de menus para dispositivos pequeños
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 200)
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}

const sr = ScrollReveal({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

// pagina principal
sr.reveal('.hero-text h3, .hero-text h1,.hero-text h4', { origin: 'top' });
sr.reveal('.hero-text', { origin: 'left' });

// sobre mi 
sr.reveal('.about-img, .service-item, .about-text', { origin: 'bottom' });
sr.reveal('.about-text h2, .text-center, .right-contact h2', { origin: 'top' });
sr.reveal('.img-main', { origin: 'right' });


// contacto
sr.reveal('.left-contact', { origin: 'left' })
sr.reveal('.right-contact', { origin: 'right' })

// footer
sr.reveal('.end-section', { origin: 'right' })


//navbarRight
sr.reveal('.nav-container', { origin: 'right' })

// Scroll button

const scrollBttn = document.querySelector('.scroll-bttn');

// home image
document.addEventListener("DOMContentLoaded", function () {
    var imagen = document.querySelector(".img-main");
    imagen.classList.add("loaded");
});

// Progress var
document.addEventListener("DOMContentLoaded", function () {
    // Calcula la altura total de la página
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    // Actualiza la barra de progreso al desplazarse
    window.onscroll = function () {
        const scrolled = (window.scrollY / totalHeight) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    };
});

