const contenedorProductos = document.querySelector("#contenedorProductos")
const contador = document.getElementById("contador")


function pintarProductos () {
    productos.forEach(producto => {
        const div = document.createElement ("div");
        div.classList.add("descripcion-producto");
        div.innerHTML= `
            <img class="img-producto" src="${producto.img}" alt="">
            <div>
                <h3 class="titulo-producto">${producto.nombre}</h3>
                <p class="talle-producto">${producto.talle}</p>
                <p class="precio-producto">$${producto.precio}</p>
                <button class="agregar-producto" id="${producto.id}">Agregar</button>
            </div>
        `;
    contenedorProductos.append(div)
})

}

pintarProductos();

let carrito;


const carritoLocalStorage = JSON.parse(localStorage.getItem("productos-carrito"))
if (carritoLocalStorage) {
   carrito = carritoLocalStorage;
   actualizarContador()
} else {
    carrito = []
}


contenedorProductos.addEventListener ('click', (e)=>{
    if (e.target.classList.contains("agregar-producto")){
        validarCantidadCarrito(e.target.id)
    }
})
function validarCantidadCarrito (prodId) {
    const productoRepetido = carrito.find(producto => producto.id == prodId);
    if (!productoRepetido){
        const producto = productos.find(producto => producto.id == prodId);
        carrito.push(producto);
    } 
    actualizarContador()
    localStorage.setItem("productos-carrito", JSON.stringify(carrito))
}

function actualizarContador () {
    let nuevoContador = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    contador.innerText = nuevoContador;
}
