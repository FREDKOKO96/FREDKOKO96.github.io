document.addEventListener("DOMContentLoaded", function () {
    const subMenus = document.querySelectorAll(".submenu");
  
    subMenus.forEach((submenu) => {
      submenu.addEventListener("click", function () {
        if (!submenu.classList.contains("active")) {
          closeAllSubMenus();
        }
        submenu.classList.toggle("active");
      });
    });
  
    function closeAllSubMenus() {
      subMenus.forEach((submenu) => {
        submenu.classList.remove("active");
      });
    }
  
    const checkBtn = document.querySelector(".checkbtn");
    const navUl = document.querySelector("nav ul");
    const menuLinks = document.querySelectorAll("nav ul li a");
  
    checkBtn.addEventListener("click", function () {
      navUl.classList.toggle("active");
      closeAllSubMenus(); // Close all submenus when mobile menu is toggled
    });
  
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navUl.classList.remove("active");
      });
    });
  });
  