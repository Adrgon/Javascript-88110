function obtenerDatosDeUsuario(id) {
  return new Promise((resolve, reject) => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `Solicitando datos para el usuario con ID: ${id}...`
    );
    setTimeout(() => {
      if (id === 123) {
        resolve({ id: 123, nombre: "Ana García", email: "ana@example.com" });
      } else if (id === 456) {
        reject(new Error("Usuario 456 no encontrado."));
      } else {
        reject(new Error("ID de usuario desconocido."));
      }
    }, 1000); // Simula una demora
  });
}

// Caso 1: Usuario encontrado
obtenerDatosDeUsuario(123)
  .then((usuario) => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `Datos de usuario recibidos: ${usuario.nombre}`
    );
  })
  .catch((error) => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `<span class="error">Error al obtener datos: ${error.message}</span>`
    );
  })
  .finally(() => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `Proceso de obtención de datos finalizado para el caso 1.<br>`
    );
  });

// Caso 2: Usuario no encontrado
obtenerDatosDeUsuario(456)
  .then((usuario) => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `Datos de usuario recibidos: ${usuario.nombre}`
    );
  })
  .catch((error) => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `<span class="error">Error al obtener datos: ${error.message}</span>`
    );
  })
  .finally(() => {
    appendToOutput(
      "asyncErrorPromisesOutput",
      `Proceso de obtención de datos finalizado para el caso 2.<br>`
    );
  });

  
