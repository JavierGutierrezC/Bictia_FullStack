//Este codigo esta basado en el que hicimos en calse ya que por mi cuenta no logre hacerlo solo. 
//Sin embargo lo hice son la intencion de entender el paso a paso

const tabla = document.getElementById("listaproductos")


const productosEnStorage = ()=>{
    const productsGuardados = JSON.parse(localStorage.getItem("products"))
    console.log(productsGuardados)
    for(let i = 0; i<productsGuardados.length; i += 1 ){
        tabla.innerHTML += `
            <tr>
                <th>${i+1}</th>
                <td>${productsGuardados[i].producto}</td>
                <td>${productsGuardados[i].cantidad}</td>
                <td>${productsGuardados[i].marca}</td>
            <tr>
        `
        // ""
        //  ''
        // ``
        
    }

}
productosEnStorage()

document.getElementById('limpiar').addEventListener('click', ()=>{
    localStorage.clear()
    tabla.innerHTML=''
})