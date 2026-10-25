
const mensajes = [
  "Envíos a todo Colombia 💜",
  "Todo lo que necesitas para tu negocio 🧸"
];
let indice = 0;

setInterval(() => {
  indice = (indice + 1) % mensajes.length;
  document.getElementById("topbar-msg").textContent = mensajes[indice];
}, 4000);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const enlacesDelMenu = navLinks.querySelectorAll("a");

enlacesDelMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.getElementById("anio").textContent = new Date().getFullYear();