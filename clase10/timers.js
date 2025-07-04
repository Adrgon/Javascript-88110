let cantidadProductos = 0;
let intervaloCarrito;
let timeoutBienvenida;

function actualizarcarrito(){
    cantidadProductos += 1;
    console.log("timersOutput" + `Carrito ${cantidadProductos} productos.`)
    if(cantidadProductos >= 5){
        console.log("timersOutput", "Carrito lleno - Deteniendo la actualizacion");
        clearInterval(intervaloCarrito)
    }

}

function runTimersExample() {
    resetTimersExample()
    console.log("timersOutput", "Iniciando compras");

    timeoutBienvenida = setTimeout(()=>{
        console.log("timersOutput", "Bienvenido a la tienda, estamos actualizando el carrito");
    },3000)

    intervaloCarrito = setInterval(actualizarcarrito, 2000);
    console.log("timersOutput", "Operacion principal en curso");

}

 function resetTimersExample() {
    clearInterval(intervaloCarrito);
    clearTimeout(timeoutBienvenida);
    cantidadProductos = 0;
    console.log('timersOutput', "Reseteando el ejemplo de timers");
 }
