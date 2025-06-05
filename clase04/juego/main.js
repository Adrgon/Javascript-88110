const MIN_POWER = 10;
const MAX_POWER = 30;

const personajes = ["Goku", "Vegeta", "Gohan", "Freezer", "Cell", "Majin Buu", "Bill", "Raditz"];

console.log("Elige tu personaje")
let idx= 1;
for(let nombre of personajes) {
    console.log(idx + ". " + nombre);
    idx+=1;
}

let eleccion;
eleccion = parseInt(prompt("Ingrese el numero de personaje que deseas elegir: ")) - 1

const miPersonaje = personajes[eleccion]

//const personajesCopia = personajes;
const personajesCopia = personajes.slice();
personajesCopia.splice(eleccion, 1)
const rival = personajesCopia[Math.floor(Math.random() * personajesCopia.length)];
console.log(rival)
/* console.log("-------------------")
console.log(personajes);
console.log(personajesCopia)
console.log("-------------------");
 */

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

const ataquesPorPersonaje = {
  Goku: [
    { nombre: "Kamehameha", poder: 30 },
    { nombre: "Puño de dragon", poder: 25 },
  ],
  Vegeta: "Big Bang Attack",
  Gohan: "Masenko",
  Freezer: "Death Ball",
  Cell: "Solar Kamehameha",
  MajinBuu: "Super Ghost Kamikaze Attack",
  Bill: "Hakai",
  Raditz: "Double Sunday",
};




function calcularGolpe() {
  return parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}
//DRY = don't repeat yourself
function siguenVivos() {
  return energiaGoku > 0 && energiaSuperman > 0;
}

function gokuSigueVivo() {
  return energiaGoku > energiaSuperman;
}
function calcularRound() {
  return (round += 1);
}

while (siguenVivos()) {
  calcularRound();
  let golpeGoku = calcularGolpe();
  let golpeSuperman = calcularGolpe();
  console.log("Round " + round);
  if (golpeGoku === golpeSuperman) {
    console.log("Empate");
  } else if (golpeGoku > golpeSuperman) {
    energiaSuperman -= golpeGoku;
    console.log("Goku ataca a Superman con " + golpeGoku + " de daño");
    console.log("Energia de Superman: " + energiaSuperman);
  } else {
    energiaGoku -= golpeSuperman;
    console.log("Superman ataca a Goku con " + golpeSuperman + " de daño");
    console.log("Energia de Goku: " + energiaGoku);
  }
}

if (gokuSigueVivo()) {
  console.log("Goku gana la pelea");
} else {
  console.log("Superman gana la pelea");
}
