carrito = [
  { nombre: "Tablet", precio: 200, cantidad:20 },
  { nombre: "Telefono", precio: 500, cantidad:20},
  { nombre: "Reloj", precio: 250, cantidad:20},
  { nombre: "Lentes", precio: 300, cantidad:20 },
];

let resultado = carrito.filter( item => item.precio >= 250);
console.log(resultado)

// se utiliza muchisimo
resultado = carrito.filter(item => item.nombre != "Telefono");
console.log(resultado);
console.log(carrito)
