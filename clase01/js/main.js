console.log("Bienvenidos a Javascript");
console.log("A trabajar");

// Tipos de datos

/* 
Vamos a trabajar 
con tipos de datos
*/
"Hola a todos" // cadena de caracteres
1
true
true
// Almacenamiento en Variables
/* let nombre;
let nombre; */

/* var nombre;
var nombre; */

let nombre = "Adrian"
let edad = 49
let esProfesor = true
// muestro en la consola
console.log("Hola")
console.log(nombre)
console.log(edad)
console.log(esProfesor)

console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años " + " y soy profesor " + esProfesor + " El año que viene voy a tener " + (edad + 1) + " años")
//alert("Hola mi nombre es " + nombre + "y tengo " + edad + " años" + " y soy profesor " + esProfesor + "El año que viene voy a tener " + (edad + 1) + "años");

// Cambio de valores
nombre = "Juan"
edad = 50
esProfesor = false
console.log(
  "Hola mi nombre es " +
    nombre +
    " y tengo " +
    edad +
    " años " +
    " y soy profesor " +
    esProfesor +
    " El año que viene voy a tener " +
    (edad + 1) +
    " años"
);

// 
const PI = 3.14
console.log(PI)

//PI = 5.1

//const e
//e = 2.71;
// Esto aplica a cuando estamos hablando de tipos de datos primitivos


// Operadores
/* Numberos trabajan con operadores aritmeticos
Cadenas de caracteres trabajan con operadores de concatenacion
Combinacion con la forma en la que esta programado javascript */

console.log(1 + 2);
console.log("1"+"2")
console.log("2" + 1);
console.log(+"2"+1);

// El usuario ingrese un valor a una variable se hacer mediante el prompt
let apellido = prompt("Ingrese su apellido");
console.log(apellido)
