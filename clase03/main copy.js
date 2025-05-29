//alert("Clase 3 : Funciones")

// Declaracion de funciones
function sumar() {
    console.log(2+2)
}

// Funciones de expresion
const restar = function() {
    console.log(7-5)
}


sumar(); // Ejecutamos el cotexto de la funcion 
restar(); // Ejecutamos el contexto de la funcion

// Hoisting

multiplicar();
//dividir()
function multiplicar() {
    console.log(8*7)
}

const dividir = function() {
    console.log(732/8);
}

dividir();

// copia por valor
let a = 5;
let b = a
console.log(a); // 5
console.log(b); // 5

// copia por referencia
let obj1 = {a: 5}
let obj2 = obj1

console.log(obj1);
console.log(obj2);

obj2.a = 10;

console.log(obj1);
console.log(obj2);


// conceptualmente 

alert("Hay un error")
let nombre = prompt("Ingrese su nombre");
let numero = parseInt('1')
numero.toString() // metodo
