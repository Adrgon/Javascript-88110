const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

function calcularGolpe(){
    return parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}
//DRY = don't repeat yourself
function siguenVivos(){
    return energiaGoku > 0 && energiaSuperman > 0;
}

function gokuSigueVivo() {
    return energiaGoku > energiaSuperman;
}
function calcularRound(){
    return round += 1;
}

while (siguenVivos()) {
  calcularRound()
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
