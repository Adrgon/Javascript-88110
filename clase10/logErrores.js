// JavaScript para el ejemplo de Registro de Errores
function realizarOperacionCritica(valor, outputId) {
  const outputElem = document.getElementById(outputId);
  outputElem.innerHTML += `<br>--- Realizando operación crítica con valor: ${valor} ---<br>`;
  try {
    if (valor === undefined || valor === null || typeof valor !== "number") {
      throw new Error("Valor inválido para operación crítica.");
    }
    if (valor === 0) {
      throw new Error("División por cero no permitida.");
    }
    const resultado = 100 / valor;
    outputElem.innerHTML += `Operación crítica exitosa: ${resultado}<br>`;
  } catch (error) {
    outputElem.innerHTML += `<span class="error">⛔️ Error crítico detectado:</span><br>`;
    outputElem.innerHTML += `<span class="error">  Mensaje: ${error.message}</span><br>`;
    console.error("Error completo para el log (ver consola):", error); // Esto aún se verá en la consola del navegador
    outputElem.innerHTML += `<span class="warning">⚠️ Advertencia: La operación crítica falló.</span><br>`;
  } finally {
    outputElem.innerHTML += "Operación crítica finalizada.<br>";
  }
}

function runLogErrorExample() {
  clearOutput("logErrorOutput");
  realizarOperacionCritica(20, "logErrorOutput");
  realizarOperacionCritica(0, "logErrorOutput");
  realizarOperacionCritica("texto", "logErrorOutput");
}
