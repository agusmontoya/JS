const carrito = JSON.parse(localStorage.getItem("productos-carrito"))
const contenedorCarritoProductos = document.getElementById("#carritoProductos")
const contenedorCarritoAcciones = document.getElementById("#carritoAcciones")

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
    contenedorCarritoProductos.append("div")
    }
    )

}



/*<div id="carritoProducto" class="carritoProducto">
                    <img class="carrito-producto-imagen" src="./images/vestidoVintage.jpeg" alt="">
                    <div class="carrito-producto-nombre">
                        <small>Producto</small>
                        <h3>Vestido vintage</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p id="cantidad">1</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$4000</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$4000</p>
                    </div>
                    <button class="eliminarDeCarrito"><i class="bi bi-trash-fill"></i></button>
                </div>*/