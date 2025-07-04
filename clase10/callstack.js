

console.log("Inicio del script")

function primeraFuncion(){
    console.log( "Dentro de la primera función ")
}

function segundaFuncion(){
    setTimeout(()=>{
        console.log("Dentro de segundaFuncion (despues de 0 segundos)")
    },0)
    console.log( "Despues de setTimeOut")
    for(let i=0; i<100000; i++){
        // Simulando una tarea que toma tiempo
        console.log("tick")
    }
    console.log("luego de la espera")
}

primeraFuncion()
segundaFuncion()
console.log("Fin del script")
