/*no salio sidebar x2 ;-;*/
const menuBtn = document.getElementById("btn-menu");

menuBtn.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
});