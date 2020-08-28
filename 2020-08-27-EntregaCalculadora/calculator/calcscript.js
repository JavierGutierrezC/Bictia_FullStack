const suma= document.getElementById("Sumar"); 
const resta= document.getElementById("Restar"); 
const division= document.getElementById("Dividir"); 
const multiplicacion= document.getElementById("Multiplicar"); 

//let num1=parseFloat(document.getElementById("num1").value);
//let num2=parseFloat(document.getElementById("num2").value);
function reset() {
    num1=parseFloat(document.getElementById("num1").value = "");
    num2=parseFloat(document.getElementById("num2").value = "");
}

function setValue() {
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    return[num1, num2];
} 
suma.addEventListener("click", ()=>{
    
    [num1,num2]=setValue();
    let ans= num1 + num2;
    reset();
    //document.getElementById("res").value = ans;
    document.getElementById("res").value = ans;
})
resta.addEventListener("click", ()=>{
    [num1,num2]=setValue();
    let ans= num1 - num2;
    reset();
    document.getElementById("res").value = ans;
    
})
division.addEventListener("click", ()=>{
    [num1,num2]=setValue();
    let ans= num1 / num2;
    reset();
    document.getElementById("res").value = ans;
})
multiplicacion.addEventListener("click", ()=>{
    [num1,num2]=setValue();
    let ans= num1 * num2;
    reset();
    document.getElementById("res").value = ans;
   
})
//     let operacion = "suma";
//     switch (operacion) {
//         case "suma":
//             let num1= (document.getElementById("num1").value);
//             let num2= (document.getElementById("num2").value);
//             let resultado=((num1 + num2)).toFixed(3);
//             document.getElementById("Respuesta").value = resultado
//             break;
//         case "resta":
//             let num1= (document.getElementById("num1").value);
//             let num2= (document.getElementById("num2").value);
//             let resultado=((num1 - num2)).toFixed(3);
//             document.getElementById("Respuesta").value = resultado
//             break; 
//         case "multiplicar":
//             let num1= (document.getElementById("num1").value);
//             let num2= (document.getElementById("num2").value);
//             let resultado=((num1 * num2)).toFixed(3);
//             document.getElementById("Respuesta").value = resultado
//             break; 
//         case "dividir":
//             let num1= (document.getElementById("num1").value);
//             let num2= (document.getElementById("num2").value);
//             let resultado=((num1 / num2)).toFixed(3);
//             document.getElementById("Respuesta").value = resultado
//             break;        
//         default:
//             break;
// }

