const formReg = document.getElementById("formRegistro")

let listaDeProductos = [];
formReg.addEventListener("submit", (e)=>{
    e.preventDefault()

    const inputProducto = document.getElementById("producto").value;
    const inputCantidad = document.getElementById("cantidad").value;
    const inputMarca = document.getElementById("marca").value;

    const comprar = {
        producto: inputProducto,
        cantidad: inputCantidad,
        marca: inputMarca
    }

    

    alert("Producto agregado con exito")
    console.log(comprar,"estas son las compras")
    console.log(typeof comprar)
    console.log(listaDeProductos,"esta es la lista de productos")
    console.log(typeof listaDeProductos)
    
    guardarEnStorage(comprar)
    

})

const guardarEnStorage = (comprar)=>{
    if(localStorage.getItem("products") == null){
        listaDeProductos.push(comprar)
        const comprarEnString = JSON.stringify(listaDeProductos)
        //SIno se hace el stringify quedaria como un array de objes, un object object
        localStorage.setItem("products", comprarEnString)
    }else{
        listaEnStorage =JSON.parse(localStorage.getItem("products"))
        listaEnStorage.push(comprar)
        const comprarEnString = JSON.stringify(listaEnStorage)
        localStorage.setItem("products", comprarEnString)
    }
}