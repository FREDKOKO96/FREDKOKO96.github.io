var expectedSequence = "Las teclas de un teclado están diseñadas para representar letras, números, símbolos, caracteres especiales y funciones específicas.";
var textarea = document.getElementById("code-input");
var btnCheck = document.getElementById("btn-check");
var btnNextPage = document.getElementById("btn-next-page");
var errorMessage = document.getElementById("error-message");

btnCheck.addEventListener("click", function() {
  var inputValue = textarea.value.toLowerCase();
  var inputWords = inputValue.split(" ");
  var expectedWords = expectedSequence.toLowerCase().split(" ");
  var errorMessages = [];

  for (var i = 0; i < expectedWords.length; i++) {
    if (!inputWords.includes(expectedWords[i])) {
      errorMessages.push("Falta la palabra '" + expectedWords[i] + "'");
    }
  }

  if (errorMessages.length === 0) {
    btnCheck.disabled = true;
    btnNextPage.style.display = "block";
    textarea.disabled = true;
    errorMessage.textContent = "¡Secuencia correcta!";
    errorMessage.style.color = "green";
    errorMessage.style.fontSize = "20px";
  } else {
    errorMessage.textContent = errorMessages.join(". ");
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "16px";
  }
});

textarea.addEventListener("input", function() {
  btnCheck.disabled = false;
  errorMessage.textContent = "";
});