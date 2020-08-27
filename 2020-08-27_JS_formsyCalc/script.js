const inputName = document.getElementById('inputName')
const inputApellido = document.getElementById('inputApellido')
const nombreMensaje = document.getElementById('nombreMensaje')

function validarFormulario(event) {
    event.preventDefault() //no validar el formulario si el contenido esta vacio
    if(inputName.value == ""){
        inputName.classList.add('alert')
        nombreMensaje.innerText = "Llenar el campo por favor"
        inputName.placeholder = "El contenido esta vacio"
    }
    if(inputApellido.value == ""){
        inputApellido.classList.add('alert')
        nombreMensaje.innerText = "Llenar el campo por favor"
        inputApellido.placeholder = "El contenido esta vacio"
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
