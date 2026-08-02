// --- UTAMA: DOM CONTENT LOADED ---
document.addEventListener("DOMContentLoaded", () => {

    // 1. Tombol Explore & Navigasi Smooth Scroll
    const exploreBtn = document.querySelector('.hero .btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector('#about');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 2. Navigasi Pintar & Aktif Link saat Scroll
    const navbar = document.querySelector("nav");
    const sections = document.querySelectorAll("section, .hero");
    const navLinks = document.querySelectorAll("nav .menu a");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. ANIMASI MENGETIK (TYPING EFFECT) KHUSUS AZELIA
    const textElement = document.querySelector(".hero p");
    // Kalau mau bikin teks mengetik di bagian tag hero, kita buat dinamis:
    const tagElement = document.querySelector(".hero .tag");
    const roles = ["Computer Network Engineering Student", "English Enthusiast", "Personal Growth & Journaling", "Aspiring Author"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!tagElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            tagElement.innerText = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            tagElement.innerText = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 1500; // Jeda saat teks selesai diketik
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400; 
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (tagElement) {
        typeEffect();
    }
});
