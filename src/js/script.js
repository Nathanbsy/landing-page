const btn = document.querySelector(".btn-menu");
const menu = document.getElementById("menuH");

function mostraMenu() {
    btn.classList.toggle("ativar");
    menu.classList.toggle("visivel");
}