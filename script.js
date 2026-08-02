document.addEventListener("DOMContentLoaded", () => {
    
    // Header Scroll Effect
    const header = document.querySelector(".header-nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Active Nav Link Observer
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

});
