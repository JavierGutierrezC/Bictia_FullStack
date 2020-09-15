// DATOS NUMERICOS
// let edad = 25;

// let decimal = 2.5;
// console.log(decimal);

// let nombre = "yerly"
// console.log(nombre)


// Boolean

// let x = false
// console.log(x)

// UNDEFINED 

// let saludo
// console.log(saludo)

// NAN 
// let nombre = "yerly"
// console.log(nombre + 3)

// OBJETOS

// const persona = {
//     name: "javier Gutierrez",
//     edad: 39,
//     barrio: "santa barbara",
//     hobbies: ["fotbal", "baseball", "basket"],
//     padre: {
//         name: "papa",
//         edad: 56,
//         barrio: "Bogota",
//         hobbies: ["footbal", "basket", "baseball"]
//         },
//     madre: {
//         name: "mama",
//         edad: 45,
//         barrio: "Bogota",
//         hobbies: ["pintar", "leer", "moda"]
//     }
    
// }

// console.log(persona.padre.hobbies[0])
// console.log(persona.padre.name)

// IMPRIMIR TODO EL OBJECTO EN PANTALLA. NO ES USADO REGULARMENTE 
// SOLO PARA ENVIAR OBJETO A BD
// const javier = JSON.stringify(persona)
// document.write(javier)

// ARRAYS, UN CONJUNTO QUE ORDENA MediaElementAudioSourceNode, DE CUALQUIER TIPO. 
// SE ORGANIZAN POR MEDIO DE POSICIONES. SE EMPIZA DESDE 0 
let numero = [2, 3.4, 5, 7];
let palabras = ["pepito", "pepita", "pedrito"];
let boleanos = [true, false, true];


// MULTIPLES DATOS 
let sancocho= ["pollo", 3, "yuca", 1, true, 3,4]

// METODOS Y PROPIEDADES QUE ME PERMITEN MANIPULAR LOS ARRAYS 
let videojuegos=["spiderman", "MarioBros", "Contra", "God of war", "Pacman"];

// LENGTH- SABER LA LONGITUD DE UN ARREGLO 
document.write("Tienes " + videojuegos.length + " videojuegos")

// PUSH- AGREGAR UN ELEMENTO AL FINAL DEL ARREGLO 
videojuegos.push("Metal gear", "MetalSlug", "World of Tanks")

document.write("<br>" + videojuegos)

// SPLICE- AGREGAR NUEVOS ELEMENTOS EN UN ARRAY 
// EN POSICIONES ESPECIFICAS O BORRARLOS
// PRIMER PARAMETRO(2) ES LA POSICION DONDE QUIERO QUE SE INSERTEN LOS NUEVOS ELEMENTOS
// SEGUNDO PARAMETRO(3) ES LA CANTIDAD DE ELEMENTOS QUE QUIERO QUE SE ELIMINEN A PARTIR 
// DE ESA POSICIO. EN ESTE CASO ELIMINA DESDE LA POSICION 2 EN ADELANTE
videojuegos.splice(2,0, "Mario Kart", "Zelda")

document.write("<br>" + videojuegos)

// POP- ELIMINA LA ULTIMA POSICION DEL ARREGLO
videojuegos.pop();
document.write("<br>" + videojuegos)

// DELETE- ELIMINA CUALQUIR POSICION,DEJA LA POSICION VACIA, UNDEFINED
delete videojuegos[0];
document.write("<br>" + videojuegos)
console.log(videojuegos)

// SLICE- SEPARAR UN RANGO DE POSICIONES DE UN ARREGLO.
// EL PRIMER NUMERO ES DESDE DONDE ARRANCA LA SELECCION Y EL ULTIMO NUMERO, 
// NO INLUIDO ES HASTA DONDE VA LA SELECCION 
// NO MOFIFICA EL ARREGLO ORIGINAL
// TAMBIEN SE UTILIZA CON STRINGS 
let cortar= videojuegos.slice(4,videojuegos.length)
console.log(cortar)

// CONCAT- CONCATENAR, ENLAZAR, UNIR DOS ARREGLOS
let consolas= ["Xbox", "PlayStation", "Nintendo", "Sega", "Atari"]
// LOS MANEJA POR SEPARADOS COMO ARREGLOS INDEPENDIENTES
document.write("<br>" + videojuegos + " " + consolas)
// LOS UNE COMO UNO SOLO
let grupoRetro= videojuegos.concat(consolas);
console.log(grupoRetro)

// JOIN- SEPARAR UN ELEMENTO DEL OTRO, 
// POR MEDIO DE CUALQUIER SIMBOLO, ESPACIO, TAG O VARIABLE 
document.write("<br>" + grupoRetro.join("<br>"))

// SORT- ORGANIZAR, ALFABETICAMENTE
document.write(grupoRetro.sort())


// CICLO FOR- SE EJECUTA HASTA QUE LA CONDICION SE CUMPLA
for (let i = 0; i < consolas.length; i++) {
    document.write(consolas[1] + "<br>")
}

// WHILE- SE EJECUTA INDEFINIDAMENTE MIENTRAS SE CUMPLA UNA CONDICION
let anime= ["Inuyasha", "Sailor moon", "Saint seiya"]
let posicion= 0;
while (posicion< anime.length) {
    document.write(anime[position] + "<br>")
    position++;
}

// DO-WHILE
let pass=prompt("Ingrese su contraseña");
let bd="bitBictia"

if (pass == bd) {
    document.write("bienvenido")
    
}