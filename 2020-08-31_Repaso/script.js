
let usu = "Pepito";
let con = 234;

function login() {
    let contraseña = prompt("ingrese su clave");
    let usuario = parseInt(prompt("Ingrese su usuario"))

    if (usu == usuario && con == contraseña) {
        alert("bienvenido " + usu)
    } else {
        alert("intente de nuevo")
    }
}

const eventoForm = document.getElementById("evento");

eventoForm.addEventListener("click", ()=>{

    let usuarioF = document.getElementById("usuForm").value;
    let passwordF = document.getElementById("contraForm").value;

    
})
