const promedio = document.getElementById("promedio"); // ES UNA CONSTANTE POR QUE ESTAMOS LLAMANDO AL NODO NO AL VALOR

promedio.addEventListener("click", ()=>{
    let num1= parseFloat(document.getElementById("num1").value); //TRAE Y ALMACENA EL VALOR DEL INPUT
    let num2= parseFloat(document.getElementById("num2").value); //TRAE Y ALMACENA EL VALOR DEL INPUT2
    let num3= parseFloat(document.getElementById("num3").value); //TRAE Y ALMACENA EL VALOR DEL INPUT2
    let respuesta= document.getElementById("respuesta");

    let resultado=((num1 + num2 + num3)/3).toFixed();

    respuesta.innerHTML="<i>" + resultado + "</i>";

})