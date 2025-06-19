carrito = [
  { nombre: "Tablet", precio: 200, cantidad:20 },
  { nombre: "Telefono", precio: 500, cantidad:20},
  { nombre: "Reloj", precio: 250, cantidad:20},
  { nombre: "Lentes", precio: 300, cantidad:20 },
];

let totalPagar = 0;
carrito.forEach( producto => totalPagar += producto.precio)
console.log(totalPagar)

//console.log(totalPagar);

let total = carrito.reduce((totalizador, item) => totalizador + item.precio, 0)

console.log(total)
