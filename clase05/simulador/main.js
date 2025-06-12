const MIN_POWER = 10;
const MAX_POWER = 30;

const personajes = [
  "Goku",
  "Vegeta",
  "Gohan",
  "Freezer",
  "Piccolo",
  "Trunks",
  "Bills",
  "Krillin",
  "Cell",
  "Raditz",
  "Mr Satan",
  "Yamcha",
  "Majin Buu",
  "Goten",
  "Maestro Roshi",
  "TenShin Han",
];

// Definición de ataques para cada personaje
const ataquesPorPersonaje = {
    Goku: [
      { nombre: "Kamehameha", poder: 30 },
      { nombre: "Puño del dragón", poder: 25 },
      { nombre: "Golpe rápido", poder: 15 },
    ],
    Vegeta: [
      { nombre: "Final Flash", poder: 28 },
      { nombre: "Big Bang Attack", poder: 26 },
      { nombre: "Patada veloz", poder: 16 },
    ],
    Gohan: [
      { nombre: "Masenko", poder: 27 },
      { nombre: "Patada mística", poder: 18 },
      { nombre: "Golpe fuerte", poder: 20 },
    ],
    Freezer: [
      { nombre: "Death Beam", poder: 29 },
      { nombre: "Disco destructor", poder: 24 },
      { nombre: "Golpe tail", poder: 17 },
    ],
    Piccolo: [
      { nombre: "Makankosappo", poder: 27 },
      { nombre: "Antena extendida", poder: 19 },
      { nombre: "Golpe elástico", poder: 15 },
    ],
    Trunks: [
      { nombre: "Espada relámpago", poder: 26 },
      { nombre: "Golpe veloz", poder: 18 },
      { nombre: "Patada doble", poder: 17 },
    ],
    Bills: [
      { nombre: "Esfera de destrucción", poder: 32 },
      { nombre: "Golpe divino", poder: 25 },
      { nombre: "Ráfaga de energía", poder: 20 },
    ],
    Krillin: [
      { nombre: "Kienzan", poder: 22 },
      { nombre: "Golpe sorpresa", poder: 15 },
      { nombre: "Patada baja", poder: 13 },
    ],
    Cell: [
      { nombre: "Absorción", poder: 25 },
      { nombre: "Kamehameha", poder: 23 },
      { nombre: "Golpe de cola", poder: 18 },
    ],
    Raditz: [
      { nombre: "Doble Sunday", poder: 21 },
      { nombre: "Golpe brutal", poder: 17 },
      { nombre: "Patada giratoria", poder: 15 },
    ],
    "Mr Satan": [
      { nombre: "Puño milagroso", poder: 12 },
      { nombre: "Show mediático", poder: 10 },
      { nombre: "Golpe de suerte", poder: 8 },
    ],
    Yamcha: [
      { nombre: "Colmillo de lobo", poder: 18 },
      { nombre: "Patada aérea", poder: 14 },
      { nombre: "Golpe rápido", poder: 13 },
    ],
    "Majin Buu": [
      { nombre: "Chicle explosivo", poder: 28 },
      { nombre: "Rayo de chocolate", poder: 24 },
      { nombre: "Golpe elástico", poder: 19 },
    ],
    Goten: [
      { nombre: "Kamehameha", poder: 20 },
      { nombre: "Golpe infantil", poder: 14 },
      { nombre: "Patada baja", poder: 12 },
    ],
    "Maestro Roshi": [
      { nombre: "Kamehameha original", poder: 22 },
      { nombre: "Golpe pervertido", poder: 13 },
      { nombre: "Patada vieja escuela", poder: 15 },
    ],
    "TenShin Han": [
      { nombre: "Kikoho", poder: 23 },
      { nombre: "Golpe múltiple", poder: 16 },
      { nombre: "Patada triple", poder: 15 },
    ],
  };

// --- SELECCIÓN DE PERSONAJE ---
// Si ejecutas en navegador, prompt() funciona nativo. Si usas Node.js, deberás adaptar la entrada.
console.log("Elige tu personaje:");

let idx = 1;
for (const nombre of personajes) {
  console.log(idx + ". " + nombre);
  idx++;
}

//let eleccion;
let eleccion = parseInt(prompt("Ingresa el número de tu personaje: ")) - 1;

const miPersonaje = personajes[eleccion];

// Eliminar el personaje elegido del array para no repetir
const personajesCopia = personajes.slice();


personajesCopia.splice(eleccion, 1);

const rival =
  personajesCopia[Math.floor(Math.random() * personajesCopia.length)];

let energiaJugador = 100;
let energiaRival = 100;
let round = 0;


function ataqueAleatorio(personaje) {
  const ataques = ataquesPorPersonaje[personaje];
  return ataques[Math.floor(Math.random() * ataques.length)];
}

while (energiaJugador > 0 && energiaRival > 0) {
  round++;
  console.log(`\nRound ${round}`);
  const ataqueJugador = ataqueAleatorio(miPersonaje);
  const ataqueRival = ataqueAleatorio(rival);

  if (ataqueJugador.poder === ataqueRival.poder) {
    console.log(
      `Empate: ambos usaron ataques de ${ataqueJugador.poder} de poder.`
    );
  } else if (ataqueJugador.poder > ataqueRival.poder) {
    energiaRival -= ataqueJugador.poder;
    console.log(
      `${miPersonaje} usa ${ataqueJugador.nombre} (${ataqueJugador.poder}) y ataca a ${rival}. Energia de ${rival}: ${energiaRival}`
    );
  } else {
    energiaJugador -= ataqueRival.poder;
    console.log(
      `${rival} usa ${ataqueRival.nombre} (${ataqueRival.poder}) y ataca a ${miPersonaje}. Energia de ${miPersonaje}: ${energiaJugador}`
    );
  }
}

if (energiaJugador > 0) {
  console.log(`\n¡${miPersonaje} gana la pelea!`);
} else {
  console.log(`\n¡${rival} gana la pelea!`);
}

// --- FIN DEL JUEGO UNO CONTRA UNO ---
// El resto del código de batalla múltiple ha sido eliminado porque ya no se usa 'heroes' ni 'enemigos'.
