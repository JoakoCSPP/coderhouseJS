const persona = {
    edad: prompt("Confirme su edad: ")
}
if (persona.edad < 18){
    console.log("Eres menor de edad, ¡No puedes comprar!")
    console.log("Edad del usuario: ", persona.edad)
}if (persona.edad >= 18) {
    console.log("Bienvenido!")
    console.log("Edad del usuario: ", persona.edad)
} else {
    console.log("No ingreso ninguna edad")
}



// ["remera", "shorts", "camisa", "pantalon", "billetera", "lentes"]
alert("Productos disponibles: remera, shorts, camisa, pantalon, billetera, lentes")
let productos = ["remera", "shorts", "camisa", "pantalon", "billetera", "lentes"]
let productoSolicitado = prompt("Ingresar un producto que esté disponible")
let cantidadComprada
let total = 0

function cantidad(cantidad, precio) {
    return cantidad * precio
}

while (true) {
    
    if (productos.includes(productoSolicitado)) {
        switch (productoSolicitado) {
            case "remera":
                cantidadComprada = prompt("Indicar cantidad de remeras");
                total += cantidad(cantidadComprada, 4500);
                break;
            case "shorts":
                cantidadComprada = prompt("Indicar cantidad de shorts");
                total += cantidad(cantidadComprada, 2500);
                break;
            case "camisa":
                cantidadComprada = prompt("Indicar cantidad de camisas");
                total += cantidad(cantidadComprada, 12000);
                break;
            case "pantalon":
                cantidadComprada = prompt("Indicar cantidad de pantalones");
                total += cantidad(cantidadComprada, 10000);
                break;
            case "billetera":
                cantidadComprada = prompt("Indicar cantidad de billeteras");
                total += cantidad(cantidadComprada, 4500);
                break;
            case "lentes":
                cantidadComprada = prompt("Indicar cantidad de lentes");
                total += cantidad(cantidadComprada, 7000);
                break;
            default:
                break;
        }
        alert("La compra es de un total de: " + total);
        break; 
    } else {
        alert("El producto solicitado no está disponible. Por favor, ingrese un producto válido.");
    }
}

