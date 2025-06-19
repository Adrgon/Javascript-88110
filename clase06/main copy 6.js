




let resultado = 5 > 2;
console.log(resultado); // true

carrito = [
  { nombre: "Tablet", precio: 200 },
  { nombre: "Telefono", precio: 500 },
  { nombre: "Reloj", precio: 250 },
  { nombre: "Lentes", precio: 300 },
];

const stockExistente = carrito.some((item) => item.nombre === "Pantalones");
console.log(stockExistente); // true

const indice = carrito.findIndex((item) => item.nombre === "Lentes");
console.log(indice);

carrito.forEach((item, index) => {
  if (item.nombre === "Lentes") {
    console.log("Encontrado en el indice " + index);
  }
});
