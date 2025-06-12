//Local Storage
// se mantiene incluso en reseteos de la computadora
//Session Storage
// se mantiene mientras la pestaña del navegador este abierta
//TLD : Top Level Domain
//console.log(window.localStorage);
//console.log(window.sessionStorage)

// obtener datos del localStorage
// guardar datos en el localStorage
// remover datos del localStorage
// limpiar el localStorage

// guarda en un clave un valor
// siempre lo guarda como cadena de caracteres

// guardar en localStorage
localStorage.setItem("nombre", "Adrian");
localStorage.setItem("edad", 49.5);
localStorage.setItem("esProfesor", true)
localStorage.setItem("lista", ["mate", "cafe", "harina", "palmitos"])
localStorage.setItem("producto", JSON.stringify({nombre: "Cerveza", precio: 100, stock: 50}));


// recuperar datos
let nombre = localStorage.getItem("nombre");
let edad = parseFloat(localStorage.getItem("edad"));
let esProfesor = localStorage.getItem("esProfesor") === "true"; // convierte el string a booleano
let lista = localStorage.getItem("lista").split(','); // convierte el string a un array
let producto = localStorage.getItem("producto");
producto = JSON.parse(producto); // convierte el string a un objeto

//localStorage.clear()

//localStorage.removeItem('nombre')
