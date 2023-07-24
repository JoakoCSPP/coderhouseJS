function recogerDatos(){
    //valores del campo de formulario
    let nombre = document.getElementById("name").value
    let email = document.getElementById("email").value
    let mensaje = document.getElementById("message").value

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("mensaje", mensaje);

  // datos almacenados en el localStorage
    const nombreGuardado = localStorage.getItem("nombre");
    const emailGuardado = localStorage.getItem("email");
    const mensajeGuardado = localStorage.getItem("mensaje");

  //  datos almacenados en la consola
    console.log("Nombre guardado:", nombreGuardado);
    console.log("Email guardado:", emailGuardado);
    console.log("Mensaje guardado:", mensajeGuardado);
}