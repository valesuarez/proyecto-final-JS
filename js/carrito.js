const armarCarrito = ()=>{
    //console.log("funciona")
    listasComprar.innerHTML = "";
    listasComprar.style.display="flex"
    let listasProductosComprar =document.createElement("div");
    listasProductosComprar.className = "listaProductosComprar"
    listasProductosComprar.innerHTML = `<h1 class="titulo"> Carrito </h1>`;

     listasComprar.append(listasProductosComprar);

    const listaBtnCerrar = document.createElement ("h2");
    listaBtnCerrar.innerText = "X"
    listaBtnCerrar.className ="cerrarLista"
    
    
    listaBtnCerrar.addEventListener('click',() =>{
        listasComprar.style.display = "none";
    })
    
    
    listasProductosComprar.append(listaBtnCerrar);
    
    
    llenar_carrito.forEach((producto) =>{
        
        let contenidoDelCarrito = document.createElement("div")
        contenidoDelCarrito.className = "contenidoDelCarrito"
        contenidoDelCarrito.innerHTML =`
        <img class="imagenProductoCarrito" src="${producto.imagen}">
        <h3 class="nombreProductoCarrito">${producto.nombre}</h3>
        <p class="precioProductoCarrito">$ ${producto.precio}</p>
       
        `
    
        listasComprar.append(contenidoDelCarrito); 

        let eliminarProducto = document.createElement("span")
        eliminarProducto.innerText = "X";
        eliminarProducto.className = "eliminarProd"
        contenidoDelCarrito.append(eliminarProducto)

        eliminarProducto.addEventListener('click',eliminarProd)

        })

        
        
    
    //----VACIAR CARRITO
    
    const vaciarCarrito = document.createElement ("div");
    vaciarCarrito.innerHTML = `<buttom><p>Vaciar Carrito</p></buttom>`
    vaciarCarrito.innerText =" Vaciar "
    vaciarCarrito.className = "vaciarCarrito"
   
    listasComprar.append(vaciarCarrito);

    vaciarCarrito.addEventListener('click',() =>{
        console.log("logrado")
        llenar_carrito = []
        listasComprar.innerHTML = ""

    })

    const total = llenar_carrito.reduce((acc,el) => acc + el.precio, 0);

    const totalCarrito = document.createElement('div')
    totalCarrito.className = "totalCarrito"
    totalCarrito.innerHTML = `Total a pagar: $ ${total}`
    guardarDatos(llenar_carrito);
    listasComprar.append(totalCarrito);

};
verCompra.addEventListener('click', armarCarrito)

const eliminarProd = ()=>{
    const encontrarId = llenar_carrito.find((element)=>element.id);
    llenar_carrito = llenar_carrito.filter((carritoId) => {
        return carritoId !== encontrarId;

    });

    armarCarrito()
    
}

function guardarDatos(llenar_carrito){
    localStorage.setItem('carrito',JSON.stringify(llenar_carrito));
    //console.log(localStorage)
}