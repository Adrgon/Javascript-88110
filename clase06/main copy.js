const miFuncion = function(){
    console.log("Hola, mundo!");
}

console.log(miFuncion());
console.log(miFuncion);
console.log(typeof miFuncion)


// Funciones que reciben funciones como argumentos
function buenDia(){
    console.log("Buenos dias")
}

function buenasTardes() {
  console.log("Buenas tardes");
}

function sumar(a, b) {
    return a + b;
}

function saludar( fn ){
    console.log("Funciones que reciben funciones")
    console.log(fn)
    fn()
}

saludar(buenDia)
saludar(buenasTardes);
