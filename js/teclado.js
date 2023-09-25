var keys = document.getElementsByClassName("key");
var shiftActive = false;

function highlightKey(event) {
  var pressedKey = event.key.toUpperCase();

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var keyText = key.textContent.toUpperCase();

    if (keyText === pressedKey || key.classList.contains("special")) {
      key.classList.add("active");
    } else {
      key.classList.remove("active");
    }
  }
}

function handleSpace(event) {
  event.preventDefault();

  var spaceKey = document.querySelector(".key.space");
  spaceKey.classList.add("active");
  setTimeout(function() {
    spaceKey.classList.remove("active");
  }, 200);

  // Insertar espacio en blanco en el área de texto
  var textarea = document.getElementById("code-input");
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  var value = textarea.value;
  textarea.value = value.slice(0, start) + " " + value.slice(end);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Shift") {
    shiftActive = true;
    var shiftKeys = document.querySelectorAll(".key.special");
    shiftKeys.forEach(function(key) {
      key.classList.add("active");
    });
  } else if (!shiftActive) {
    highlightKey(event);
  }

  if (event.key === " ") {
    handleSpace(event);
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "Shift") {
    shiftActive = false;
    var shiftKeys = document.querySelectorAll(".key.special");
    shiftKeys.forEach(function(key) {
      key.classList.remove("active");
    });
  } else if (!shiftActive) {
    highlightKey(event);
  }
});