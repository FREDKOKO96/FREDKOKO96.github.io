document.addEventListener("DOMContentLoaded", function() {
    // Cargar contenido del archivo header.html
    fetch("header.html")
        .then(response => response.text())
        .then(content => {
            // Insertar el contenido en el contenedor del encabezado
            const headerContainer = document.querySelector(".header-container");
            headerContainer.innerHTML = content;
        })
        .catch(error => console.error("Error loading header:", error));
});