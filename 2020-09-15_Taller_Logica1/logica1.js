let numarray = [];
function ejercicio1() {
    if (numarray.length == 0) {
    let nombres = prompt("ingresar nombres");
        numarray.push(nombres)
    }
    else {
    let name2 = prompt("ingresar otro nombre");
    let flag = 0;
        for (let x = 0; x < numarray.length; x++) {  
            if (numarray[x] == name2) {
                alert("nombre repetido");
                flag = 1;
                break
            } 
        }
        if (flag == 0) {
        numarray.push(name2)}
    }
    document.getElementById("name").innerHTML = numarray.sort();
}



function ejercicio2() {
    let word = prompt("Ingresar palabra o frase");
    let spacios = word.split(" ").length -1;
    let letrasWord = word.length;
    let soloLetras = letrasWord - spacios;
    let newString = "";
    for (x = word.length-1; x >= 0; x--){
        newString += word[x]
    }
    //console.log(newString)
    document.getElementById("namerev").innerHTML = ("Tu palabra es " + newString + " Tiene " + soloLetras + " letras y " + spacios + " spacio")

}

function ejercicio3() {
    let word = prompt("Ingresa una frase");
    let newstring = "";
    for (let x = 0; x < word.length; x++){
        if(word[x+1] == undefined){
            newstring += word[x];
        }else {
            console.log(word[x]);
            newstring += word[x];
            newstring += ("-");
        }
        
        document.getElementById("guiones").innerHTML = (newstring.replace(" ", ""))

    }

}