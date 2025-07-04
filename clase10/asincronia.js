/* Ejecución Asincrónica (Teoría)
La **ejecución asincrónica** permite que ciertas operaciones se ejecuten en segundo plano sin bloquear el hilo principal de ejecución. Esto significa que tu programa puede seguir haciendo otras cosas mientras espera que una operación de larga duración (como una solicitud de red o una lectura de archivo) finalice. Cuando la operación asincrónica se completa, se notifica al programa y se ejecuta una función de callback o una promesa.

Imagina que pides una pizza. No te quedas parado en la pizzería esperando que la preparen; vuelves a casa y te llaman cuando está lista.

Características:

No bloquea el hilo principal.
Mejora la capacidad de respuesta de la aplicación.
Puede ser más complejo de entender el flujo del código inicialmente.



dibujo el carrusel
traigo datos de los productos
dibujo otro carrusel
consultar los productos
Hacer compra
 */
