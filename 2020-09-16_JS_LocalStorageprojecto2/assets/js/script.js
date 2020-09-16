
const dark = document.getElementById('dark')
const light = document.getElementById('light')
const container = document.getElementById('container')


dark.addEventListener('click', ()=>{
    container.classList.add('dark')
    container.classList.remove('light')
    localStorage.setItem('colorTema','dark')
    
})

light.addEventListener('click', ()=>{
    container.classList.add('light')
    container.classList.remove('dark')
    localStorage.setItem('colorTema','light')

})

if (localStorage.getItem("colorTema") === "dark") {
    container.classList.add('dark')
}
else{
    container.classList.remove('dark')
}
if (localStorage.getItem("colorTema") === "light") {
    container.classList.add('light')
}
else{
    container.classList.remove('light')
}


