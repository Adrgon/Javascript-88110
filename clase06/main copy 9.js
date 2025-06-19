carrito = [
  { nombre: "Tablet", precio: 200, cantidad: 20 },
  { nombre: "Telefono", precio: 500, cantidad: 20 },
  { nombre: "Telefono", precio: 1500, cantidad: 20 },
  { nombre: "Reloj", precio: 250, cantidad: 20 },
  { nombre: "Lentes", precio: 300, cantidad: 20 },
];

let resultadoBusqueda = carrito.find( item => item.nombre === "Telefono");
console.log(resultadoBusqueda);

let resultado = '';
carrito.forEach((producto, index) => {
  if (producto.nombre == "Telefono") {
    resultado = carrito[index];
  }
});
console.log(resultado);



// es como si fuera un filter

/* let resultado=[];
carrito.forEach( (producto, index)=>{
    if(producto.nombre != "Telefono"){
        resultado.push(carrito[index]);
    }
})
console.log(resultado) */
