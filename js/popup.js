document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("openButton");
  const videoPopup = document.querySelector(".video-popup");
  const closeButton = document.querySelector(".close-button");
  const videoFrame = document.getElementById("videoFrame");

  openButton.addEventListener("click", function() {
    videoPopup.style.display = "flex";
    videoFrame.src = "https://www.youtube.com/embed/VIDEO_ID?rel=0&autoplay=1";
  });

  closeButton.addEventListener("click", function() {
    videoPopup.style.display = "none";
    videoFrame.src = videoFrame.src; // Detiene el video
  });
});
