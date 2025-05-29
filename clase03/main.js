let resultado;
/* let resultado = alert()
console.log(resultado) // no return value 
resultado = prompt("ingresa tu nombre") // returns a string or null
console.log(resultado)
resultado = confirm("Es terricola")// returns true or false
console.log(resultado) */

function saludoGeneral() {
    console.log("Hola coders")
}
function sumar(a, b) {
    return a + b;
    console.log("Esto no se ejecuta")
}

function verificarSaldo(a, b){
    let precio = a + b;
    if(precio > 100){
        return "Fuera de presupesto"
    }else {
        return "Ok locompro"
    }
    console.log("Esto no se ejecuta")
}

resultado = saludoGeneral()
console.log(resultado)
resultado = sumar(5, 10)
console.log(resultado) // 15

let total = sumar(5, 10) + 32;
console.log("El total es:  " + total)

let precio1 = 67;
let precio2 = 50; 

let res = verificarSaldo(precio1, precio2)
