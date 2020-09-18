
// const dark = document.getElementById('dark')
// const light = document.getElementById('light')
// const container = document.getElementById('container')


// dark.addEventListener('click', ()=>{
//     container.classList.add('dark')
//     container.classList.remove('light')
//     localStorage.setItem('colorTema','dark')
    
// })

// light.addEventListener('click', ()=>{
//     container.classList.add('light')
//     container.classList.remove('dark')
//     localStorage.setItem('colorTema','light')

// })

// if (localStorage.getItem("colorTema") === "dark") {
//     container.classList.add('dark')
// }
// else{
//     container.classList.remove('dark')
// }
// if (localStorage.getItem("colorTema") === "light") {
//     container.classList.add('light')
// }
// else{
//     container.classList.remove('light')
// }





// OTRA OPCION
const dark = document.getElementById('dark')
const light = document.getElementById('light')
const pink = document.getElementById('pink')
const container = document.getElementById('container')



dark.addEventListener('click', ()=>{
    container.className = " container dark"
    // container.classList.add('dark')
    // container.classList.remove('pink')
    // container.classList.remove('blue')
    localStorage.setItem('colorTema','dark')
})


light.addEventListener('click', ()=>{
    container.className = " container"
    // container.classList.remove('dark')
    // container.classList.remove('pink')
    // container.classList.remove('blue')
    localStorage.setItem('colorTema','pepito') //PEPITOEN ESTE CASO ES SOLO UNA VARIABLE UN NOMBRE QUE SE LE DA COMO GUIA PARA SABER EN QUE ESTADO ESTA
})

pink.addEventListener('click', ()=>{
    container.className = " container pink"
    // container.classList.add('pink')
    // container.classList.remove('blue')
    // container.classList.remove('dark')
    localStorage.setItem('colorTema','pink') //PEPITOEN ESTE CASO ES SOLO UNA VARIABLE UN NOMBRE QUE SE LE DA COMO GUIA PARA SABER EN QUE ESTADO ESTA
})

blue.addEventListener('click', ()=>{
    container.className = " container blue"
    // container.classList.add('blue')
    // container.classList.remove('pink')
    // container.classList.remove('dark')
    localStorage.setItem('colorTema','blue') //PEPITOEN ESTE CASO ES SOLO UNA VARIABLE UN NOMBRE QUE SE LE DA COMO GUIA PARA SABER EN QUE ESTADO ESTA
})

const temaEnStorage =()=>{
    const temaGuardado = localStorage.getItem('tema')
    if(temaGuardado == "dark"){
        container.classList.add("dark")
    } else if (temaGuardado == "pepito"){  //PEPITOEN ESTE CASO ES SOLO UNA VARIABLE UN NOMBRE QUE SE LE DA COMO GUIA PARA SABER EN QUE ESTADO ESTA
        container.className = " container"  //AQUI DARK SI ES UNA CLASE QUE SE AGREGA O BORRA DEL CONTAINER EN ESTE CASO
    } else if(temaGuardado == "pink"){
        container.classList.add("pink")
    } else if(temaGuardado == "blue"){
        container.classList.add("blue")
}
}


temaGuardado()
