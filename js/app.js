const contenedorProductos = document.getElementById ('contenedorProductos')

const contenedorCarrito= document.getElementById('carritoContenedor')

const botonVaciarCarrito = document.getElementById ('vaciarCarrito')
botonVaciarCarrito.addEventListener('click', ()=>{
    carrito.length=0
    actualizarCarrito()
})

const contadorCarrito = document.getElementById ('totalItem')

const precioTotal = document.getElementById('precioTotal')

document.addEventListener('DOMContentLoaded',()=> {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carriti'))
        actualizarCarrito()
    }
})

let carrito = []

productos.forEach ((producto) => {
const div = document.createElement ('div')
div.classList.add ('producto') 
div.innerHTML = `
<img src= ${producto.img} alt="">
<h3>${producto.nombre}</h3>
<p>Talle: ${producto.talle}</p>
<p class="precioProducto">${producto.precio}</p>
<button id="agregar${producto.id} class="botonAgregar"> Comprar <i class="fas-fa-shopping-cart"></i> </button>
`
contenedorProductos.appendChild(div)

const btn = document.getElementById('agregar${producto.id}')

btn.addEventListener ('click', ()=>{
    agregarCarrito(producto.id)
})
}
)




const agregarCarrito = (produId) => {
    const item = productos.find( (produ) => produ.id == produId)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito = (produId) =>{
    const item = carrito.find ((produ) => produ.id== produId)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito()
}

const actualizarCarrito=()=>{
    carrito.forEach((produ)=>{
        const div=document.createElement('div')
        div.innerHTML=`
        <p>${produ.nombre}</p>
        <p>Precio: ${produ.precio}</p>
        <p>Cantidad: <span id="cantidad">${produ.cantidad}</span></p>
        <button onclick = "eliminarDeCarrito (${produ.id})>" class="btnEliminar"><i class= "fas-fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + produ.precio, 0)
}