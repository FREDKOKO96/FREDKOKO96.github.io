document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("openButton");
  const videoPopup = document.getElementById("videoPopup");
  const closeButton = document.getElementById("closeButton");
  const videoFrame = document.getElementById("videoFrame");

  openButton.addEventListener("click", function() {
    videoPopup.style.display = "block";
    videoFrame.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
    videoPopup.style.display = "none";
    videoFrame.style.display = "none";
    videoFrame.src = ""; // Detiene el video al cerrar
  });
});
