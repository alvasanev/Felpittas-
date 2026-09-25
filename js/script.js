// 1. Mensajes que se alternan en la barra superior
const mensajes = [
  "Envíos a todo Colombia 💜",
  "Todo lo que necesitas para tu negocio 🧸"
];
let indice = 0;
 
setInterval(() => {
  indice = (indice + 1) % mensajes.length;
  document.getElementById("topbar-msg").textContent = mensajes[indice];
}, 4000);
 
// 2. Menu hamburguesa (mostrar/ocultar en movil)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
 
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 3. Cerrar el menu movil al hacer clic en un enlace
// (para que el menu no se quede abierto tapando la pantalla
// despues de que la persona ya eligio a donde ir)
const enlacesDelMenu = navLinks.querySelectorAll("a");

enlacesDelMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});