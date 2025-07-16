// Array inicial de productos
const productos = [
  { id: 1, nombre: "Laptop Gamer", precio: 1200, stock: 5 },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 25, stock: 50 },
  { id: 3, nombre: "Teclado Mecánico", precio: 80, stock: 20 },
  { id: 4, nombre: "Monitor Curvo 27", precio: 300, stock: 10 },
  { id: 5, nombre: "Webcam Full HD", precio: 40, stock: 30 },
  { id: 6, nombre: "Auriculares Gaming", precio: 70, stock: 15 },
  { id: 7, nombre: "Disco Duro SSD 1TB", precio: 100, stock: 25 },
  { id: 8, nombre: "Router WiFi 6", precio: 90, stock: 12 },
  { id: 9, nombre: "Impresora Multifunción", precio: 150, stock: 8 },
  { id: 10, nombre: "Software Antivirus", precio: 30, stock: 100 },
];

let productosConIVA = []; // Este array guardará los productos con precios actualizados.

/**
 * Muestra el array de productos original en la consola.
 */
function mostrarProductosOriginales() {
  console.log("--- Productos Originales ---");
  console.log(productos);
  alert("Consulta la consola para ver los productos originales.");
}

/**
 * Muestra el último array de productos actualizado con IVA en la consola.
 * Si no se ha actualizado, mostrará un mensaje.
 */
function mostrarProductosActualizados() {
  if (productosConIVA.length > 0) {
    console.log("--- Productos con Precios Actualizados (IVA) ---");
    console.log(productosConIVA);
    alert(
      "Consulta la consola para ver los productos con precios actualizados."
    );
  } else {
    alert(
      "Primero actualiza los precios con IVA para ver los productos actualizados."
    );
  }
}

// --- 1. Utilizar el método `find` para buscar un producto por ID ---
/**
 * Busca un producto en el array 'productos' por su ID.
 * Solicita el ID al usuario usando `prompt()` y muestra el resultado con `alert()` y en consola.
 */
function buscarProducto() {
  const idABuscar = parseInt(
    prompt("Ingrese el ID del producto que desea buscar:")
  );

  // Validamos que la entrada sea un número
  if (isNaN(idABuscar)) {
    alert("Por favor, ingrese un ID numérico válido.");
    console.log("Búsqueda cancelada: ID inválido.");
    return;
  }

  // Usamos el método `find()` para buscar el primer producto que cumpla la condición.
  // `producto => producto.id === idABuscar` es la función de callback.
  const productoEncontrado = productos.find(
    (producto) => producto.id === idABuscar
  );

  if (productoEncontrado) {
    const mensaje = `Producto encontrado:\nID: ${productoEncontrado.id}\nNombre: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}\nStock: ${productoEncontrado.stock}`;
    alert(mensaje);
    console.log("Producto encontrado:", productoEncontrado);
  } else {
    const mensaje = `No se encontró ningún producto con el ID ${idABuscar}.`;
    alert(mensaje);
    console.log(mensaje);
  }
}

// --- 2. Filtrar productos por criterios (nombre o precio) ---

/**
 * Filtra productos cuyo nombre contenga una palabra o parte de ella.
 * Solicita la palabra al usuario usando `prompt()` y muestra los resultados.
 */
function filtrarProductosPorNombre() {
  const textoABuscar = prompt(
    "Ingrese una palabra o parte del nombre del producto para filtrar:"
  )
    .toLowerCase()
    .trim();

  if (!textoABuscar) {
    alert("Búsqueda cancelada o texto vacío.");
    console.log("Búsqueda por nombre cancelada.");
    return;
  }

  // Usamos el método `filter()` para crear un nuevo array con los productos que coinciden.
  // `producto.nombre.toLowerCase().includes(textoABuscar)` es la condición de filtrado.
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoABuscar)
  );

  if (productosFiltrados.length > 0) {
    let mensaje = `Productos que contienen "${textoABuscar}":\n\n`;
    productosFiltrados.forEach((p) => {
      mensaje += `- ${p.nombre} (ID: ${p.id}, Precio: $${p.precio})\n`;
    });
    alert(mensaje);
    console.log(
      `Productos filtrados por nombre "${textoABuscar}":`,
      productosFiltrados
    );
  } else {
    const mensaje = `No se encontraron productos que contengan "${textoABuscar}" en su nombre.`;
    alert(mensaje);
    console.log(mensaje);
  }
}

/**
 * Filtra productos cuyo precio sea menor o igual a un valor máximo.
 * Solicita el precio máximo al usuario usando `prompt()` y muestra los resultados.
 */
function filtrarProductosPorPrecioMax() {
  const precioMaximo = parseFloat(
    prompt("Ingrese el precio máximo para filtrar productos:")
  );

  // Validamos que la entrada sea un número
  if (isNaN(precioMaximo) || precioMaximo < 0) {
    alert("Por favor, ingrese un precio numérico válido y positivo.");
    console.log("Filtrado por precio cancelado: Precio inválido.");
    return;
  }

  // Usamos `filter()` para obtener productos con precio menor o igual al máximo.
  const productosFiltrados = productos.filter(
    (producto) => producto.precio <= precioMaximo
  );

  if (productosFiltrados.length > 0) {
    let mensaje = `Productos con precio menor o igual a $${precioMaximo}:\n\n`;
    productosFiltrados.forEach((p) => {
      mensaje += `- ${p.nombre} (ID: ${p.id}, Precio: $${p.precio})\n`;
    });
    alert(mensaje);
    console.log(
      `Productos filtrados por precio máximo $${precioMaximo}:`,
      productosFiltrados
    );
  } else {
    const mensaje = `No se encontraron productos con precio menor o igual a $${precioMaximo}.`;
    alert(mensaje);
    console.log(mensaje);
  }
}

// --- 3. Utilizar el método `map` para actualizar precios (ej. agregar IVA) ---

/**
 * Actualiza el precio de cada producto en un 21% (IVA) usando el método `map()`.
 * Crea un nuevo array con los precios actualizados.
 */
function actualizarPreciosConIVA() {
  const iva = 0.21; // 21% de IVA

  // Usamos el método `map()` para crear un nuevo array.
  // Por cada `producto` en el array original, `map()` retorna un NUEVO objeto
  // con el precio actualizado, manteniendo las demás propiedades.
  productosConIVA = productos.map((producto) => {
    // Redondeamos el precio a 2 decimales para evitar problemas de flotantes.
    const nuevoPrecio = parseFloat((producto.precio * (1 + iva)).toFixed(2));
    return {
      ...producto, // Copia todas las propiedades del producto original
      precio: nuevoPrecio, // Sobrescribe solo la propiedad 'precio'
    };
  });

  alert(
    "¡Precios actualizados con IVA del 21%!\nConsulta la consola o haz click en 'Mostrar Últimos Productos Actualizados'."
  );
  console.log("--- Productos con Precios Actualizados (IVA del 21%) ---");
  console.log(productosConIVA);

  // Opcional: Actualizar la vista de productos originales en la página
  document.getElementById("productosOriginales").textContent = JSON.stringify(
    productosConIVA,
    null,
    2
  );
}
