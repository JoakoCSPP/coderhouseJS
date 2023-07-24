const persona = {
    nombre: "profe",
    edad: undefined
};

persona.edad = Number(prompt("Confirme su edad: "));

while (isNaN(persona.edad)) {
    persona.edad = Number(prompt("Edad inválida. Por favor, ingrese un número: "));
}

if (persona.edad < 18) {
    console.log("Eres menor de edad, ¡No va a poder comprar!");
    console.log("Edad del usuario:", persona.edad);
} else if (persona.edad >= 18) {
    console.log("El usuario es Bienvenido!");
    console.log("Edad del usuario:", persona.edad);
} else {
    console.log("No ingresó ninguna edad");
}



//Tarjetas de los productos


const contenedorTarjetas = document.getElementById("productos-container")

function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <img src=${producto.img}>
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
    })
}
crearTarjetasProductosInicio(productos)




