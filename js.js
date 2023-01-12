alert ("Bienvenido a nuestra tienda online")

const carrito = []

const orderarPrecioMenor = () => {
    listaPrendasDisponibles.sort ( (a,b) => a.precio - b.precio)
    mostarLista ()
}

const mostarLista = () => {
    
    const listaOrdenada = listaPrendasDisponibles.map (prendas => {
        return prendas.nombre + " " + prendas.precio
    })
    alert ("Stock disponible:" + "\n\n" + listaOrdenada)
}

orderarPrecioMenor()
