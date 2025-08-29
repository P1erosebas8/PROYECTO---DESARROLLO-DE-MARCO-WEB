/*Esto llama al estilo scrolled al scrollear cierto punto en la pantalla*/
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 400);
});