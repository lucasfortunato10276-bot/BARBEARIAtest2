// 1. Efeito de Scroll na Navbar
const header = document.querySelector("#header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.95)";
        header.style.padding = "15px 0";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.8)";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.9)";
        header.style.padding = "20px 0";
        header.style.boxShadow = "none";
    }
});

// 2. Menu Hambúrguer (Mobile)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Troca o ícone de hambúrguer para um "X" se quiser (opcional)
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars-staggered");
    icon.classList.toggle("fa-xmark");
});

// Fechar menu ao clicar em um link (Melhora a UX)
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        icon.classList.add("fa-bars-staggered");
        icon.classList.remove("fa-xmark");
    });
});

// 3. Sistema de Animação ao Rolar (Scroll Reveal)
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100; // Sensibilidade da ativação

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
};

// Executa a função ao rolar e ao carregar a página
window.addEventListener("scroll", reveal);
window.onload = reveal;

// 4. Smooth Scroll (Navegação suave entre seções)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Desconto da altura da navbar
                behavior: 'smooth'
            });
        }
    });
});