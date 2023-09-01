document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("openButton");
  const videoPopup = document.querySelector(".video-popup");
  const closeButton = document.querySelector(".close-button");
  const videoFrame = document.getElementById("videoFrame");

  openButton.addEventListener("click", function() {
    videoPopup.style.display = "flex";
    videoFrame.src = "https://www.youtube.com/embed/OfuBNntnwRA?si=k0MnGxzm4BR3dEGa"; // Reemplaza VIDEO_ID con el ID real del video de YouTube
  });

  closeButton.addEventListener("click", function() {
    videoPopup.style.display = "none";
    videoFrame.src = ""; // Detiene el video
    videoFrame.src = "about:blank"; // Detiene completamente la reproducción
  });
});
