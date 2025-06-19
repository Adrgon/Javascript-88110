const numeros = [1, 2, 3, 4];

function porCadaUno(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

function multiplicarxDos(x){
    console.log(x * 2)
}

function elevarAlCubo(num) {
  console.log(num * num * num);
}

//porCadaUno(numeros, console.log);
//porCadaUno(numeros, alert);
//porCadaUno(numeros, multiplicarxDos);
porCadaUno(numeros, elevarAlCubo);
// 1
// 2
// 3
// 4
