let producto = "";
let precio = 0;
let cantidad = 0;
let cantidadTotal = 0;
let seguirComprando = false;
let totalCompra = 0;

do{
    producto = prompt ("¿Qué prenda de nuestro catálogo querés comprar?")
    cantidad = parseInt (prompt ("¿Cuántas prendas vas a llevar?"))

    while (Number.isNaN (cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert ("Por favor elegí un número")
        } else {
            alert ("Por favor ingrese un número que no sea cero")
        }
        cantidad = parseInt(promp ("¿Cuántas prendas vas a llevar?"))
    }

    switch (producto){
        case "vestido lila":
            precio = 1200;
            break;
        case "pollera escosesa":
            precio = 2000;
            break;
        case "pantalon palazo":
            precio = 3500;
            break;
        default:
            alert("Debes elegir una prenda de nuestro catálogo")
            precio = 0
            cantidad = 0;
    }

    seguirComprando = confirm("Seguir comprando")
} while (seguirComprando)
