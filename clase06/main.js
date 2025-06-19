carrito = [
  { nombre: "Tablet", precio: 200, cantidad: 20 },
  { nombre: "Telefono", precio: 500, cantidad: 20 },
  { nombre: "Telefono", precio: 1500, cantidad: 20 },
  { nombre: "Reloj", precio: 250, cantidad: 20 },
  { nombre: "Lentes", precio: 300, cantidad: 20 },
];

let resultado = carrito.every( item => item.precio < 1600)
console.log(resultado)


/* let cumple = true;
carrito.forEach( item => {
    if(item.precio < 100){
        cumple = false;
        return 
    }
}) */

console.log(cumple)
