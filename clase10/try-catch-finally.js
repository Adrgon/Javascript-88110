// JavaScript para el ejemplo de try...catch...finally
function procesarNumero(numero, outputId) {
  const outputElem = document.getElementById(outputId);
  outputElem.innerHTML += `<br>--- Intentando procesar: ${numero} ---<br>`;
  try {
    outputElem.innerHTML += `Intentando procesar el número: ${numero}<br>`;
    if (typeof numero !== "number" || isNaN(numero)) {
      throw new Error("El input no es un número válido.");
    }
    const resultado = numero * 2;
    outputElem.innerHTML += `El doble del número es: ${resultado}<br>`;
  } catch (error) {
    outputElem.innerHTML += `<span class="error">Error al procesar: ${error.message}</span><br>`;
  } finally {
    outputElem.innerHTML += "Finalizó el intento de procesamiento.<br>";
  }
}

function runTryCatchExample() {
  clearOutput("tryCatchOutput");
  procesarNumero(5, "tryCatchOutput");
  procesarNumero("hola", "tryCatchOutput");
  procesarNumero(null, "tryCatchOutput");
}
