document.addEventListener("DOMContentLoaded", function () {
    const subMenus = document.querySelectorAll(".submenu");
    const menuLinks = document.querySelectorAll("nav ul li a");
  
    subMenus.forEach((submenu) => {
      submenu.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la navegación si hay un enlace real
        closeAllSubMenus();
        this.classList.toggle("active");
      });
    });
  
    function closeAllSubMenus() {
      subMenus.forEach((submenu) => {
        submenu.classList.remove("active");
      });
    }
  
    const checkBtn = document.querySelector(".checkbtn");
    const navUl = document.querySelector("nav ul");
  
    checkBtn.addEventListener("click", function () {
      navUl.classList.toggle("active");
      closeAllSubMenus(); // Cierra todos los submenús al mostrar el menú móvil
    });
  
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navUl.classList.remove("active");
        closeAllSubMenus(); // Cierra todos los submenús al hacer clic en un enlace principal
      });
    });
  });
  