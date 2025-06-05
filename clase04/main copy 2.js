const producto = {
  nombre: "Pelota",
  precio: 30000,
  disponible: true,
  vender: function() {
    console.log("vender")
  },
  medidas: {
    alto: "10cm",
    ancho: "20cm",
    profundidad: "30cm" 
  },
  colores: ["rojo", "azul", "verde"],
};

console.log(producto)

// notacion de punto
console.log(producto.nombre);
console.log(producto.precio);
producto.stock = 100;

console.log(producto);

producto.aumentarStock = function(cantidad){
    this.stock += cantidad;
}

console.log(producto)

producto.aumentarStock(50);

console.log(producto)
