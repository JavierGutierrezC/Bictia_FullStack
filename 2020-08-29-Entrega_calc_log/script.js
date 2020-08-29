const inputName = document.getElementById('inputName')
const inputApellido = document.getElementById('inputApellido')
// const nombreMensaje = document.getElementById('nombreMensaje')
const inputCorreo = document.getElementById('inputCorreo')
const inputCpassword = document.getElementById('inputCpassword')


function validarFormulario(event) {
    event.preventDefault() //no validar el formulario si el contenido esta vacio
    if(inputName.value == "") {
        inputName.classList.add('alert')
        // nombreMensaje.innerText = "Llenar el campo por favor"
        inputName.placeholder = "Inserte su Nombre"
    }
    if(inputApellido.value == "") {
       inputApellido.classList.add('alert')
        inputApellido.placeholder = "Inserte su Apellido"
    }
    if(inputCorreo.value == "") {
        inputCorreo.classList.add('alert')
        inputCorreo.placeholder = "Inserte su Correo"
    }
    if(inputCpassword.value == "") {
        inputCpassword.classList.add('alert')
        inputCpassword.placeholder = "Inserte su Contraseña"
    }
    else{
        // swal("En horabuena", "Bienvenido!", "success");
        swal({
            title: "Felicitaciones!",
            text: "Acceso garantizado!",
            icon: "success",
            buttons: false
          });
        setTimeout(()=>window.location = "./calculator/index.html",2000);
    }
}

// function validarFormulario(event) {
//     event.preventDefault() //no validar el formulario si el contenido esta vacio
//     if(inputApellido.value == ""){
//         inputApellido.classList.add('alert')
//         nombreMensaje.innerText = "Llenar el campo por favor"
//         inputApellido.placeholder = "El contenido esta vacio"
//     }
// }
