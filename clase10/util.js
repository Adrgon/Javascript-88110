function appendToOutput(elementId, text) {
  const outputElem = document.getElementById(elementId);
  outputElem.innerHTML += text + "<br>";
  outputElem.scrollTop = outputElem.scrollHeight; // Scroll automático al final
}

// Función auxiliar para limpiar un div de salida
function clearOutput(elementId) {
  document.getElementById(elementId).innerHTML = "";
}
