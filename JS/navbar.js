/* ===== NAVBAR SCROLL ===== */

/* Esconde ao rolar para baixo, mostra ao rolar para cima */

const navbar = document.querySelector(".navbar");

if (navbar) {

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = Math.max(window.scrollY, 0);

        const rolandoParaBaixo =
            currentScroll > lastScroll && currentScroll > navbar.offsetHeight;

        navbar.classList.toggle("navbar--hidden", rolandoParaBaixo);

        lastScroll = currentScroll;

    }, { passive: true });

    /* Navegação por teclado: não deixa o foco ir para uma barra escondida */
    navbar.addEventListener("focusin", () => {
        navbar.classList.remove("navbar--hidden");
    });

}