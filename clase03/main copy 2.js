let name = "Bianca";
let lastName = "Chiaramello";
/* function saludar(){
    console.log("¡Hola, coders!");
} */

//saludar();

function saludar(nombre, apellido, genero="terricola") {
  // función con parámetros
  console.log("¡Hola," + nombre + " " + apellido + "!" + " " + genero);
  console.log(lastName); //
  let edad = 25; // variable local
  console.log(edad)
}


saludar("Gensis Lara", "Montes"); // aquí se pasan los argumentos a la función
//console.log(nombre);

saludar(name, lastName, "extraterrestre"); // aquí se pasan los argumentos a la función
console.log(lastName);
//console.log(edad)
