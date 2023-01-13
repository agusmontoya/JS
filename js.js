alert ("Bienvenido a nuestra tienda online")

const carrito = []

const orderarPrecioMenor = () => {
    listaPrendasDisponibles.sort ( (a,b) => a.precio - b.precio)
    mostarLista ()
};

const mostarLista = () => {
    
    const listaOrdenada = listaPrendasDisponibles.map (prendas => {
        return prenda.nombre + " " + prenda.precio
    })
    alert ("Stock disponible:" + "\n\n" + listaOrdenada)
    comprarPrendas(prendasDisponibles)
}

const comprarPrendas = (prendasDisponibles) => {
    let nombrePrenda = ""
    let cantidadPrenda = 0
    let seguirComprando = false 

    do {
        nombrePrenda = prompt ("Qué desea comprar?" + "\n" + listaOrdenada)
        cantidadPrenda = parseInt(prompt("Cuántas prendas desea agregar en el carrito?"))


        const prenda = listaPrendasDisponibles.find (prenda => prenda.nombre.toLowerCase() === nombrePrenda.toLowerCase())

        if (prenda) {
            agregarAlCarrito(prenda, prenda.id, cantidadPrenda)
        } else {
            alert('Por favor elija una prenda que se encuentre en nuestro catálogo')
        }

        seguirComprando = confirm ("Desea agregar otra prenda?")
    } while (seguirComprando)

    confirmarCompra ()
}
const agregarAlCarrito = (prenda, prendaId, cantidadPrenda) => {
    const prendaRepetida = carrito.find(prenda => prenda.id === prendaId)
    if (!prendaRepetida) {
        prenda.cantidad += cantidadPrenda
        carrito.push(prenda)
    } else {
        productoRepetido.cantidad += cantidadPrenda
    }
    confirmarCompra()
}

const confirmarCompra = () =>
{
    const listaProductos = carrito.map(prenda => {
        return prenda.nombre+" "+"Cantidad"+prenda.cantidad
    })

    const confirmacion = confirm("Usted compró: "
        +listaProductos
    )
}


orderarPrecioMenor()