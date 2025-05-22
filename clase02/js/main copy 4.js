// operaciones logicas con if

//let usuario = true;
//const puedePagar = false;

/* if(usuario && puedePagar){
    console.log("Tu pedido se hizo con exito");
}else {
    console.log('hubo un error en el pago')
} */


/* if(usuario && puedePagar){
    console.log("Tu pedido se hizo con exito");
} else if(!usuario){
    console.log('Debes iniciar session')
} else if(!puedePagar){
    console.log('Fondos insufiecientes')
} else {
    console.log('hubo un error en el pago')
} */

    const metodoPago = prompt("Metodo de pago: efectivo, cheque o tarjeta");

    switch (metodoPago) {
      case "efectivo":
        console.log("Pagaste con " + metodoPago);
        break;
      case "cheque":
        console.log(
          "Pagaste con " + metodoPago + "revisaremos que tenga fondos primero"
        );
        break;
      case "tarjeta":
        console.log("Pagaste con " + metodoPago + "espere un momento...");
      default:
        console.log("Otro metodo de pago");
    }
