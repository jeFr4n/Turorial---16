document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveNavLink(currentSection) {
        navLinks.forEach(function (navLink) {
            const sectionId = navLink.getAttribute("href").slice(1);
            const parentListItem = navLink.parentElement;

            parentListItem.classList.remove("active");

            if (sectionId === currentSection) {
                parentListItem.classList.add("active");
            }
        });
    }

    function getCurrentSection() {
        let currentSection = "";

        // Obtener todas las secciones
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 2 &&
                pageYOffset < sectionTop + sectionHeight / 2) {
                currentSection = section.id;
            }
        });

        return currentSection;
    }

    function handleScroll() {
        const currentSection = getCurrentSection();
        setActiveNavLink(currentSection);
    }

    // Llama a handleScroll al cargar la página para resaltar la sección inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
});
