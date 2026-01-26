const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

texto.addEventListener("input", () => {
  contador.textContent = texto.value.length;
});