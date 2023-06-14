alert("Ingresar cual producto desea, para salir ingresar 0 o ESC")
let seleccionarProductos = Number(prompt("1-remera 2-shorts 3-camisa 4-pantalon 5-billetera 6-lentes"))
let cantidadComprada;
let total = 0

function cantidad(cantidad, precio) {
    return cantidad * precio
}

while (seleccionarProductos != 0, seleccionarProductos != "ESC" ){
    switch (seleccionarProductos) {
        case 1:
            cantidadComprada = prompt("Indicar cantidad de remeras")
            total += cantidad(cantidadComprada, 4500)
            break;
        case 2:
            cantidadComprada = prompt("Indicar cantidad de shorts")
            total += cantidad(cantidadComprada, 2500)
            break;
        case 3:
            cantidadComprada = prompt("Indicar cantidad de camisas")
            total += cantidad(cantidadComprada, 12000)
            break;
        case 4:
            cantidadComprada = prompt("Indicar cantidad de pantalones")
            total += cantidad(cantidadComprada, 10000)
            break;
        case 5:
            cantidadComprada = prompt("Indicar cantidad de billeteras")
            total += cantidad(cantidadComprada, 4500)
            break;
        case 6:
            cantidadComprada = prompt("Indicar cantidad de lentes")
            total += cantidad(cantidadComprada, 7000)
            alert("la compra es de un total de: " + total)
            break;

        default:
            break;
}
alert("la compra es de un total de: " + total)
break
}





edad = Number(prompt("Confirme su edad: "))

if (edad < 18){
    alert ("Eres menor de edad, ¡No puedes comprar!")
    console.log("Edad del usuario: ", edad)
}if (edad >= 18) {
    alert ("Bienvenido!")
    console.log("Edad del usuario: ", edad)
} else {
    alert("Chau")
    console.log("No ingreso ninguna edad")
}


