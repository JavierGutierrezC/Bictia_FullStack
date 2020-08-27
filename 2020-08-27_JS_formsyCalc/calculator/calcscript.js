const calcular = document.getElementById("Calcular"); // ES UNA CONSTANTE POR QUE ESTAMOS LLAMANDO AL NODO NO AL VALOR

calcular.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //TRAE Y ALMACENA EL VALOR DEL INPUT
    let num2= parseFloat(document.getElementById("num2").value); //TRAE Y ALMACENA EL VALOR DEL INPUT2
    let respuesta= document.getElementById("respuesta");

    let resultado=((num1 + num2)).toFixed(3);

    respuesta.innerHTML="<i>" + resultado + "</i>";

})

// let operacion = "suma";
// switch (operacion) {
//     case "suma":
//         let num1= (document.getElementById("num1").value);
//         let num2= (document.getElementById("num2").value);
//        
//         break;
//     case "resta":
//         let num1= (document.getElementById("num1").value);
//         let num2= (document.getElementById("num2").value);
//         
//         break; 
//     case "multiplicar":
//         let num1= (document.getElementById("num1").value);
//         let num2= (document.getElementById("num2").value);
//         
//         break; 
//     case "dividir":
//         let num1= (document.getElementById("num1").value);
//         let num2= (document.getElementById("num2").value);
//         
//         break;        
//     default:
//         break;
// }
