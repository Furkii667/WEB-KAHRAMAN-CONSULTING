```javascript
/* =========================================================
   KAHRAMAN CONSULTING
   Main JavaScript
   ========================================================= */


/* =========================================================
   1. MENU MOBILE
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Fermer le menu lorsqu'on clique sur un lien */

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   2. NAVBAR AU SCROLL
   ========================================================= */

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   3. ANIMATION DES ÉLÉMENTS AU SCROLL
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .process-item, .intro-content, .section-heading"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}


/* =========================================================
   4. SMOOTH SCROLL
   ========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            header ? header.offsetHeight : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   5. ANNÉE AUTOMATIQUE DANS LE FOOTER
   ========================================================= */

const currentYear =
    document.querySelector(".current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   6. BOUTON RETOUR EN HAUT
   ========================================================= */

const createBackToTopButton = () => {

    const button =
        document.createElement("button");

    button.className = "back-to-top";

    button.setAttribute(
        "aria-label",
        "Retour en haut"
    );

    button.innerHTML = "↑";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

};

createBackToTopButton();


/* =========================================================
   7. CONSOLE
   ========================================================= */

console.log(
    "KAHRAMAN Consulting — site chargé avec succès."
);
```
