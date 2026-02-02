const nube = document.getElementById("nube");
const bici = document.getElementById("bici");
const sol = document.getElementById("sol");
const sonido = document.getElementById("sonidoBici");

let nubeX = -150;
let biciX = 350;
let anguloSol = 0;

nube.style.top = "40px";
nube.style.left = nubeX + "px";

function animar() {
  nubeX += 0.5;
  if (nubeX > 850) nubeX = -150;
  nube.style.left = nubeX + "px";

  biciX += 1;
  if (biciX > 850) biciX = -150;
  bici.style.left = biciX + "px";
  anguloSol += 0.5;
  sol.style.transform = `rotate(${anguloSol}deg)`;

  requestAnimationFrame(animar);
}

window.onload = () => {
  animar();
};

const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

texto.addEventListener("input", () => {
  contador.textContent = texto.value.length;
});

sonido.loop = true;
sonido.volume = 0.5;

function toggleSonido() {
    sonido.paused ? sonido.play() : sonido.pause();
}

