const carrito = JSON.parse(localStorage.getItem("productos-carrito"))
const contenedorCarritoProductos = document.getElementById("productos")
const contenedorCarritoAcciones = document.getElementById("carritoAcciones")
const botonesEliminar = document.querySelectorAll (".eliminarDeCarrito")
const botonVaciar = document.getElementById('vaciarCarrito')
const total = document.getElementById ('precioTotal')


function pintarProductosCarrito () {
    if (carrito) {
        contenedorCarritoProductos.classList.remove("disabled")
        contenedorCarritoAcciones.classList.remove("disabled")
        carrito.forEach (producto => {
            const div = document.createElement('div');
            div.classList.add ("carritoProducto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.img}" alt="">
            <div class="carrito-producto-nombre">
                <small>Producto</small>
                <h3>${producto.nombre}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p id="cantidad">${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="eliminarDeCarrito" id="${producto.id}><i class="bi bi-trash-fill"></i></button>
    
        `;
        contenedorCarritoProductos.appendChild(div);
        }
        )
    
    } else {
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
    }
    actualizarBotones();

    total.innerText = carrito.reduce ((acc,producto) => acc + producto.precio, 0)
    
}

pintarProductosCarrito ();


function actualizarBotones () {
    let botonesEliminar = document.querySelectorAll(".eliminarDeCarrito");
    botonesEliminar.forEach (boton => {
        boton.addEventListener("click", eliminarProdCarrito)
    })
}

function eliminarProdCarrito (prodId) {
    const item = carrito.find (producto => producto.id == prodId)
    const index = carrito.indexOf(item)
    carrito.splice(index, 1)

    pintarProductosCarrito()
    
    localStorage.setItem ("productos-carrito", JSON.stringify (carrito))
}

botonVaciar.addEventListener ("click", () => {
    carrito.length = 0;
    localStorage.setItem ("productos-carrito", JSON.stringify (carrito))
    pintarProductosCarrito()
})
