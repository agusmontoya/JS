const contenedorProductos = document.getElementById ('contenedorProductos')

let carrito = []

productos.forEach (producto) => {
const div = document.createElement ('div')
div.classList.add ('producto') 
div.innerHTML = `
<img src= ${producto.img} alt="">
<h3>${producto.nombre}</h3>
<p>Talle: ${producto.talle}</p>
<p class="precioProducto">${producto.precio}</p>
<button id="agregar${producto.id} class="botonAgregar"> Comprar <i class="fas-fa-shopping-cart"></i> </button>
`
contenedorProductos.appendChild(div)}