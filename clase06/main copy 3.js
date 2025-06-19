// funciones que retornan fucniones

function mayorQue(n) {
    return function(m) {
        return m > n;
    }
}

let mayorQueDiez = mayorQue(10);
let saludar = mayorQue("hola")

console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8));  // false
