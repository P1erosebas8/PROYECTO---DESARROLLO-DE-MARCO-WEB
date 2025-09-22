/*Llama al footer con esta funcion*/
document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});