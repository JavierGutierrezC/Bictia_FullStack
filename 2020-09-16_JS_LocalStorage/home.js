
const saludar = document.getElementById("saludar");
console.log(saludar);

saludar.addEventListener('click', ()=>{
    const nombreUsuario = prompt("Escribe tu numbre");
    localStorage.setItem("nombreUsuario", "javier gutierrez");
})
