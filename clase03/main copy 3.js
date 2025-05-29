
function iniciarApp(){
    alert("Bienvenido al catalogo de productos");
    let usuario = prompt("Ingrese su usuario:");
    let contrasena = prompt("Ingrese su contraseña:");
    autenticarUsuario(usuario, contrasena);
}

function autenticarUsuario(usr, pass){
    if(usr === "admin" && pass === "1234"){
        alert("Usuario autenticado correctamente");
        cargarCatalogo();
    } else {
        alert("Credenciales incorrectas, por favor intente de nuevo");
    }
}

function cargarCatalogo(){
    const catalogo = "Esta es nuestra coleccion de productos otoño invierno"
    alert(catalogo)
}

iniciarApp()
