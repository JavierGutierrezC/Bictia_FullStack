const suma = document.getElementById("suma"); // Captura los tipos de operación
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");


/* OPERACIÓN SUMA*/

suma.addEventListener("click", () => { // Creamos un evento
    let num1 = parseFloat(document.getElementById("num1").value); // Capturamos los datos de los inputs
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = (num1 + num2);
    document.getElementById("inputResultado").value = resultado

})

/* OPERACIÓN RESTA*/

resta.addEventListener("click", () => {

    let num1 = parseFloat(document.getElementById("num1").value); // Capturamos los datos de los inputs
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = (num1 - num2);
    document.getElementById("inputResultado").value = resultado

})


/* OPERACIÓN MULTIPLICACIÓN */

multiplicacion.addEventListener("click", () => {

    let num1 = parseFloat(document.getElementById("num1").value); // Capturamos los datos de los inputs
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = (num1 * num2);
    document.getElementById("inputResultado").value = resultado.toFixed(3) //El método toFixed() formatea un número usando notación de punto fijo 
})

/* OPERACIÓN DIVISION */

division.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); // Capturamos los datos de los inputs
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = (num1 / num2);

    document.getElementById("inputResultado").value = resultado.toFixed(3)
})