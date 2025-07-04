/* Ejecución Sincrónica (Teoría)
En la **ejecución sincrónica**, las operaciones se realizan una después de otra, en el orden en que aparecen en el código. Cada operación debe completarse antes de que la siguiente pueda comenzar. Es como una fila de personas en un banco: hasta que la primera persona es atendida, la segunda no puede avanzar.

Características:

Bloquea el hilo principal de ejecución.
Fácil de seguir el flujo del código.
Puede hacer que la aplicación se sienta "colgada" si una operación tarda mucho.
 */

/* console.log()
alert()
if(){
    console.log()
}else {
    console.log()
}

for(let i=0; i<1000000000000000000000000; i++){
    console.log(i)
}

console.log("Hola mundo") */
