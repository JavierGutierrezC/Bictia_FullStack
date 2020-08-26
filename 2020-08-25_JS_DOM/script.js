function cajitaDeTexto() {
    var nombre = prompt("Excriba su nombre");
}

function confirmar() {
    var respuesta = confirm("Estas seguro de eliminar el archivo");

    if (respuesta) {
        alert("Archivo borrado");
    } else {
        alert("Archivo No borrado");
    }
}

var foto = document.getElementById("picture");

// foto.addEventListener("click", ()=>{
//     alert("soy el DOM");
// })

foto.addEventListener("dblclick", () => {
    foto.style.width = "100px";
    foto.style.border = "5px solid black";
});

// foto.addEventListener("click", function(){
//     alert("soy el DOM");
// })

// MOUSE

var box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
    box.classList.replace("box", "box1");
});

box.addEventListener("mouseleave", () => {
    box.classList.replace("box1", "box");
});

// document.getElementById("box").addEventListener("mouseenter",()=>{
//     box.classList.replace("box", "box1")
// })

box.addEventListener("mousemove", () => {
    console.log("el mouse se esta moviendo");
});
box.addEventListener("mousedown", () => {
    console.log("Has dado click en el mouse");
});
box.addEventListener("mouseup", () => {
    console.log("Has soltado el boton del mouse");
});

// Teclado

var teclado = document.getElementById("teclado");

// teclado.addEventListener("keydown", ()=>{
//     console.log("has oprimido una tecla");
// })

// teclado.addEventListener("keypress", ()=>{
//     console.log("has tecla oprimido");
// })

teclado.addEventListener("keyup", (e) => {
    console.log(e.key);

    if (e.key.toLowerCase() == "w") {
        alert("Vas hacia adelante");
    }
}); //e, es para revelar la informacion del objeto

var padre = document.getElementById("padre");

padre.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    e.target.style.background = "red";

    //e.target.classList.add("color")
});

//CREAR ELEMENTOS EN NODO O ETIQUETA

var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar");

agregar.addEventListener("click", () => {
    var texto = document.getElementById("texto").value;
    //Me trae el texto o informacion ingresada dentro del inpt

    var etiqueta = document.createElement("li");
    //Creo la etiquieta

    etiqueta.textContent = texto;
    //asinamos el valor dentro de la etiqueta inserto el texto que tiene el input

    lista.appendChild(etiqueta);
    //agregamos la etiqueta a la lista o nodo
});