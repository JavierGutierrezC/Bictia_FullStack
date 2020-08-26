// Var permite realizar modificaciones a las variables. Al igual que let
// const- constante que no permite cambair su valor y se debe asignar el valor una vez declarada

//ES6 GLOBAL

var nombre5 = "maria sanches";
nombres5= "MAria Ruiz"; //permite modificar el valor


//ES&

//const nombre6 = "Pedro Sanchez";
//nombre6 = "Pedro Garcia"; // No se puede modificar por ser una variable de tipo constante. Generara un error

let nombreLet = "Laura Martinez";
nombreLet = "Laura Perez"; // let puede ser modificado

// GLOBAL - se puede modificar en caulquier seccion del codigo

var global = 0;

function varGlobal(){
    for (var i = 0; i < 5; i++) {
        global = 1;
    }
}
varGlobal();
console.log(global) // Nos imprime 4

// var LOCAL

function varLocal() {
    var local= "Hello world"; // Varaible local
}

varLocal();
//console.log(local); // Muestra error por que la variable esta decalrada dentro del codigo

function varPrueba() {
    var x = 70;
    if (true) {
        var x= 50;
        console.log(x); // Aqui aparece 50
    }
    console.log(x); // aqui aparece 50
}


function letPrueba() {
    let y = 70;
    if (true) {
        let y = 50;
        console.log(y); // Aqui aparece 50
    }
    console.log(y); // aqui aparece 70
}

// let variable = document.getElementById("variable")
// function name(params) {

// }

// variable.onclick = function() {
//     nombreFuncion()
// }

// variable.addEventListener("click", ()=>{

// })



// FUNTIONS
// Funcion tradicional ya que se define con la palabra reservada function
function soyUnaFuncion(num1, num2) {
    // retorna un valor o un resultado del proceso
    
    return num1 + num2;
}

console.log(soyUnaFuncion); //arroja la estructura de l funcion


// FUNCIONES ANONIMAS

// Se utilizan directamete sin un nombre
// ejemplo funcion flecha

let sumar=(a,b)=> a+b;
console.log(sumar(10, 15));

let hola= function() {
        return "hola, como estas"
}
console.log(hola());

// CONDICIONALES- flujo del programa dependiendo de unas condiciones que se cumplen

let color=prompt("INgrese el color en INgles");

if(color == "red") {
    document.write("<h1 style='color:red'> Si el color es red-rojo </h1>")
} else {
    document.write("<h1 style= ' color: " + color + "' > No el color es red, el color elegido fue " + color + "</h1>")
}

// OPERADORES DE COMPARACION

// == IGAULDAD
// === ESTRICTAMENTE IGUAL TIENES QUE SER EL MISMO TIPO DE DATO 
// != DIFERENTE O DISTINTO
// !== NO IDENTICO, HASTA EL TIPO DE DATO DEBE SER DIFERENTE

// CALCULADORA

let operacion = "suma";
switch (operacion) {
    case "suma":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la suma es: " + (num1+num2))
        break;
    case "resta":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la resta es: " + (num1-num2))
        break; 
    case "multiplicar":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la multiplicacion es: " + (num1*num2))
        break; 
    case "dividir":
        let num1= parseFloat(prompt("ingrese un numero"))
        let num2= parseFloat(prompt("ingrese segundo numero"))
        document.write("El resultado de la division es: " + (num1/num2))
        break;        
    default:
        break;
}

