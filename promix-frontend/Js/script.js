const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

console.log(menuToggle);
console.log(navbar);

menuToggle.addEventListener("click", () => {
    console.log("clicou");
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
});