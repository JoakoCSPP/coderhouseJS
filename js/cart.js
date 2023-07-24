const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const totalesContainer = document.getElementById("totales");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("productos"));
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.classList = "tarjeta-producto";
            nuevoProducto.innerHTML = `
    <img src=${producto.img}>
    <h3>${producto.nombre}</h3>
    <span>$${producto.precio}</span>
    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>
    `;
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto
            .getElementsByTagName("button")[0]
            .addEventListener("click", (e) => {
                const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
                cantidadElement.innerText = restarAlCarrito(producto);
                crearTarjetasProductosCarrito();
                actualizarTotales();
            });
            nuevoProducto
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e) => {
                const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
                cantidadElement.innerText = agregarAlCarrito(producto);
                actualizarTotales();
            });
        });
    }
    actualizarTotales();
    actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("productos"));
    let cantidad = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            cantidad += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
    }
    cantidadElement.innerText = cantidad;
    precioElement.innerText = precio;
    if (precio === 0) {
        reiniciarCarrito();
    }
}

document.getElementById("reiniciar").addEventListener("click", () => {
    contenedorTarjetas.innerHTML = "";
    reiniciarCarrito();

});
