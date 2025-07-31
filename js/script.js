let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

// Toggle del menú
menuBtn.onclick = () => {
    navbar.classList.toggle("active");
};

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
    };
});

// Cierra el menú si se hace scroll
window.onscroll = () => {
    navbar.classList.remove("active");
};
