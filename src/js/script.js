const btn = document.querySelector(".btn-menu");
const menu = document.getElementById("menuH");

function mostraMenu() {
    btn.classList.toggle("ativar");
    menu.classList.toggle("visivel");
}

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      const navHeight = document.querySelector("nav").offsetHeight; // Pega a altura do nav fixo
      const offsetTop = targetElement.offsetTop - navHeight;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Rolagem suave
      });
    });
  });