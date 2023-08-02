const urlServidorMock = "https://jsonplaceholder.typicode.com/posts"; // servidor mock para simular las respuestas

function recogerDatos() {
  // Valores del campo de formulario
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("message").value;

  // Guardar datos en el LocalStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
  localStorage.setItem("mensaje", mensaje);

  // Mostrar datos almacenados en la consola
  const nombreGuardado = localStorage.getItem("nombre");
  const emailGuardado = localStorage.getItem("email");
  const mensajeGuardado = localStorage.getItem("mensaje");
  console.log("Nombre guardado:", nombreGuardado);
  console.log("Email guardado:", emailGuardado);
  console.log("Mensaje guardado:", mensajeGuardado);

  // Reiniciar el formulario vaciando los campos
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Creo el objeto con los datos a enviar
  const data = {
    nombre: nombreGuardado,
    email: emailGuardado,
    mensaje: mensajeGuardado,
  };

  // Envio la info al servidor Mock usando Fetch
  fetch(urlServidorMock, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Si la información se envió correctamente, muesta un aviso
        alert("Información enviada correctamente");
      } else {
        // Si ocurrió un error al enviar la información, muestra un aviso de error
        alert("Error al enviar la información");
      }
    })
    .catch((error) => {
      // Si ocurrió un error en la conexión o el servidor no existe, muestro un aviso de error
      alert("Error en la conexión o servidor no disponible");
    });
}