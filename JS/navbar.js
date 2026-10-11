/* ===== NAVBAR SCROLL ===== */

let lastScroll = 0;

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {

            navbar.style.transform = "translateY(-100%)";

        } else {

            navbar.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;

    });

}