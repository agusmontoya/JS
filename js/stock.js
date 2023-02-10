const productos = [

    {
        id: 1,
        nombre: "Vestido vintage",
        img: "./images/vestidoVintage.jpeg",
        talle: "S",
        precio: 6000
    },

    {
        id: 2,
        nombre: "Campera vintage",
        img: "./images/camperaVintage.jpeg",
        talle: "L",
        precio: 12000
    },

    {
        id: 3,
        nombre: "Pollera formal",
        img: "./images/polleraFormal.jpeg",
        talle: "M",
        precio: 3000
    },

    {
        id: 4,
        nombre: "Camisa blanca",
        img: "./images/camisaBlanca.jpeg",
        talle: "S",
        precio: 4000
    },

    {
        id: 5,
        nombre: "Pantalon rayado",
        img: "./images/pantalonRayado.jpeg",
        talle: "L",
        precio: 5000
    },

    {
        id: 6,
        nombre: "Blazer BYN",
        img: "./images/blazer.jpeg",
        talle: "L",
        precio: 6000
    }

]

const contenedorProductos = document.querySelector("#contenedorProductos")
let botonesAgregar = document.querySelectorAll(".agregar-producto")


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
    actualizarBotonesAgregar ()
}

pintarProductos();


function actualizarBotonesAgregar () {
    let botonesAgregar = document.querySelectorAll(".agregar-producto");
    botonesAgregar.forEach(boton => {
        boton.addEventListener ("click", agregarAlCarrito)
    })
};
const carrito = [];

function agregarAlCarrito (e) {
    const idBtn = e.currentTarget.id;
    const productoSeleccionado = productos.find(producto => producto.id === idBtn);
    console.log (productoSeleccionado)
}