
const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

while(energiaGoku > 0 && energiaSuperman > 0){
    round+=1;
    let golpeGoku = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    let golpeSuperman = parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
    console.log("Round " + round);
    if(golpeGoku === golpeSuperman){
        console.log("Empate");
    }else if(golpeGoku > golpeSuperman){
        energiaSuperman -= golpeGoku;
        console.log("Goku ataca a Superman con " + golpeGoku + " de daño");
        console.log("Energia de Superman: " + energiaSuperman);
    }else {
        energiaGoku -= golpeSuperman;
        console.log("Superman ataca a Goku con " + golpeSuperman + " de daño");
        console.log("Energia de Goku: " + energiaGoku);
    }
} 

if(energiaGoku > energiaSuperman){
    console.log("Goku gana la pelea");
}else {
    console.log("Superman gana la pelea");
}
