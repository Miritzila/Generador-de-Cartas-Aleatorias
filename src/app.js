/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["♦", "♥", "♠", "♣"];
const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const palo1 = document.querySelector("#palo1");
const palo2 = document.querySelector("#palo2");
const valor = document.querySelector("#valor");
const boton = document.querySelector("#boton");
const inputAlto = document.querySelector("#inputAlto");
const inputAncho = document.querySelector("#inputAncho");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[getRandomNumber(0, array.length - 1)];
}

function generarCarta() {
  const randomPalo = getRandomElement(palos);
  const randomValor = getRandomElement(valores);

  if (randomPalo === "♦" || randomPalo === "♥") {
    palo1.style.color = "red";
    palo2.style.color = "red";
  } else {
    palo1.style.color = "";
    palo2.style.color = "";
  }

  palo1.innerHTML = randomPalo;
  palo2.innerHTML = randomPalo;
  valor.innerHTML = randomValor;
}

function cambiarTamanioCarta() {
  const alto = inputAlto.value;
  const ancho = inputAncho.value;

  if (!isNaN(alto) && !isNaN(ancho)) {
    const cartaContainer = document.getElementById("cartaContainer");
    cartaContainer.style.width = `${ancho}rem`;
    cartaContainer.style.height = `${alto}rem`;
  } else {
    alert("Eso no son numeros");
  }
}

window.onload = function() {
  generarCarta();
  boton.addEventListener("click", generarCarta);
  setInterval(generarCarta, 10000);
  cambiarTamanioCarta();

  document
    .getElementById("btnCambiar")
    .addEventListener("click", cambiarTamanioCarta);
};
